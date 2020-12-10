import WelcomePage from './components/WelcomePage'
import Quiz from "./components/QuizPage"
import Congrats from "./components/CongratPage"

export default [
    {path: "/", component: WelcomePage},
    {path: "/instruction/:username", component: Quiz},
    {path: "/congrats/:username/:score/:time/:answered", component: Congrats}
]