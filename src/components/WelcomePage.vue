<template>
    <intro>
        <board-view slot="board-side"></board-view>

        <div class="slot-content" slot="content-side">
            <div class="user-block">
               <img src="../assets/user.png" class="user-icon">
               <p class="greeting">Welcome,</p>
               <p class="greeting">Please sign in to start your test</p>
           </div>
           <div class="instructions" ref="cancelled" @click="hideMe">
               <div class="cancel-instruction"><p class="cancel-text">x</p></div>
               <p class="instruction-note">Read Carefully !!!</p>
               <ul class="instruction-list">
                   <li class="each-list">There are 2 categories and a total of 20 questions to be 
                       answered. Please do not click submit or end test unless you are sure of submitting.
                    </li>
                    <li class="each-list">Your examination ID is <span style="color: #8A4B95">MSQ100L20</span></li>
                    <li class="each-list">Any form of malpractice would render your test nullified, stick to the rules. GOOD LUCK !</li>
                    <li class="each-list">Exam duration :: <span style="font-weight: 600">35 minutes</span></li>
               </ul>
           </div>
            <input type="text" class="login-input" placeholder="Enter matric number" required>
            <input type="text" class="login-input" placeholder="Enter exam ID e.g MSQ100L20" required>
            <p class="start-button" @click="navigate">Start Test</p>
        </div>  
    </intro>
</template>

<script>
import Intro from './reusable/Intro'
import boardView from './reusable/boardView'
export default {
    components: {
        "intro": Intro,
        "board-view": boardView
    },
    data(){
        return{
            instruction: false
        }
    },
    methods: {
        navigate: function(){
            if(this.instruction === true){
                this.$router.push("instruction")
                this.instruction = false
            }
            else{
                this.$refs.cancelled.style.display = "block"
                this.instruction = true
            }
        },
        hideMe: function(){
            this.instruction = false
            this.$refs.cancelled.style.display = "none"
        }
    }, 
   
}
</script>

<style lang="scss" src="../styles/WelcomePage.scss" scoped>

</style>