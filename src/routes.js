import WelcomePage from './components/WelcomePage'
import Quiz from "./components/QuizPage"
import Congrats from "./components/CongratPage"

export default [
    {path: "/", component: WelcomePage},
    {path: "/instruction", component: Quiz},
    {path: "/congrats/:score", component: Congrats}
]