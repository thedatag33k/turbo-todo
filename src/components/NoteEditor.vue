<template>
    <div v-show="editMode" class="container note-editor">
        <input
            v-model="localNote.title"
            ref="titleInput"
            class="fs-3 form-control mb-2"
            placeholder="Title"
            type="text"
            @input="saveItem"
            @focusout="validateTitle"
        />
        <MarkdownEditor
            v-model="localNote.text"
            @input="saveItem"
            :disabled="!titleIsValid"
            :editor-visible="editMode">
        </MarkdownEditor>
    </div>
    <div v-show="!editMode" class="container note-viewer">
        <div class="d-flex align-items-center p-0 m-0 mb-2 flex-wrap">
            <div class="fs-3 text-muted m-0 p-0 flex-fill"
                v-text="localNote.title"
            />
            <div class="badge my-1" :style="{backgroundColor:noteColor.bg, color:noteColor.txt}"><i class="bi bi-calendar"></i> {{ dateCreated }}</div>
        </div>
        <hr class="p-0 m-0 mb-2">
        <div v-html="parsedText"></div>
    </div>
    <BaseModal modalId="confirmDeleteModal" title="Are you sure you want to delete this note?">
        <template #footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                <i class="bi bi-x-lg"></i> Cancel
            </button>
            <button @click="deleteItem" type="button" class="btn btn-danger" data-bs-dismiss="modal">
                <i class="bi bi-trash3"></i> Delete
            </button>
        </template>
    </BaseModal>
    <BaseModal modalId="selectColorModal" title="Select a color...">
        <template #body>
            <div class="d-flex flex-wrap">
                <button v-for="(key,val) of Color.colorOptions" :key="key" @click="setColor(key)" data-bs-dismiss="modal" class="btn rounded-pill m-1 color-option" :style="{backgroundColor:key, color:getColor(key).txt}">
                    {{val}}
                </button>
            </div>
        </template>
        <template #footer>
            <button type="button" @click="setColor(null)" class="btn btn-secondary btn-warning" data-bs-dismiss="modal">
                <i class="bi bi-eraser-fill"></i> Clear
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                <i class="bi bi-x-lg"></i> Cancel
            </button>
        </template>
    </BaseModal>
    <FixedBottom>
        <button :disabled="!noteExists" @click="toggleEditMode" :style="buttonStyle" :class="buttonClass" class="btn-primary" type="button">
            <i v-if="editMode" class="bi bi-eye-fill"></i>
            <i v-else class="bi bi-pencil-fill  "></i>
        </button>
        <button @click="hideEditor" :style="buttonStyle" :class="buttonClass" class="ms-2 btn-secondary" type="button">
                <i class="bi bi-x-lg"></i>
        </button>
    </FixedBottom>
</template>
<script>
let marked = require('marked')
marked.use({
    "breaks":true,"silent":true
})
const buttonClass = "btn rounded-circle fs-5 shadow"
const buttonStyle = {
    height:"50px",
    width:"50px"
}
</script>
<script setup>
// 📁 IMPORTS
// ----------
import { ref, watch, useTemplateRef, nextTick, defineModel, computed, defineProps, defineEmits, onMounted } from 'vue'
import FixedBottom from './FixedBottom.vue'
import BaseModal from './BaseModal.vue';
import MarkdownEditor from './MarkdownEditor.vue';
import { Color, getUserLocale } from '@/Tools.js'
import { state } from '@/UserSettings';

// ⚙️ CONFIGS
// ----------
const model = defineModel()
const props = defineProps({
    isNew:{type:Boolean,required:true}
})
const emit = defineEmits(['hide-editor','update','delete']);

// REACTIVE PROPERTIES
// -------------------
const editMode = ref(props.isNew);
const localNote = ref({...model.value});
const lastValidTitle = ref(null);
const titleInput = useTemplateRef("titleInput");


// 🟰 COMPUTED PROPERTIES
// ----------------------
const dateCreated = computed(()=>{
    return new Date(localNote.value.id).toLocaleString(getUserLocale(),{dateStyle:"medium",timeStyle:"short"});
})

const noteColor = computed(()=>{
    let base = localNote.value.color || Color.colorOptions.cyan;
    return getColor(base);
})

const parsedText = computed(()=>{
    return marked.parse(localNote.value.text);
})

const noteExists = computed(()=>{
    return titleIsValid.value || (!props.isNew);
})

const titleIsValid = computed(()=>{
    return localNote.value.title.trim().length >= 3;
})

// METHODS
// -------
const setColor = (color) => {
    localNote.value.color = color;
    saveItem();
}

const getColor = (base) => {
    let baseInfo = Color.hexToRgb(base);
    let mix = baseInfo.isLight ? "#000000" : "#FFFFFF";
    return {
        bg:base,
        txt:Color.blendColors(base,mix,0.7)
    }
}

const validateTitle = () => {
    if (!titleIsValid.value) {
        localNote.value.title = lastValidTitle.value || "";
    }
}

const toggleEditMode = () => {
    editMode.value = !editMode.value;
    if (editMode.value){
        setFocus();
    } else {
        addClasses();
    }
}

const hideEditor = () => {
    emit("hide-editor");
}

const saveItem = () => {
    if(titleIsValid.value){
        emit('update', localNote.value);
    }
};

const deleteItem = () => {
    emit('delete', localNote.value.id);
    emit('hide-editor');
};

const addClasses = () => {
    const quotes = document.getElementsByTagName("blockquote");
    for (const q of quotes) {
        q.classList.add("blockquote", "border-start","border-dark-subtle", "border-3","ps-2","py-1","fs-6");
    }
}

async function setFocus() {
    await nextTick()
    if (localNote.value.title === ""){
        titleInput.value.focus();
    }
}

// 🕵️ WATCHERS
// -----------
watch(
    () => localNote.value.title,
    (newValue) => {
        if(titleIsValid.value){
            lastValidTitle.value = newValue;
        }
        setFocus();
    },{immediate:true}
)

// 🪝 LIFECYCLE HOOKS
// ------------------
onMounted(()=>{
    if (state.settings.notes.defaultEditorMode==="Edit") {
        editMode.value = true;
    }
    addClasses();
})
</script>

<style scoped>
.btn.color-option:hover {
    filter: brightness(0.8);
    -webkit-transition: filter 100ms linear;
    -ms-transition: filter 100ms linear;
    transition: filter 100ms linear;
}
input {
    border-width: 0;
    background-color: transparent;
}
input:active, input:focus {
    border-width: 1px;
}
</style>