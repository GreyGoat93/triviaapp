import triviasStore from "../../common/triviasStore"

const mixArray = (arr) => {
    const newArray = [];
    const length = arr.length   
    for(let i = 0; i < length; i++){
        const rndIndex = Math.floor(Math.random() * arr.length);
        const removed = arr.splice(rndIndex, 1);
        newArray.push(...removed); 
    }
    return newArray;
}

const state = {
    trivias: triviasStore.getTriviasFromSession(),
}

const getters = {
    getRandomQuestion: (state) => {
        const rnd = Math.floor(Math.random() * state.trivias.length);
        const rndQuestion = state.trivias[rnd];
        const answers = [];
        answers.push(rndQuestion.trueAnswer);
        const selectedWrongAnswers = [];
        for(let i = 0; i < 3; i++){
            let rndIndex;
            do {
                rndIndex = Math.floor(Math.random() * rndQuestion.wrongAnswers.length);
            } while (selectedWrongAnswers.indexOf(rndIndex) !== -1);
            selectedWrongAnswers.push(rndIndex);
            answers.push(rndQuestion.wrongAnswers[rndIndex]);
        }
        const _answers = mixArray(answers);
        return {id: rndQuestion.id, question: rndQuestion.question, answers: _answers, time: rndQuestion.time}
    },
    getQuestionById: (state) => (id) => {
        return state.trivias.find(pre => pre.id === id);
    },
    getActiveQuestions: (state) => {
        return state.trivias;
    },
}

const mutations = {
    addQuestion: (state, payload) => {
        const maxId = Math.max(...state.trivias.map(p => parseInt(p.id)));
        const newTrivia = {...payload, id: maxId+1};
        state.trivias.push(newTrivia);
        triviasStore.addTriviaToSession(newTrivia);  
    },
    removeQuestion: (state, payload) => {
        state.trivias = state.trivias.filter(p => p.id !== payload);
        triviasStore.removeTriviaFromSession(payload);
    },
    editQuestion: (state, payload) => {
        const index = state.trivias.findIndex(p => p.id === payload.id)
        if (index !== -1) {
            state.trivias[index] = {...payload};
            triviasStore.editTriviaFromSession(state.trivias);
        } 
    }
}

const actions = {

}

export default {state, getters, mutations, actions}