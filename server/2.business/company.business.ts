import { Request, NextFunction } from "express"
import CompanyRepository from "../3.store/company.repository"
import Company from "../interfaces/Entities/Company/company.interface"

class CompanyBusiness {
  private CompanyRepository = new CompanyRepository()

  public listCompanys = async (): Promise<Company[] | void> => {
    try {
      const companys = await this.CompanyRepository.getCompanys()

      return companys
    } catch (e) {
      throw e
    }
  }

  public searchCompanyById = async (id: any): Promise<Company[] | void> => {
    try {
      const companys = await this.CompanyRepository.getCompanyById(id)

      return companys
    } catch (e) {
      throw e
    }
  }

  public addCompany = async (company: Company): Promise<Company[] | void> => {
    try {
      const result = await this.CompanyRepository.postCompany(company)

      return result
    } catch (e) {
      throw e
    }
  }

  public updateCompany = async (
    company: Company
  ): Promise<Company[] | void> => {
    try {
      const result = await this.CompanyRepository.updateCompanyById(company)

      return result
    } catch (e) {
      throw e
    }
  }

  public deleteCompanyById = async (id: any): Promise<Company[] | void> => {
    try {
      const companys = await this.CompanyRepository.deleteCompanyById(id)

      return companys
    } catch (e) {
      throw e
    }
  }
}

export default CompanyBusiness
