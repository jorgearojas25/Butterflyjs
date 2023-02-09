import "dotenv/config"
import validateEnv from "./utils/validateEnv"
import App from "./app"
import AnswerNetwork from "./1.network/answer.network"

validateEnv()

const app = new App([new AnswerNetwork()], Number(process.env.PORT))

app.listen()
