import { randomizeOrder } from "./../utils/randomize"
import { Request, NextFunction } from "express"
import QuestionRepository from "../3.store/question.repository"
import Question from "../interfaces/Entities/Question/question.interface"

class QuestionBusiness {
  private QuestionRepository = new QuestionRepository()

  public listQuestions = async (): Promise<Question[] | void> => {
    try {
      const questions = await this.QuestionRepository.getQuestions()

      return randomizeOrder(questions)
    } catch (e) {
      throw e
    }
  }

  public searchQuestionById = async (id: any): Promise<Question[] | void> => {
    try {
      const questions = await this.QuestionRepository.getQuestionById(id)

      return questions
    } catch (e) {
      throw e
    }
  }

  public searchQuestionByTypeId = async (
    questionTypeid: any
  ): Promise<Question[] | void> => {
    try {
      const questions = await this.QuestionRepository.getQuestionByTypeId(
        questionTypeid
      )

      return questions
    } catch (e) {
      throw e
    }
  }

  public addQuestion = async (
    question: Question
  ): Promise<Question[] | void> => {
    try {
      const result = await this.QuestionRepository.postQuestion(question)

      return result
    } catch (e) {
      throw e
    }
  }

  public updateQuestion = async (
    question: Question
  ): Promise<Question[] | void> => {
    try {
      const result = await this.QuestionRepository.updateQuestionById(question)

      return result
    } catch (e) {
      throw e
    }
  }

  public deleteQuestionById = async (id: any): Promise<Question[] | void> => {
    try {
      const questions = await this.QuestionRepository.deleteQuestionById(id)

      return questions
    } catch (e) {
      throw e
    }
  }
}

export default QuestionBusiness
