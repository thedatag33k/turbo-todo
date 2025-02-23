<template>
    <!-- Navbar -->
    <div class="navbar fixed-top shadow">
        <div class="container py-1 d-flex">
            <p class="fs-4 ms-1 m-0 me-auto no-select"><i :class="props.iconClass"></i> {{ props.title }}</p>
            <slot name="nav-buttons"></slot>
            <button class="btn py-0 my-0 px-1 mx-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i class="bi bi-list fs-4"></i>
            </button>
        </div>
    </div>

    <slot name="modal"></slot>

    <!-- Offcanvas settings -->
    <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Settings</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="row row-cols-1 g-3">

                <!-- Routes -->
                <div :class="colClass">
                    <div :class="rowClass" class="flex-wrap">
                        <span data-bs-dismiss="offcanvas">
                            <RouterLink class="btn btn-primary m-1" to="/todolist"><i class="bi bi-check2-square me-2"></i>Tasks</RouterLink>
                        </span>
                        <span data-bs-dismiss="offcanvas">
                            <RouterLink class="btn btn-primary m-1" to="/notes"><i class="bi bi-journals me-2"></i>Notes</RouterLink>
                        </span>
                        <span data-bs-dismiss="offcanvas">
                            <RouterLink class="btn btn-primary m-1" to="/rss"><i class="bi bi-activity me-2"></i>Pulse</RouterLink>
                        </span>
                    </div>
                </div>

                <!-- Dark mode -->
                <div class="col-btn btn w-100" :class="colClass" @click="toggleDarkmode">
                    <div :class="rowClass">
                        <label class="me-auto"><i class="bi bi-moon-stars-fill me-2"></i>Dark mode</label>
                        <ToggleSwitch readonly v-model="state.settings.darkmode"></ToggleSwitch>
                    </div>
                </div>

                <!-- Notifications -->
                <div :class="colClass">
                    <div :class="rowClass">
                        <label class="me-auto"><i class="bi bi-bell-fill me-2"></i>Enable notifications</label>
                        <button @click="enableNotifications" class="btn btn-outline-primary" :class="{'disabled btn-outline-secondary':notificationsEnabled}">{{ notificationsEnabled ? 'Enabled' : 'Request' }}</button>
                    </div>
                </div>

                <!-- New list -->
                <div :class="colClass" class="col-btn" v-if="route.path==='/todolist' || route.path==='/'" data-bs-toggle="modal" data-bs-target="#newListModal">
                    <div :class="rowClass">
                        <label class="me-auto"><i class="bi bi-plus-lg me-2"></i>Create new list</label>
                    </div>
                </div>

                <!-- Note preview -->
                <div class="col-btn btn w-100" :class="colClass" v-if="route.path==='/notes'" @click="toggleShowPreview">
                    <div :class="rowClass">
                        <label class="me-auto"><i class="bi bi-binoculars-fill me-2"></i>Show note preview</label>
                        <ToggleSwitch readonly v-model="state.settings.notes.showPreview"></ToggleSwitch>
                    </div>
                </div>

                <!-- Autofocus on edit -->
                <div class="col-btn btn w-100" :class="colClass" v-if="route.path==='/notes'" @click="toggleAutoFocusOnEdit">
                    <div :class="rowClass">
                        <label class="me-auto"><i class="bi bi-keyboard me-2"></i>Autofocus on edit</label>
                        <ToggleSwitch readonly v-model="state.settings.notes.autoFocusOnEdit"></ToggleSwitch>
                    </div>
                </div>

                <!-- Editor mode -->
                <div :class="colClass" v-if="route.path==='/notes'">
                    <div :class="rowClass">
                        <label class="me-auto"><i class="bi bi-card-text me-2"></i>Default editor mode</label>
                        <div class="dropdown">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span v-if="state.settings.notes.defaultEditorMode==='View'"><i class="bi bi-eye-fill me-2"></i>View</span>
                                <span v-if="state.settings.notes.defaultEditorMode==='Edit'"><i class="bi bi-pencil-fill me-2"></i>Edit</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a @click="updateEditorMode('View')" class="dropdown-item"><i class="bi bi-eye-fill me-2"></i>View</a></li>
                                <li><a @click="updateEditorMode('Edit')" class="dropdown-item"><i class="bi bi-pencil-fill me-2"></i>Edit</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
const colClass = "col p-2 rounded";
const rowClass = "d-flex align-items-center fs-6";
</script>

<script setup>
// IMPORTS
// -------
import { defineProps } from 'vue';
import { state } from '@/UserSettings';
import { useRoute } from 'vue-router';
import ToggleSwitch from './ToggleSwitch.vue';

// CONFIGS
// -------
const route = useRoute();
const props = defineProps({
    title:{type:String, required:true},
    iconClass:{type:String, required:true}
})

// METHODS
// -------
const toggleAutoFocusOnEdit = () => {
    state.settings.notes.autoFocusOnEdit = !state.settings.notes.autoFocusOnEdit
}
const toggleShowPreview = () => {
    state.settings.notes.showPreview = !state.settings.notes.showPreview
}
const toggleDarkmode = () => {
    state.settings.darkmode = !state.settings.darkmode
}

const sendNotification = (title, options={}) => {
    navigator.serviceWorker.getRegistration().then(registration => {
        registration.showNotification(title, options);
    })
}

const notificationsEnabled = () => {
    return Notification.permission==="granted";
}

const enableNotifications = () => {
    if (notificationsEnabled) {
        sendNotification("Permission already granted!");
    } else {
        Notification.requestPermission(permission => {
            if (permission==="granted") {
                sendNotification("Permission granted!");
            }
        })
    }
}

const updateEditorMode = (mode) => {
    state.settings.notes.defaultEditorMode = mode;
}

</script>

<style scoped>
.navbar {
    opacity: 95%;
}
.offcanvas {
    max-width: 90%;
}
body[data-bs-theme="dark"] .col {
    background-color: var(--dark-accent);
}
body[data-bs-theme="light"] .col {
    background-color: var(--light-accent);
}
.col-btn {
    border-color: transparent !important;
}
.col-btn, .col-btn * {
    cursor: pointer;
    user-select: none;
}
.col-btn:hover {
    filter: brightness(90%);
}
.col-btn:active {
    filter: brightness(80%);
}
@media (max-width: 600px) {
    .navbar {
        margin: 0.5rem;
        border-radius: 500px;
    }
}
a {
    cursor: pointer;
}
</style>
