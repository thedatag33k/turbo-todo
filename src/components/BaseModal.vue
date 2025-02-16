<template>
    <div :id="props.modalId" class="modal fade" tabIndex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                
                <div v-if="$slots.header" class="modal-header">
                    <slot name="header"></slot>
                </div>
                <div v-else class="modal-header">
                    <h5 class="modal-title">{{ props.title || "" }}</h5>
                </div>

                <div v-if="$slots.body" class="modal-body">
                    <slot name="body"></slot>
                </div>

                <div v-if="$slots.footer" class="modal-footer">
                    <slot name="footer"></slot>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    modalId:{type:String, required:true},
    title:{type:String}
})
</script>