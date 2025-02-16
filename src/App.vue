<template>
    <router-view/>
</template>

<script setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { state, saveSettings } from '@/UserSettings'
import router from '@/router'

const route = useRoute();

// Monitor and save global state changes.
watch(() => state, () => {
    saveSettings();
    document.querySelector("body").setAttribute("data-bs-theme", state.settings.darkmode ? "dark" : "light");
    },
    {immediate:true, deep:true}
)

// Update the user's default start screen
// when then the route changes.
watch(() => route.path,
    (newPath) => {
        state.settings.startScreen = newPath;
    }
)

// Select start screen on mount.
onMounted(()=>{
    if (state.settings.startScreen) {
        router.push(state.settings.startScreen);
    }
})

</script>

<style>
:root {
    --primary: var(--bs-primary);
    --dark : var(--bs-dark);
    --dark-secondary: #171917;
    --dark-accent: var(--bs-gray-800);
    --light: var(--bs-gray-100);
    --light-secondary: var(--bs-gray-700);
    --light-accent: var(--bs-gray-200);
}

#app {
    padding-top: 80px;
    padding-bottom: 90px;
}
.list-group-item:hover {
    filter: brightness(80%) !important;
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
}
.li-active, li:active {
    filter: brightness(50%) !important;
    -webkit-transition: all 500ms linear;
    -ms-transition: all 500ms linear;
    transition: all 500ms linear;
}
.badge {
    font-family: "Fira Code", monospace;
}
.no-select {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    pointer-events: auto;
}
.bi:hover, .bi:active {
    filter: brightness(70%);
}
.form-check, .form-check * {
    cursor: pointer;
}
.navbar * {
    color: white;
}
body[data-bs-theme="dark"] {
    background-color: var(--dark);
}
body[data-bs-theme="light"] {
    background-color: var(--light);
}
body[data-bs-theme="dark"] .navbar {
    background-color: var(--dark-secondary);
}
body[data-bs-theme="light"] .navbar {
    background-color: var(--light-secondary);
}
body[data-bs-theme="dark"] .list-group-item,
body[data-bs-theme="dark"] .card {
    background-color: var(--dark-accent);
    border-color: var(--dark-accent);
}
body[data-bs-theme="light"] .list-group-item, 
body[data-bs-theme="light"] .card {
    background-color: var(--light-accent);
    border-color: var(--light-accent);
}
</style>