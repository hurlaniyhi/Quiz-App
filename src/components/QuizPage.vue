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
                <p class="end-button" @click="close">End Test</p>
            </div>
       </div>
       <div slot="content-side" class="quiz-question">
           <div class="question-count">
               <p style="font-size: 2.5rem; padding-right: 2rem; color: rgba(0, 0, 0, 0.4); font-weight: 600">Question</p>
               <p style="font-size: 1.8rem; font-weight: 500">
                   <span style="color: #91519D; padding-bottom: 6rem; font-weight: 600; font-size: 2rem">6</span>
                   <span style="color: #C582D5; font-weight: 600">/</span>20</p>
           </div>
           <p class="question-instruction">
               Choose the option that can be best used to replace the underlined 
               word in the sentence below.
            </p>
            <p style="font-size: 2rem; font-weight: bold; align-self: flex-start; margin: 0">6.</p>
            <p class="question-box">Ibrahim is gradually approaching the Peak of his career.</p>
            <div class="option-box">
                <button class="each-option">
                    <p class="option-icon"></p>
                    Summit
                </button>
                <button class="each-option">
                    <p class="option-icon"></p>
                    Average
                </button>
                <button class="each-option">
                    <p class="option-icon"></p>
                    Rear
                </button>
                <button class="each-option">
                    <p class="option-icon"></p>
                    Top
                </button>
            </div>

            <div class="navi-question">
                <button class="navi-button">Prev</button>
                <button class="navi-button" @click="next">Next</button>
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
    methods:{
        close: function(){
            this.$router.push("/")
        },
        next: function(){
            this.$router.push("/congrats")
        }
    }
}
</script>

<style lang="scss" src="../styles/QuizPage.scss" scoped>

</style>