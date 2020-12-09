<template>
   <intro>
       <div class="quiz-board" slot="board-side">
           <div class="logo-label">
               <img src="../assets/nues 1.png" class="dept-logo">
               <div class="dept-label"><p>Faculty Of Engineering And Technology</p></div>
            </div>
            <div class="test-info">
                <p class="start-time">Start Time :: <span style="color: #FFDF5A; font-weight: 600">10:45 AM</span></p>
                <p class="stop-time">Start Time :: <span style="color: #FFDF5A; font-weight: 600">11:30 AM</span></p>
                <p class="test-course">USE OF ENGLISH</p>
                <p class="test-type">GENERAL MGS QUESTIONS</p>
                <p class="end-button" @click="end">End Test</p>
            </div>
       </div>
       <div slot="content-side" class="quiz-question">
           <div class="question-count">
               <p style="font-size: 2.5rem; padding-right: 2rem; color: rgba(0, 0, 0, 0.4); font-weight: 600">Question</p>
               <p style="font-size: 1.8rem; font-weight: 500">
                   <span style="color: #91519D; padding-bottom: 6rem; font-weight: 600; font-size: 2rem">{{count}}</span>
                   <span style="color: #C582D5; font-weight: 600">/</span>20</p>
           </div>
           <p class="question-instruction">
               Choose the option that can be best used to replace the underlined 
               word in the sentence below.
            </p>
            <p style="font-size: 2rem; font-weight: bold; align-self: flex-start; margin: 0">{{count}}.</p>
            <p class="question-box">{{currentQuestion.question}}</p>
            <div class="option-box">
                <button class="each-option" @click="verifyAnswer(currentQuestion.options.a, 'a')" ref="first">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.a}}
                </button>
                <button class="each-option" @click="verifyAnswer(currentQuestion.options.b, 'b')" ref="second">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.b}}
                </button>
                <button class="each-option" @click="verifyAnswer(currentQuestion.options.c, 'c')" ref="third">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.c}}
                </button>
                <button class="each-option" @click="verifyAnswer(currentQuestion.options.d, 'd')" ref="fourth">
                    <p class="option-icon"></p>
                    {{currentQuestion.options.d}}
                </button>
            </div>

            <div class="navi-question">
                <button class="navi-button prev-button" @click="next(-1)" ref="prev">Prev</button>
                <button class="navi-button" @click="next(1)" ref="next">Next</button>
            </div>

            <div class="number-container">
                <div class="each-number dir-arrow" @click="toggleNumbers('prev')">
                    <p> > </p>
                </div>

                <div class="each-number" :key="question.No" v-for="question in showNumbers">
                    <p v-if="question.chosen" class="solved-number">{{question.No}}</p>
                    <p v-else>{{question.No}}</p>
                </div>

                <div class="each-number dir-arrow" @click="toggleNumbers('next')">
                    <p> > </p>
                </div>
            </div>
       </div>
   </intro>
</template>

<script>
import Intro from './reusable/Intro'
import boardView from './reusable/boardView'

export default {
    components: {
        "intro": Intro
    },
    created(){
        this.currentQuestion = this.userQuestions[0]
        this.showNumbers = [...this.userQuestions.slice(0, 11)]
    },
    data(){
        return{
            allQuestions: [
                {
                    question: "What is your name",
                    options: {
                        a: "Habeeb", b: "Ridwaan", c: "Haleemah", d: "Qudduus"
                    },
                    answer: "Ridwan"
                },
                 {
                    question: "What is your age",
                    options: {
                        a: 12, b: 27, c: 18, d: 32
                    },
                    answer: 18
                },
                 {
                    question: "What is your gender",
                    options: {
                        a: "Male", b: "Female", c: "unKnown"
                    },
                    answer: "Male"
                },
                 {
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
            ],

            userQuestions: [
                {   
                    No: 1,
                    question: "What is your age",
                    options: {
                        a: 12, b: 27, c: 18, d: 32
                    },
                    answer: 18
                },
                 {  
                     No: 2,
                    question: "What is your gender",
                    options: {
                        a: "Male", b: "Female", c: "unKnown"
                    },
                    answer: "Male"
                },
                {   
                    No: 3,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   
                    No: 4,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   
                    No: 5,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 6,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 7,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 8,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 9,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 10,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 11,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 12,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 13,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 14,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 15,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 16,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 17,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 18,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 19,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                },
                {   No: 20,
                    question: "What school did you attend",
                    options: {
                        a: "Unilorin", b: "Kwara poly", c: "Unilag", d: "Kwasu"
                    },
                    answer: "Kwasu"
                }
            ],

            currentQuestion: {},
            count: 1,
            score: 0,
            nav: "prev",
            showNumbers: [],
           
        }
    },
    methods: {
        close: function(){
            this.$router.push("/")
        },
        toggleNumbers: function(check){
            if(check === "next"){
                this.nav = "next"
                this.showNumbers = [...this.userQuestions.slice(11, this.userQuestions.length)]
            }
            else if(check === "prev"){
                this.nav = "prev"
                this.showNumbers = [...this.userQuestions.slice(0, 11)]
            }
        },
        end: function(){
            var userScore = Math.trunc((this.score/200) * 100)
            this.$router.push(`/congrats/${userScore}`)
        },
        next: function(info){
 
            this.count = this.count + info
            this.currentQuestion = this.userQuestions[this.count-1]

            if(this.count === this.userQuestions.length){
                this.$refs.next.style.visibility = "hidden"
            }
            else{
                this.$refs.next.style.visibility = "visible"
            }

            if(this.count === 1){
                this.$refs.prev.style.visibility = "hidden"
            }
            else{
                this.$refs.prev.style.visibility = "visible"
            }


            // SELECTED OPTION SCOPE

            this.$refs.first.style.background = "#FFFFFF"
            this.$refs.first.style.color = "#000"  
            this.$refs.second.style.background = "#FFFFFF"
            this.$refs.second.style.color = "#000"   
            this.$refs.third.style.background = "#FFFFFF"
            this.$refs.third.style.color = "#000"
            this.$refs.fourth.style.background = "#FFFFFF"
            this.$refs.fourth.style.color = "#000"    
            
            if(this.currentQuestion.optionLetter == "a"){
            this.$refs.first.style.background = "#C582D5"
            this.$refs.first.style.color = "#FFFFFF"
                
            }
            else if(this.currentQuestion.optionLetter == "b"){
                this.$refs.second.style.background = "#C582D5"
                this.$refs.second.style.color = "#FFFFFF"
            }
            else if(this.currentQuestion.optionLetter == "c"){
                this.$refs.third.style.background = "#C582D5"
                this.$refs.third.style.color = "#FFFFFF"
            }
            else if(this.currentQuestion.optionLetter == "d"){
                this.$refs.fourth.style.background = "#C582D5"
                this.$refs.fourth.style.color = "#FFFFFF"
            }

        },
        verifyAnswer: function(option, info){
           
            if(this.userQuestions[this.count-1].correct === "yes"){
                this.score = this.score - 10
            }

            if(this.userQuestions[this.count-1].answer === option){
                this.score = this.score + 10
                this.userQuestions[this.count - 1] = {...this.userQuestions[this.count - 1], correct: "yes", chosen: true, optionLetter: info}
            }
            else{
                this.userQuestions[this.count - 1] = {...this.userQuestions[this.count - 1], correct: "no", chosen: true, optionLetter: info}
            }
            
            // UPDATE SOLVED NUMBERS
            if(this.nav === "next"){
                this.showNumbers = [...this.userQuestions.slice(11, this.userQuestions.length)]
            }
            else if(this.nav === "prev"){
                this.showNumbers = [...this.userQuestions.slice(0, 11)]
            }
            

            // SELECTED OPTION SCOPE

            this.$refs.first.style.background = "#FFFFFF"
            this.$refs.first.style.color = "#000"  
            this.$refs.second.style.background = "#FFFFFF"
            this.$refs.second.style.color = "#000"   
            this.$refs.third.style.background = "#FFFFFF"
            this.$refs.third.style.color = "#000"
            this.$refs.fourth.style.background = "#FFFFFF"
            this.$refs.fourth.style.color = "#000" 

            if(this.userQuestions[this.count - 1].optionLetter == "a"){
                this.$refs.first.style.background = "#C582D5"
                this.$refs.first.style.color = "#FFFFFF"
                
            }
            else if(this.userQuestions[this.count - 1].optionLetter == "b"){
                this.$refs.second.style.background = "#C582D5"
                this.$refs.second.style.color = "#FFFFFF"
            }
            else if(this.userQuestions[this.count - 1].optionLetter == "c"){
                this.$refs.third.style.background = "#C582D5"
                this.$refs.third.style.color = "#FFFFFF"
            }
            else if(this.userQuestions[this.count - 1].optionLetter == "d"){
                this.$refs.fourth.style.background = "#C582D5"
                this.$refs.fourth.style.color = "#FFFFFF"
            }
             
        },
       
    },
  
}
</script>

<style lang="scss" src="../styles/QuizPage.scss" scoped>

</style>