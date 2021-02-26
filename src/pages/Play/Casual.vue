<template>
  <div style="min-height: 100vh" class="landing p-5">
    <div
      class="p-4 border border-secondary rounded d-flex flex-column justify-content-center align-items-center"
      v-if="!isGameStarted && !isGameOver"
    >
      <h2 class="text-center m-3">Are You Ready?</h2>
      <button
        class="btn btn-primary m-3"
        @click="
          () => {
            isGameStarted = true
            toggleCountdownTimer()
          }
        "
      >
        Start The Game!
      </button>
    </div>
    <div
      v-else-if="countdown"
      class="p-4 border border-secondary rounded d-flex flex-column justify-content-center align-items-center"
    >
      Game Starts in {{ countdown }} seconds.
    </div>
    <div
      v-else-if="isGameOver"
      class="p-4 border border-secondary rounded d-flex flex-column justify-content-center align-items-center"
    >
      <h3>Game Over!</h3>
      <button
        class="btn btn-primary"
        @click="
          () => {
            isGameOver = false
            toggleCountdownTimer()
          }
        "
      >
        Play Again!
      </button>
    </div>
    <div v-else class="p-4 border border-secondary rounded d-flex justify-content-center align-items-center">
      <div>
        <div>
          <h3>{{ question.question }}</h3>
        </div>
        <button
          v-for="(answer, index) in question.answers"
          :key="index"
          class="btn btn-secondary d-block w-100 my-3"
          :disabled="isClicked"
          @click="checkIfTrueAnswer($event, answer)"
        >
          {{ answer }}
        </button>
      </div>
    </div>
    <div v-if="successfulAnswers !== null">Level: {{ successfulAnswers }}</div>
    <div v-if="questionCountdown !== null">Time: {{ questionCountdown }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isGameStarted: false,
      countdownTimer: null,
      countdown: 0,
      question: null,
      questionCountdown: null,
      questionCountdownInterval: null,
      isGameOver: false,
      successfulAnswers: null,
      isClicked: false,
    }
  },
  methods: {
    toggleCountdownTimer() {
      this.countdown = 3
      this.countdownTimer = setInterval(() => {
        this.countdown -= 1
        if (this.countdown === 0) {
          clearInterval(this.countdownTimer)
          this.getRandomQuestion()
          this.successfulAnswers = 0
        }
      }, 1000)
    },
    toggleQuestionCountdown() {
      this.questionCountdown = this.question.time
      this.questionCountdownInterval = setInterval(() => {
        if (!this.isClicked) {
          this.questionCountdown -= 1
        }

        if (this.questionCountdown === 0) {
          this.isGameOver = true
          this.clearQuestionInterval()
        }
      }, 1000)
    },
    getRandomQuestion() {
      if (this.question) {
        let newQuestion
        do {
          newQuestion = this.$store.getters.getRandomQuestion
        } while (newQuestion.id === this.question.id)
        this.question = newQuestion
      } else this.question = this.$store.getters.getRandomQuestion
      this.toggleQuestionCountdown()
    },
    checkIfTrueAnswer(event, answer) {
      const question = this.$store.getters.getQuestionById(this.question.id)
      if (answer === question.trueAnswer) {
        if (!this.isClicked) {
          this.isClicked = true
          this.successfulAnswers += 1
          event.target.classList.add("btn-success")
          setTimeout(() => {
            event.target.classList.remove("btn-success")
            this.isClicked = false
            this.getRandomQuestion()
          }, 1000)
        }
      } else {
        if (!this.isClicked) {
          this.isClicked = true
          event.target.classList.add("btn-danger")
          setTimeout(() => {
            this.isGameOver = true
            this.isClicked = false
          }, 1000)
        }
      }
      this.clearQuestionInterval()
    },
    clearQuestionInterval() {
      clearInterval(this.questionCountdownInterval)
    },
  },
}
</script>

<style>
</style>