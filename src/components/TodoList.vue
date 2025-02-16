<template>
    <TopNav title="Todo List" iconClass="bi bi-check2-square">
        <template #modal>
            <BaseModal id="newListModal" title="Create a new list">
                <template #body>
                    <input type="text" placeholder="New list name..." class="form-control"/>
                </template>
                <template #footer>
                    <button data-bs-dismiss="modal" class="btn btn-danger"><i class="bi bi-x-lg me-1"></i>Cancel</button>
                    <button data-bs-dismiss="modal" class="btn btn-primary"><i class="bi bi-check-lg me-1"></i>Submit</button>
                </template>
            </BaseModal>
        </template>
    </TopNav>
    <div class="container">
        <Transition name="input">
            <div class="mb-3 mt-0 d-flex align-items-center input-container" v-if="showInput">
                <input v-focus
                    id="newTodoInput"
                    style="height: 3rem;"
                    type="text"
                    class="form-control me-auto"
                    placeholder="Add a new item..."
                    v-model.trim="newTodo"
                    @keyup.enter="addTodo"
                    @focusout="showInput=false"
                />
                <button class="btn text-danger"><i class="bi bi-x-lg"></i></button>
            </div>
        </Transition>
        <Transition>
            <TodoItem
                :todos="incompleteTodos"
                :visible="true"
                @change="saveTodos"
                @click="setCurrentTodo"
            />
        </Transition>
        <button id="showIncompleteButton" ref="showIncompleteButton" 
            class="btn w-100 text-start text-muted"
            :class="{'mt-2':incompleteTodos.length>0}"
            @click="toggleShowCompleted">
            <i :class="chevronClass"></i>
            Completed {{ completedCount }}
        </button>
        <hr v-if="showCompleted" class="m-0 mb-2 p-0 text-black">
        <Transition>
            <TodoItem
                v-show="showCompleted"
                :visible="showCompleted"
                :todos="completedTodos"
                @change="saveTodos"
                @click="setCurrentTodo"
            />
        </Transition>
    </div>
    <TodoModal
        v-if="currentTodo !== null"
        modal-id="editTodoModal"
        :is-new="false"
        v-model="currentTodo"
        @change="saveTodos"
        @delete="deleteTodo"
    />
    <FixedBottom>
        <Transition>
            <button v-show="!showInput" @click="showInput = !showInput" style="height: 50px;width: 50px;" class="btn btn-primary rounded-circle fs-5 shadow">
                <i class="bi bi-plus-lg"></i>
            </button>
        </Transition>
    </FixedBottom>
</template>

<script setup>
// IMPORTS
// -------
import { ref, computed, onMounted, useTemplateRef } from 'vue';
import TodoItem from './TodoItem.vue';
import TodoModal from './TodoModal.vue';
import FixedBottom from './FixedBottom.vue';
import TopNav from './TopNav.vue';
import BaseModal from './BaseModal.vue';
import { capitalizeString, Calendar } from '@/Tools';

// REACTIVE PROPERTIES
// -------------------
const todos = ref([]);
const showCompleted = ref(false);
const showInput = ref(false);
const currentTodo = ref({});
const newTodo = ref("");
const showIncompleteButton = useTemplateRef("showIncompleteButton");

// COMPUTED PROPERTIES
// -------------------
const sortedTodos = computed(()=>{
    return [...todos.value].sort((a,b)=>b.id - a.id);
})

const completedTodos = computed(()=>{
    return sortedTodos.value.filter(todo => todo.done);
})

const incompleteTodos = computed(()=>{
    return sortedTodos.value.filter(todo => !todo.done);
})

const completedCount = computed(()=>{
    return completedTodos.value.length;
})

const chevronClass = computed(()=>{
    return showCompleted.value ? "bi bi-chevron-down" : "bi bi-chevron-right";
})

// METHODS
// -------
const loadTodos = () => {
    todos.value = JSON.parse(localStorage.getItem('todoItems')) || [];
};

const removeFocus = (event) => {
    setTimeout(()=>{
        event.target.style.outline = 'none';
        event.target.style.boxShadow = 'none';
        showIncompleteButton.value.blur();
    },250)
}

const toggleShowCompleted = (event) => {
    showCompleted.value = !showCompleted.value;
    removeFocus(event);
}

const addTodo = () => {
    if (newTodo.value) {
        todos.value.push({ id: Date.now(), name: capitalizeString(newTodo.value), done: false });
        newTodo.value = '';
        saveTodos();
    }
}

const setCurrentTodo = (todo) => {
    currentTodo.value = todo;
}

const deleteTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id );
    saveTodos();
}

const saveTodos = () => {
    localStorage.setItem('todoItems', JSON.stringify(todos.value));
}

const updateRepeatedItems = () => {
    todos.value = todos.value.map(todo => {
        const modifiedBeforeToday = Calendar.new(todo.modifiedOn) < Calendar.today()
        if (todo.done && todo.repeat && modifiedBeforeToday) {
            return {...todo, done:false, modifiedOn:Date.now()}
        } else {
            return todo;
        }
    })
}

// CUSTOM DIRECTIVES
// -----------------
const vFocus = {
  mounted: (el) => el.focus()
}

// LIFECYCLE HOOKS
// ---------------
onMounted(loadTodos);
onMounted(updateRepeatedItems);

</script>

<style scoped>
.btn {
  z-index: 1;
}
.v-enter-active,.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.input-enter-active,
.input-leave-active {
    transition: all 250ms ease;
}
.input-enter-from,
.input-leave-to {
    height: 0rem;
    opacity: 0;
    margin-bottom: 0rem !important;
}
.input-enter-to,
.input-leave-from {
    height: 3rem;
    opacity: 1;
    margin-bottom: .75rem !important;
}
.container {
    overflow-x: hidden;
}
#showIncompleteButton {
    height: 3.5em;
    border-color: none !important;
    border-style: none !important;
}
#showIncompleteButton:hover {
    filter: brightness(70%);
}
#showIncompleteButton:active{
    background-color: var(--bs-dark-bg-subtle) !important;
    -webkit-transition: background-color 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
    -ms-transition: background-color 500ms  cubic-bezier(0.25, 0.1, 0.25, 1);
    transition: background-color 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
}
#newTodoInput {
    border: 0;
    border-radius: 0;
    background-color: transparent !important;
}
#newTodoInput:focus {
    outline: none;
    box-shadow: none;
}
.input-container {
    border-bottom: 1px solid var(--dark-accent);
}
</style>
