import QuestionType from "../interfaces/Entities/QuestionType/questionType.interface"
import { Router, Request, Response, NextFunction } from "express"
import Controller from "../interfaces/common/controller.interface"
import validationMiddleware from "../middleware/validation.middleware"
import validate from "../interfaces/Entities/QuestionType/questionType.validation"
import QuestionTypeBusiness from "../2.business/questionType.business"
import response from "../utils/response"

class QuestionTypeNetwork implements Controller {
  public path = "/questionType"
  public router = Router()
  private QuestionTypeBusiness = new QuestionTypeBusiness()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    /**
     * Get List of questionTypes
     */
    this.router.get(`${this.path}`, this.listQuestionTypes)

    /**
     * Get questionType by Id
     */
    this.router.get(`${this.path}/:id`, this.searchQuestionTypeById)

    /**
     * Create one QuestionType
     */
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.questionTypeValidation),
      this.addQuestionType
    )

    /**
     * Update one QuestionType
     */
    this.router.patch(
      `${this.path}`,
      validationMiddleware(validate.questionTypeValidation),
      this.updateQuestionType
    )

    /**
     * Delete questionType by Id
     */
    this.router.delete(`${this.path}/:id`, this.deleteQuestionTypeById)
  }

  // * Network Methods

  private listQuestionTypes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | QuestionType[]> => {
    try {
      const data = await this.QuestionTypeBusiness.listQuestionTypes()

      response.success(res, data, 200, "EveryquestionType is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private searchQuestionTypeById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | QuestionType[]> => {
    try {
      const data = await this.QuestionTypeBusiness.searchQuestionTypeById(
        req.params.id
      )

      response.success(res, data, 200, "EveryquestionType is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private addQuestionType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | QuestionType[]> => {
    try {
      const data = await this.QuestionTypeBusiness.addQuestionType(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private updateQuestionType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | QuestionType[]> => {
    try {
      const data = await this.QuestionTypeBusiness.updateQuestionType(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private deleteQuestionTypeById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | QuestionType[]> => {
    try {
      const data = await this.QuestionTypeBusiness.deleteQuestionTypeById(
        req.params.id
      )

      response.success(res, data, 200, "EveryquestionType is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }
}

export default QuestionTypeNetwork
