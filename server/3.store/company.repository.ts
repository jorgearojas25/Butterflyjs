import Repository from "../interfaces/common/repository.interface"
import Company from "../interfaces/Entities/Company/company.interface"
import { connect } from "../utils/db"
import querys from "../utils/querys"

class CompanyRepository implements Repository {
  public entitieName = "company"

  /**
   * Get list of companys
   */
  public async getCompanys(): Promise<any | Company[]> {
    try {
      const conn = await connect()
      const companys = await conn.query(querys.getAllRows(this.entitieName))

      return companys[0]
    } catch (e) {
      throw new Error("Unable to get companys")
    }
  }

  /**
   * Get one company by Id field
   * @param id company Id
   */
  public async getCompanyById(id: any): Promise<any | Company[]> {
    try {
      const conn = await connect()
      const companys = await conn.query(querys.searchById(this.entitieName, id))

      return companys[0]
    } catch (e) {
      throw new Error("Unable to get companys")
    }
  }

  /**
   * Add one company
   * @param company Insert data
   */
  public async postCompany(company: Company): Promise<any> {
    try {
      const conn = await connect()
      const newCompany = await conn.query(
        `INSERT INTO ${this.entitieName} SET ?`,
        company
      )

      return newCompany
    } catch (e) {
      throw e
    }
  }

  /**
   * Method for update one company
   * @param company Data for update companys
   * @returns information of the updated company
   */
  public async updateCompanyById(company: Company): Promise<any> {
    try {
      const { idCompany } = company
      const conn = await connect()
      const updatedCompany = await conn.query(
        `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
        [company, idCompany]
      )

      return updatedCompany
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete one company by his Id
   * @param id Id of the company to delete
   * @returns
   */
  public async deleteCompanyById(id: any): Promise<any> {
    try {
      const conn = await connect()
      const deletedCompany = await conn.query(
        querys.deleteById(this.entitieName, id)
      )

      return deletedCompany
    } catch (e) {
      throw e
    }
  }
}

export default CompanyRepository
