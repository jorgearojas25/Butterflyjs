import express, { Application, urlencoded, Request, Response } from "express"
import { connect } from "./utils/db"
import compression from "compression"
import cors from "cors"
import morgan from "morgan"
import Controller from "./interfaces/common/controller.interface"
import helmet from "helmet"
import path from "path"

class App {
  public express: Application
  public port: number

  constructor(controllers: Controller[], port: number) {
    this.express = express()
    this.port = port

    this.initializeDatabaseConnection()
    this.initializeMiddleware()
    this.initializeControllers(controllers)
    this.serveSite()
  }

  private initializeMiddleware(): void {
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(morgan("dev"))
    this.express.use(express.json())
    this.express.use(urlencoded({ extended: false }))
    this.express.use(compression())
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.express.use("/api", controller.router)
    })
  }

  private serveSite(): void {
    this.express.use(express.static(path.join(__dirname, "../client/build")))
  }

  private initializeDatabaseConnection(): void {
    /**
     * Create first connection to re use in repository layer
     */
    connect()
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(
        `[app.ts] App listening on port http://localhost:${this.port}`
      )
    })
  }
}

export default App
