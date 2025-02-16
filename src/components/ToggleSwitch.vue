<template>
    <!-- Rounded switch -->
    <label class="switch">
        <input type="checkbox" :checked="model" v-model="model" :disabled="props.readonly">
        <span class="slider round"></span>
    </label>
</template>

<script setup>
import { defineModel, defineProps } from 'vue'
const model = defineModel();
const props = defineProps({
  readonly:{type:Boolean}
})
</script>

<style scoped>
 /* The switch - the box around the slider */
 .switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
}

body[data-bs-theme="light"] .slider {
  background-color: var(--bs-gray-400);
}

body[data-bs-theme="dark"] .slider {
  background-color: var(--dark);
}

.slider:hover {
    filter: brightness(80%);
}

/* The slider dot */
.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 5px;
  bottom: 3px;
  -webkit-transition: .4s;
  transition: .4s;
}

body[data-bs-theme="light"] .slider::before {
  background-color: white !important;
}

body[data-bs-theme="dark"] .slider::before {
  background-color: var(--dark-accent) !important;
}

input:checked + .slider {
  background-color: var(--bs-primary) !important;
}

input:focus + .slider {
  box-shadow: 0 0 1px rgba(0,0,0,0.3) !important;
}

input:checked + .slider:before {
  -webkit-transform: translateX(22px);
  -ms-transform: translateX(22px);
  transform: translateX(22px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} 

</style>