<template>
  <vue-modal
    v-slot="{ params }"
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal-content">
    <slot :params="params"></slot>
  </vue-modal>
</template>
<script>
export default {
  inheritAttrs: false,
};
</script>
<script setup></script>

<style lang="scss" scoped></style>
