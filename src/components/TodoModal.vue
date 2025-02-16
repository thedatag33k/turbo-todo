<template>
    <BaseModal :modal-id="modalId">
        <template #header>
            <h5 v-if="isNew" class="modal-title">Add a new item...</h5>
            <h5 v-else class="modal-title">Edit item</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"/>
        </template>
        <template #body>
            <div class="row row-cols-1 g-3">
                <div class="d-flex align-items-center">
                    <input v-show="!isNew" type="checkbox"
                            class="form-check-input my-0 me-2 fs-5"
                            v-model="model.done"
                            @change="onChangeTodo"
                    />
                    <input v-if="!isNew" type="text"
                        class="form-control"
                        v-model.trim="model.name"
                        @change="onChangeTodo"
                    />
                    <input v-else type="text"
                        class="form-control"
                        v-model.trim="model.name"
                        @keyup.enter="props.addNewTodo(model)"
                    />
                </div>
                <div class="d-flex align-items-center">
                    <label class="me-auto"><i class="bi bi-repeat me-2"></i>Auto Repeat</label>
                    <ToggleSwitch @change="onChangeTodo" v-model="model.repeat"></ToggleSwitch>
                </div>
            </div>
        </template>
        <template #footer>
            <button v-if="isNew" @click="props.addNewTodo(model)" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                <i class="bi bi-file-arrow-up-fill"></i>
                Save
            </button>
            <button v-else @click="onDeleteTodo" type="button" class="btn btn-danger" data-bs-dismiss="modal">
                <i class="bi bi-trash3"></i>
                Delete
            </button>
        </template>
    </BaseModal>
</template>

<script setup>
// IMPORTS
// -------
import { defineProps, defineModel, defineEmits } from 'vue'; 
import ToggleSwitch from './ToggleSwitch.vue';
import BaseModal from './BaseModal.vue';

// CONFIGS
// -------
const emit = defineEmits(['add','delete', 'change']);
const model = defineModel();
const props = defineProps({
    modalId: {
        type: String,
        required: true
    },
    isNew: {
        type: Boolean,
        required: true
    },
    addNewTodo: {
        type: Function,
        required: false
    }
})

// METHODS
// -------
const onChangeTodo = () => {
    model.value.modifiedOn = Date.now();
    emit("change");
}

const onDeleteTodo = () => {
    emit("delete", model.value.id);
}

</script>