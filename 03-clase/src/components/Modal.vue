<template>
  <div class="modal" tabindex="-1" style="display: none">
  <!-- <div class="modal" tabindex="-1" style="display: block"> -->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
            <slot></slot>
        </div>
        <div class="modal-footer">
            <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style></style>
