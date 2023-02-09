import { Request, NextFunction } from "express"
import AnswerRepository from "../3.store/answer.repository"
import Answer from "../interfaces/Entities/Answer/answer.interface"

class AnswerBusiness {
  private AnswerRepository = new AnswerRepository()

  public listAnswers = async (): Promise<Answer[] | void> => {
    try {
      const answers = await this.AnswerRepository.getAnswers()

      return answers
    } catch (e) {
      throw e
    }
  }

  public searchAnswerById = async (id: any): Promise<Answer[] | void> => {
    try {
      const answers = await this.AnswerRepository.getAnswerById(id)

      return answers
    } catch (e) {
      throw e
    }
  }

  public addAnswer = async (answer: Answer): Promise<Answer[] | void> => {
    try {
      const result = await this.AnswerRepository.postAnswer(answer)

      return result
    } catch (e) {
      throw e
    }
  }

  public updateAnswer = async (answer: Answer): Promise<Answer[] | void> => {
    try {
      const result = await this.AnswerRepository.updateAnswerById(answer)

      return result
    } catch (e) {
      throw e
    }
  }

  public deleteAnswerById = async (id: any): Promise<Answer[] | void> => {
    try {
      const answers = await this.AnswerRepository.deleteAnswerById(id)

      return answers
    } catch (e) {
      throw e
    }
  }
}

export default AnswerBusiness
