import Form from "../interfaces/Entities/Form/form.interface"
import { Router, Request, Response, NextFunction } from "express"
import Controller from "../interfaces/common/controller.interface"
import validationMiddleware from "../middleware/validation.middleware"
import validate from "../interfaces/Entities/Form/form.validation"
import FormBusiness from "../2.business/form.business"
import response from "../utils/response"

class FormNetwork implements Controller {
  public path = "/form"
  public router = Router()
  private FormBusiness = new FormBusiness()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    /**
     * Get List of forms
     */
    this.router.get(`${this.path}`, this.listForms)

    /**
     * Get form by Id
     */
    this.router.get(`${this.path}/:id`, this.searchFormById)

    /**
     * Create one Form
     */
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.formValidation),
      this.addForm
    )

    /**
     * Update one Form
     */
    this.router.patch(
      `${this.path}`,
      validationMiddleware(validate.formValidation),
      this.updateForm
    )

    /**
     * Delete form by Id
     */
    this.router.delete(`${this.path}/:id`, this.deleteFormById)
  }

  // * Network Methods

  private listForms = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Form[]> => {
    try {
      const data = await this.FormBusiness.listForms()

      response.success(res, data, 200, "Everyform is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private searchFormById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Form[]> => {
    try {
      const data = await this.FormBusiness.searchFormById(req.params.id)

      response.success(res, data, 200, "Everyform is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private addForm = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Form[]> => {
    try {
      const data = await this.FormBusiness.addForm(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private updateForm = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Form[]> => {
    try {
      const data = await this.FormBusiness.updateForm(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private deleteFormById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Form[]> => {
    try {
      const data = await this.FormBusiness.deleteFormById(req.params.id)

      response.success(res, data, 200, "Everyform is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }
}

export default FormNetwork
