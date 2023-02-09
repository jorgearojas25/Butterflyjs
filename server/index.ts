import "dotenv/config"
import validateEnv from "./utils/validateEnv"
import App from "./app"
import AnswerNetwork from "./1.network/answer.network"
import CompanyNetwork from "./1.network/company.network"
import FormNetwork from "./1.network/form.network"
import QuestionNetwork from "./1.network/question.network"
import QuestionTypeNetwork from "./1.network/questionType.network"

validateEnv()

const app = new App(
  [
    new AnswerNetwork(),
    new CompanyNetwork(),
    new FormNetwork(),
    new QuestionNetwork(),
    new QuestionTypeNetwork(),
  ],
  Number(process.env.PORT)
)

app.listen()
