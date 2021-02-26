<template>
  <base-modal>
    <div class="modal-header">
      <h5 class="modal-title" id="triviaModalLongTitle">Edit Trivia</h5>
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
            :value="questionEdited.question"
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
                :value="questionEdited.category"
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
                :value="questionEdited.lang"
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
                :value="questionEdited.time"
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
            :value="questionEdited.trueAnswer"
            @input="(e) => (trueAnswer = e.target.value)"
            required
          />
        </div>
        <label>Wrong Answers:</label>
        <div class="form-group" v-for="(wrong, index) in wrongAnswers" :key="index">
          <input
            type="text"
            class="form-control"
            placeholder="Wrong Answer"
            name="wrongAnswer"
            :value="wrong"
            @input="(e) => (wrongAnswers[index] = e.target.value)"
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
import BaseModal from "../../BaseModal"
export default {
  components: { BaseModal },
  data() {
    return {
      id: null,
      question: null,
      category: null,
      time: null,
      lang: null,
      trueAnswer: null,
      wrongAnswers: null,
      wrongAnswerCount: 0,
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
        id: this.id,
        question: this.question,
        category: this.category,
        time: this.time,
        lang: this.lang,
        trueAnswer: this.trueAnswer,
        wrongAnswers: this.wrongAnswers,
      }
      this.$store.commit("editQuestion", data)
    },
  },
  props: ["questionEdited"],
  watch: {
    questionEdited(val) {
      this.id = val.id
      this.question = val.question
      this.category = val.category
      this.time = val.time
      this.lang = val.lang
      this.trueAnswer = val.trueAnswer
      this.wrongAnswers = [...val.wrongAnswers]
      this.wrongAnswerCount = val.wrongAnswers.length
    },
  },
}
</script>

<style>
</style>