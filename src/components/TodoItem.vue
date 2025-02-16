<template>
    <TransitionGroup name="list" tag="ul" class="list-group list-group-hover">
    <li v-for="(todo) in props.todos" :key="todo.id" :class="{disabled: !props.visible}" class="list-group-item d-flex align-items-center p-0 m-0">
        <div class="ms-3 flex-fill d-flex align-items-center">
            <input :id="'todo-' + todo.id" type="checkbox" class="form-check-input my-0 me-3 fs-4"
                v-model="todo.done" @change="onChangeTodo(todo)"/>
            <label :for="'todo-' + todo.id" :class="['form-check-label stretched-link', { completed: todo.done }]">
                <span class="fs-6">{{ todo.name }}</span>
                <span v-if="todo.repeat" class="text-info" style="font-size: .75rem;"><br><i class="bi bi-repeat me-2"></i>Auto Repeat</span>
            </label>
        </div>
        <div class="btn-div align-items-center pe-1">
            <button data-bs-toggle="modal" data-bs-target="#editTodoModal" class="btn" @click="onClickTodo(todo)"><i class="bi bi-pencil"></i></button>
        </div>
    </li>
    </TransitionGroup>
</template>

<script setup>
// IMPORTS
// -------
import { defineProps, defineEmits } from 'vue';

// CONFIGS
// -------
const emit = defineEmits(['change', 'click']);
const props = defineProps({
    todos: {
        type: Array,
        required: true
    },
    visible: {
        type:Boolean,
        default: true
    }
})

// REGULAR METHODS
// ---------------
const onChangeTodo = (todo) => {
    todo.modifiedOn = Date.now();
    setTimeout(() => {
        emit("change");
    }, 500);
}

const onClickTodo = (todo) => {
    emit("click", todo);
}

</script>

<style scoped>
.disabled {
    user-select: none;
}
.btn-div {
    z-index: 1;
}
.completed {
    text-decoration: line-through;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.list-enter-to,
.list-leave-from {
    opacity: 1;
    transform: translateX(0px);
}
li {
    height: 3.7rem;
    margin-bottom: 1px !important;
}
li, li * {
    cursor: pointer;
}
</style>
