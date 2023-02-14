import Answer from "../interfaces/Entities/Answer/answer.interface"
import { Router, Request, Response, NextFunction } from "express"
import Controller from "../interfaces/common/controller.interface"
import validationMiddleware from "../middleware/validation.middleware"
import validate from "../interfaces/Entities/Answer/answer.validation"
import AnswerBusiness from "../2.business/answer.business"
import response from "../utils/response"

class AnswerNetwork implements Controller {
  public path = "/answer"
  public router = Router()
  private AnswerBusiness = new AnswerBusiness()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    /**
     * Get List of answers
     */
    this.router.get(`${this.path}`, this.listAnswers)

    /**
     * Get answer by Id
     */
    this.router.get(`${this.path}/:id`, this.searchAnswerById)

    /**
     * Create one Answer
     */
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.answerValidation),
      this.addAnswer
    )

    /**
     * Save a list of answers
     */
    this.router.post(`${this.path}/saveList`, this.saveListAnswers)

    /**
     * Update one Answer
     */
    this.router.patch(
      `${this.path}`,
      validationMiddleware(validate.answerValidation),
      this.updateAnswer
    )

    /**
     * Delete answer by Id
     */
    this.router.delete(`${this.path}/:id`, this.deleteAnswerById)
  }

  // * Network Methods

  private listAnswers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Answer[]> => {
    try {
      const data = await this.AnswerBusiness.listAnswers()

      response.success(res, data, 200, "Everyanswer is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private searchAnswerById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Answer[]> => {
    try {
      const data = await this.AnswerBusiness.searchAnswerById(req.params.id)

      response.success(res, data, 200, "Everyanswer is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private addAnswer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Answer[]> => {
    try {
      const data = await this.AnswerBusiness.addAnswer(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private saveListAnswers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Answer[]> => {
    try {
      const data = await this.AnswerBusiness.saveAnswersList(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private updateAnswer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Answer[]> => {
    try {
      const data = await this.AnswerBusiness.updateAnswer(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private deleteAnswerById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Answer[]> => {
    try {
      const data = await this.AnswerBusiness.deleteAnswerById(req.params.id)

      response.success(res, data, 200, "Everyanswer is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }
}

export default AnswerNetwork
