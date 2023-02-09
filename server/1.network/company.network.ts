import Company from "../interfaces/Entities/Company/company.interface"
import { Router, Request, Response, NextFunction } from "express"
import Controller from "../interfaces/common/controller.interface"
import validationMiddleware from "../middleware/validation.middleware"
import validate from "../interfaces/Entities/Company/company.validation"
import CompanyBusiness from "../2.business/company.business"
import response from "../utils/response"

class CompanyNetwork implements Controller {
  public path = "/company"
  public router = Router()
  private CompanyBusiness = new CompanyBusiness()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    /**
     * Get List of companys
     */
    this.router.get(`${this.path}`, this.listCompanys)

    /**
     * Get company by Id
     */
    this.router.get(`${this.path}/:id`, this.searchCompanyById)

    /**
     * Create one Company
     */
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.companyValidation),
      this.addCompany
    )

    /**
     * Update one Company
     */
    this.router.patch(
      `${this.path}`,
      validationMiddleware(validate.companyValidation),
      this.updateCompany
    )

    /**
     * Delete company by Id
     */
    this.router.delete(`${this.path}/:id`, this.deleteCompanyById)
  }

  //* Network Methods

  private listCompanys = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Company[]> => {
    try {
      const data = await this.CompanyBusiness.listCompanys()

      response.success(res, data, 200, "Everycompany is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private searchCompanyById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Company[]> => {
    try {
      const data = await this.CompanyBusiness.searchCompanyById(req.params.id)

      response.success(res, data, 200, "Everycompany is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private addCompany = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Company[]> => {
    try {
      const data = await this.CompanyBusiness.addCompany(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private updateCompany = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Company[]> => {
    try {
      const data = await this.CompanyBusiness.updateCompany(req.body)

      response.success(res, data, 201, "Created")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }

  private deleteCompanyById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Company[]> => {
    try {
      const data = await this.CompanyBusiness.deleteCompanyById(req.params.id)

      response.success(res, data, 200, "Everycompany is ok")
    } catch (e: any) {
      response.error(res, 500, "Internal Server Error", e)
    }
  }
}

export default CompanyNetwork
