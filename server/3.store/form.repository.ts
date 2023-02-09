import Repository from "../interfaces/common/repository.interface"
import Form from "../interfaces/Entities/Form/form.interface"
import { connect } from "../utils/db"
import querys from "../utils/querys"

class FormRepository implements Repository {
  public entitieName = "form"

  /**
   * Get list of forms
   */
  public async getForms(): Promise<any | Form[]> {
    try {
      const conn = await connect()
      const forms = await conn.query(querys.getAllRows(this.entitieName))

      return forms[0]
    } catch (e) {
      throw new Error("Unable to get forms")
    }
  }

  /**
   * Get one form by Id field
   * @param id form Id
   */
  public async getFormById(id: any): Promise<any | Form[]> {
    try {
      const conn = await connect()
      const forms = await conn.query(querys.searchById(this.entitieName, id))

      return forms[0]
    } catch (e) {
      throw new Error("Unable to get forms")
    }
  }

  /**
   * Add one form
   * @param form Insert data
   */
  public async postForm(form: Form): Promise<any> {
    try {
      const conn = await connect()
      const newForm = await conn.query(
        `INSERT INTO ${this.entitieName} SET ?`,
        form
      )

      return newForm
    } catch (e) {
      throw e
    }
  }

  /**
   * Method for update one form
   * @param form Data for update forms
   * @returns information of the updated form
   */
  public async updateFormById(form: Form): Promise<any> {
    try {
      const { idForm } = form
      const conn = await connect()
      const updatedForm = await conn.query(
        `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
        [form, idForm]
      )

      return updatedForm
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete one form by his Id
   * @param id Id of the form to delete
   * @returns
   */
  public async deleteFormById(id: any): Promise<any> {
    try {
      const conn = await connect()
      const deletedForm = await conn.query(
        querys.deleteById(this.entitieName, id)
      )

      return deletedForm
    } catch (e) {
      throw e
    }
  }
}

export default FormRepository
