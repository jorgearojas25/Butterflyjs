import { Request, NextFunction } from "express"
import QuestionTypeRepository from "../3.store/questionType.repository"
import QuestionType from "../interfaces/Entities/QuestionType/questionType.interface"

class QuestionTypeBusiness {
  private QuestionTypeRepository = new QuestionTypeRepository()

  public listQuestionTypes = async (): Promise<QuestionType[] | void> => {
    try {
      const questionTypes = await this.QuestionTypeRepository.getQuestionTypes()

      return questionTypes
    } catch (e) {
      throw e
    }
  }

  public searchQuestionTypeById = async (
    id: any
  ): Promise<QuestionType[] | void> => {
    try {
      const questionTypes =
        await this.QuestionTypeRepository.getQuestionTypeById(id)

      return questionTypes
    } catch (e) {
      throw e
    }
  }

  public addQuestionType = async (
    questionType: QuestionType
  ): Promise<QuestionType[] | void> => {
    try {
      const result = await this.QuestionTypeRepository.postQuestionType(
        questionType
      )

      return result
    } catch (e) {
      throw e
    }
  }

  public updateQuestionType = async (
    questionType: QuestionType
  ): Promise<QuestionType[] | void> => {
    try {
      const result = await this.QuestionTypeRepository.updateQuestionTypeById(
        questionType
      )

      return result
    } catch (e) {
      throw e
    }
  }

  public deleteQuestionTypeById = async (
    id: any
  ): Promise<QuestionType[] | void> => {
    try {
      const questionTypes =
        await this.QuestionTypeRepository.deleteQuestionTypeById(id)

      return questionTypes
    } catch (e) {
      throw e
    }
  }
}

export default QuestionTypeBusiness
