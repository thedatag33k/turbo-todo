<template>
    <div class="fixed-bottom" style="height: 70px;">
        <div class="container" style="height: 50px;">
            <div :class="attrs.class || 'd-flex justify-content-end'">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
// IMPORTS
import { useAttrs } from 'vue';

// CONFIGS
const attrs = useAttrs();

</script>
<style scoped>
.fixed-bottom {
  opacity: .95;
}
</style>