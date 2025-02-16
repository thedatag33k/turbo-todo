<template>
    <TopNav title="Notes" iconClass="bi bi-journals">
        <template #nav-buttons>
            <button v-if="state.settings.notes.showEditor" @click="togglePinNote" class="btn py-0 my-0 px-1 mx-1" type="button">
                <i v-if="state.settings.notes.currentNote.pinned" class="bi bi-pin-fill fs-4 text-warning"></i>
                <i v-else class="bi bi-pin fs-4"></i>
            </button>
            <button v-if="state.settings.notes.showEditor" data-bs-toggle="modal" data-bs-target="#selectColorModal" class="btn py-0 my-0 px-1 mx-1" type="button">
                <i class="bi bi-palette-fill fs-4 text-primary"></i>
            </button>
            <button v-if="state.settings.notes.showEditor" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" class="btn py-0 my-0 px-1 mx-1" type="button">
                <i class="bi bi-trash3 fs-4 text-danger"></i>
            </button>
        </template>
    </TopNav>
    <NoteEditor v-if="state.settings.notes.showEditor"
        v-model="state.settings.notes.currentNote"
        :is-new="newNote"
        @hide-editor="hideEditor"
        @update="createOrUpdateNote"
        @delete="deleteNote" />
    <div v-if="!state.settings.notes.showEditor" class="container note-list">
        <p v-if="notes.length===0" class="fs-5 text-muted">I know I'm empty right now but I'm full of potential...</p>
        <div class="row g-2">
            <div v-for="(note) in sortedNotes" :key="note.id" class="col-6 list-group-hover no-select d-flex" @click="selectNote(note)" >
                <div class="item list-group-item flex-fill" :class="{'li-active' : state.settings.notes.currentNote.id===note.id}" :style="{backgroundColor:note.color, color: noteColor(note).txt}">

                    <div class="d-flex align-items-center flex-wrap mb-1">
                        <div class="fs-6 fw-medium flex-fill">{{ note.title }}</div>
                        <div>
                            <i v-if="note.pinned" class="me-2 bi bi-pin-fill" :style="{color:noteColor(note).badge}"></i>
                            <div class="badge"
                                :style="{backgroundColor:noteColor(note).badge, color:noteColor(note).badgeTxt}">
                                {{ new Date(note.id).toLocaleDateString(getUserLocale()) }}
                            </div>
                        </div>
                    </div>
                    <div v-if="state.settings.notes.showPreview" class="note-preview" :style="{color: noteColor(note).txt}">{{ notePreview(note) }}</div>
                </div>
            </div>
        </div>
    </div>
    <FixedBottom v-if="!state.settings.notes.showEditor">
        <button @click="startNewNote" style="height: 50px;width: 50px;" class="btn btn-primary rounded-circle fs-5 shadow" type="button">
            <i class="bi bi-plus-lg"></i>
        </button>
    </FixedBottom>
</template>

<script setup>
// IMPORTS
// -------
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import NoteEditor from './NoteEditor.vue';
import FixedBottom from './FixedBottom.vue';
import TopNav from './TopNav.vue';
import { Color, getUserLocale } from '@/Tools.js'
import { state } from '@/UserSettings';

// REACTIVE PROPERTIES
// -------------------
const notes = ref([]);
const newNote = ref(false);

// COMPUTED PROPERTIES
// -------------------
const sortedNotes = computed(() => {
    return [...notes.value].sort((a,b) => {
        if (a.pinned === b.pinned) {
            return b.id - a.id; // if not pinned, sort by date descending
        }
        return (a.pinned === true) ? -1 : 1; // else sort by pinned first
    })
});

// METHODS
// -------
function hideEditor(){
    state.settings.notes.showEditor = false;
    state.settings.notes.currentNote = {};
}

const loadNotes = () => {
    notes.value = JSON.parse(localStorage.getItem('notes')) || [];
};

const getPlainerText = (note) => {
    // Remove Markdown headers
    let plainText = note.text.replace(/#{1,6}\s+/g, '');
    // Remove bold and italic syntax
    plainText = plainText.replace(/(\*\*|__)(.*?)\1/g, '$2');
    plainText = plainText.replace(/(\*|_)(.*?)\1/g, '$2');
    // Remove horizontal rules
    plainText = plainText.replace(/-{3,}/g, '');
    return plainText;
}

const notePreview = (note) => {
    const text = getPlainerText(note);
    let p = text.slice(0,100);
    p += p.length < text.length ? "..." : "";
    return p;
}

const noteColor = (note)=>{
    let hasColor = (note.color!==undefined) && note.color;
    let base = note.color || Color.colorOptions.cyan;
    let baseInfo = Color.hexToRgb(base);
    let mix = baseInfo.isLight ? "#000000" : "#FFFFFF";

    return {
        bg: hasColor ? base : "inherit",
        txt: hasColor ? Color.blendColors(base,mix,0.7) : "inherit",
        badge: hasColor ? Color.blendColors(base,mix,0.7) : base,
        badgeTxt: hasColor ? base : Color.blendColors(base,mix,0.9)
    }
}

const selectNote = (note) => {
    state.settings.notes.currentNote = note;
    newNote.value = false;
    setTimeout(() => {
        state.settings.notes.showEditor = true;
    }, 100);
}

const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes.value));
}

const createOrUpdateNote = (updatedNote) => {
    const index = notes.value.findIndex(note => note.id === updatedNote.id);
    updatedNote.modifiedOn = Date.now();
    if (index !== -1) {    
        notes.value[index] = updatedNote;
    } else if (newNote.value) {
        notes.value.push(updatedNote);
    }
    state.settings.notes.currentNote = updatedNote;
};

const deleteNote = (id) => {
    notes.value = notes.value.filter(note => note.id !== id);
};

const startNewNote = () => {
    state.settings.notes.currentNote = {id:Date.now(), title:"",text:""};
    newNote.value = true;
    state.settings.notes.showEditor = true;
}

const togglePinNote = () => {
    if (state.settings.notes.currentNote.pinned === undefined) {
        state.settings.notes.currentNote.pinned = true;
    } else {
        state.settings.notes.currentNote.pinned = !state.settings.notes.currentNote.pinned;
    }
}

// 🕵️ WATCHERS
// -----------
watch(() => notes.value, () => {
        saveNotes();
    }, {deep: true}
)

// 🪝 LIFECYCLE HOOKS
// ------------------
onMounted(loadNotes);
onUnmounted(hideEditor);
</script>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes slideIn {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}
.note-viewer {
    animation: fadeIn 500ms ease forwards;
}
.note-editor {
    animation: fadeIn 500ms ease forwards;
}
.note-list {
    overflow-x: hidden;
    animation: fadeIn 500ms ease forwards;
    animation: slideIn 500ms ease forwards;
}
.note-preview {
  font-family: "Fira Code", serif;
  font-size: 0.9em !important;
}
.bi {
    animation: fadeIn 1000ms ease;
}
.btn {
    overflow-y: hidden;
}
</style>
<style scoped>
.list-group-item,
.list-group-item * {
    cursor: pointer;
}
.list-group-item {
    padding: 0.5rem;
    border-radius: 5px !important;
    border-width: 0px;
}
</style>