import Question from "../interfaces/Entities/Question/question.interface"
import { Router, Request, Response, NextFunction } from "express"
import Controller from "../interfaces/common/controller.interface"
import validationMiddleware from "../middleware/validation.middleware"
import validate from "../interfaces/Entities/Question/question.validation"
import QuestionBusiness from "../2.business/question.business"
import response from "../utils/response"

class QuestionNetwork implements Controller {
  public path = "/question"
  public router = Router()
  private QuestionBusiness = new QuestionBusiness()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    /**
     * Get List of questions
     */
    this.router.get(`${this.path}`, this.listQuestions)

    /**
     * Get question by questionTypeId
     */
    this.router.get(
      `${this.path}/type/:questionTypeid`,
      this.searchQuestionByTypeId
    )

    /**
     * Get question by Id
     */
    this.router.get(`${this.path}/:id`, this.searchQuestionById)

    /**
     * Create one Question
     */
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.questionValidation),
      this.addQuestion
    )

    /**
     * Update one Question
     */
    this.router.patch(
      `${this.path}`,
      validationMiddleware(validate.questionValidation),
      this.updateQuestion
    )

    /**
     * Delete question by Id
     */
    this.router.delete(`${this.path}/:id`, this.deleteQuestionById)
  }

  //* Network Methods

  private listQuestions = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Question[]> => {
    try {
      const data = await this.QuestionBusiness.listQuestions()

      response.success(res, data, 200, "Everyquestion is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private searchQuestionById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Question[]> => {
    try {
      const data = await this.QuestionBusiness.searchQuestionById(
        req.params.questionTypeid
      )

      response.success(res, data, 200, "Everyquestion is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private searchQuestionByTypeId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Question[]> => {
    try {
      const data = await this.QuestionBusiness.searchQuestionByTypeId(
        req.params.id
      )

      response.success(res, data, 200, "Everyquestion is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private addQuestion = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Question[]> => {
    try {
      const data = await this.QuestionBusiness.addQuestion(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private updateQuestion = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Question[]> => {
    try {
      const data = await this.QuestionBusiness.updateQuestion(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private deleteQuestionById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Question[]> => {
    try {
      const data = await this.QuestionBusiness.deleteQuestionById(req.params.id)

      response.success(res, data, 200, "Everyquestion is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }
}

export default QuestionNetwork
