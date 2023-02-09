import { Request, NextFunction } from "express"
import FormRepository from "../3.store/form.repository"
import Form from "../interfaces/Entities/Form/form.interface"

class FormBusiness {
  private FormRepository = new FormRepository()

  public listForms = async (): Promise<Form[] | void> => {
    try {
      const forms = await this.FormRepository.getForms()

      return forms
    } catch (e) {
      throw e
    }
  }

  public searchFormById = async (id: any): Promise<Form[] | void> => {
    try {
      const forms = await this.FormRepository.getFormById(id)

      return forms
    } catch (e) {
      throw e
    }
  }

  public addForm = async (form: Form): Promise<Form[] | void> => {
    try {
      const result = await this.FormRepository.postForm(form)

      return result
    } catch (e) {
      throw e
    }
  }

  public updateForm = async (form: Form): Promise<Form[] | void> => {
    try {
      const result = await this.FormRepository.updateFormById(form)

      return result
    } catch (e) {
      throw e
    }
  }

  public deleteFormById = async (id: any): Promise<Form[] | void> => {
    try {
      const forms = await this.FormRepository.deleteFormById(id)

      return forms
    } catch (e) {
      throw e
    }
  }
}

export default FormBusiness
