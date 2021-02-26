<template>
  <div>
    <create-modal id="createTriviaModal" />
    <delete-modal :question="questionBeRemoved" id="deleteTriviaModal" />
    <edit-modal :question-edited="questionBeEdited" id="editTriviaModal" />
    <div class="d-flex justify-content-between">
      <h3 class="mt-2">Active Trivias</h3>
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createTriviaModal">
          Create New Question
        </button>
      </div>
    </div>
    <div class="table-responsive mt-3">
      <table class="table">
        <tr>
          <th>ID</th>
          <th>Question</th>
          <th>Category</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(question, index) in activeQuestions" :key="question.id">
          <td>#{{ index + 1 }}</td>
          <td>{{ question.question }}</td>
          <td>{{ question.category }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#editTriviaModal"
              @click="() => setQuestionBeEdited(question.id)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#deleteTriviaModal"
              @click="() => setQuestionBeRemoved(question.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CreateModal from "../../components/Admin/Trivias/Create.vue"
import DeleteModal from "../../components/Admin/Trivias/Delete.vue"
import EditModal from "../../components/Admin/Trivias/Edit.vue"
export default {
  components: { CreateModal, DeleteModal, EditModal },
  computed: {
    activeQuestions: function () {
      return this.$store.getters.getActiveQuestions
    },
  },
  data() {
    return {
      questionBeRemoved: {},
      questionBeEdited: {},
    }
  },
  methods: {
    setQuestionBeRemoved(id) {
      this.questionBeRemoved = this.$store.getters.getQuestionById(id)
    },
    setQuestionBeEdited(id) {
      this.questionBeEdited = this.$store.getters.getQuestionById(id)
    },
  },
}
</script>

<style>
</style>