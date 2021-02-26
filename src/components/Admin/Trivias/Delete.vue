<template>
  <base-modal>
    <div class="modal-header">
      <h5 class="modal-title">Delete Question</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure that you want to delete this question?</p>
      <pre>{{ question.question }}</pre>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-danger"
        data-dismiss="modal"
        @click="$store.commit('removeQuestion', question.id)"
      >
        Delete
      </button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
    </div>
  </base-modal>
</template>

<script>
import BaseModal from "../../BaseModal"
export default {
  components: { BaseModal },
  props: ["question"],
}
</script>

<style>
</style>