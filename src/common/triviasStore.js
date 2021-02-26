const trivias = [
    {
        id: 1,
        question: "What is the root square of 9?",
        wrongAnswers: ["4", "2", "1", "6", "5", "8", "7"],
        trueAnswer: "3",
        category: "Math",
        time: 8,
        lang: "en",
        isActive: true,
    },
    {
        id: 2,
        question: "What is the abbrevation of 'gold' element?",
        wrongAnswers: ["Ag", "Fe", "Ti", "Go", "Gd"],
        trueAnswer: "Au",
        category: "Chemistry",
        time: 8,
        lang: "en",
        isActive: true,
    },
    {
        id: 3,
        question: "Which animal is the mascot of Beşiktaş?",
        wrongAnswers: ["Squirrel", "Lion", "Tiger", "Fish", "Bear", "Cat", "Dog"],
        trueAnswer: "Eagle",
        category: "Sport",
        time: 10,
        lang: "en",
        isActive: true,
    },
    {
        id: 4,
        question: "Which country was selected first in Eurovision 2003?",
        wrongAnswers: ["France", "Germany", "Bulgaria", "Spain", "Latvia", "Greece", "Austria"],
        trueAnswer: "Turkey",
        category: "Art",
        time: 10,
        lang: "en",
        isActive: true,
    },
    {
        id: 5,
        question: "What is voltage when ampere is 8A and resistance is 4 ohm?",
        wrongAnswers: ["2", "1", "16", "8", "64", "4"],
        trueAnswer: "32",
        category: "Physics",
        time: 10,
        lang: "en",
        isActive: true,
    },
    {
        id: 6,
        question: "How many border neighbors do Russia have?",
        wrongAnswers: ["13", "12", "11", "15", "10", "16"],
        trueAnswer: "14",
        category: "Geography",
        time: 10,
        lang: "en",
        isActive: true,
    },
    {
        id: 7,
        question: "When was Linux released",
        wrongAnswers: ["16th September of 1992", "17th October of 1992", "17th September of 1992", "18th October of 1991"],
        trueAnswer: "17th September of 1991",
        category: "Technology",
        time: 10,
        lang: "en",
        isActive: true,
    },
    {
        id: 8,
        question: "In which year did Bitcoin network come into existance?",
        wrongAnswers: ["2010", "2008", "2011", "2007", "2012", "2006", "2013"],
        trueAnswer: "2009",
        category: "Finance",
        time: 10,
        lang: "en",
        isActive: true,
    },
]

const triviasStore = {
    getTriviasFromSession(){
        let triviasFromSession = JSON.parse(localStorage.getItem('trivias'));
        if(triviasFromSession) return triviasFromSession;
        localStorage.setItem('trivias', JSON.stringify(trivias))
        triviasFromSession = JSON.parse(localStorage.getItem('trivias'));
        return trivias;
    },
    addTriviaToSession(trivia){
        const triviasFromSession = this.getTriviasFromSession();
        triviasFromSession.push(trivia);
        localStorage.setItem('trivias', JSON.stringify(triviasFromSession));
    },
    removeTriviaFromSession(id){
        let triviasFromSession = this.getTriviasFromSession().filter(p => p.id !== id);
        localStorage.setItem('trivias', JSON.stringify(triviasFromSession));
    },
    editTriviaFromSession(trivias){
        localStorage.setItem('trivias', JSON.stringify(trivias));
    }
}

export default triviasStore