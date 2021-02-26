<template>
  <base-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="triviaModalLongTitle">Create Trivia</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form @submit.prevent="formSubmit">
        <div class="form-group">
          <label>Question:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Question"
            :value="question"
            @input="(e) => (question = e.target.value)"
            required
          />
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col-6">
              <label>Category:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Category"
                :value="category"
                @input="(e) => (category = e.target.value)"
                required
              />
            </div>
            <div class="col-3">
              <label>Language:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Language"
                :value="lang"
                @input="(e) => (lang = e.target.value)"
                required
              />
            </div>
            <div class="col-3">
              <label>Time:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Time"
                :value="time"
                @input="(e) => (time = e.target.value)"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>True Answer:</label>
          <input
            type="text"
            class="form-control"
            placeholder="True Answer"
            :value="trueAnswer"
            @input="(e) => (trueAnswer = e.target.value)"
            required
          />
        </div>
        <label>Wrong Answers:</label>
        <div class="form-group" v-for="num in wrongAnswerCount" :key="num">
          <input
            type="text"
            class="form-control"
            placeholder="Wrong Answer"
            name="wrongAnswer"
            :value="wrongAnswers[num - 1]"
            @input="(e) => (wrongAnswers[num - 1] = e.target.value)"
            required
          />
        </div>
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <button type="button" v-if="wrongAnswerCount < 7" @click="addWrongAnswer">[+] Add Wrong Answer</button>
            </div>
            <div class="col d-flex justify-content-end">
              <button type="button" v-if="wrongAnswerCount > 3" @click="removeWrongAnswer">
                [-] Remove Wrong Answer
              </button>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </base-modal>
</template>

<script>
import BaseModal from "../../BaseModal.vue"
export default {
  components: { BaseModal },
  data() {
    return {
      wrongAnswerCount: 3,
      question: "",
      category: "",
      lang: "",
      time: "10",
      trueAnswer: "",
      wrongAnswers: ["", "", ""],
    }
  },
  methods: {
    addWrongAnswer() {
      this.wrongAnswerCount++
      this.wrongAnswers.push("")
    },
    removeWrongAnswer() {
      this.wrongAnswerCount--
      this.wrongAnswers.pop()
    },
    formSubmit() {
      const data = {
        question: this.question,
        category: this.category,
        lang: this.lang,
        time: this.time,
        trueAnswer: this.trueAnswer,
        wrongAnswers: this.wrongAnswers,
      }
      this.$store.commit("addQuestion", data)
    },
  },
}
</script>

<style>
</style>