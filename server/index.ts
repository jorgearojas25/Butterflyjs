import "dotenv/config"
import validateEnv from "./utils/validateEnv"
import App from "./app"
import ThingNetwork from "./1.network/thing.network"

validateEnv()

const app = new App([new ThingNetwork()], Number(process.env.PORT))

app.listen()
