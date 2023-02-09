import Repository from "../interfaces/common/repository.interface"
import Question from "../interfaces/Entities/Question/question.interface"
import { connect } from "../utils/db"
import querys from "../utils/querys"

class QuestionRepository implements Repository {
  public entitieName = "question"

  /**
   * Get list of questions
   */
  public async getQuestions(): Promise<any | Question[]> {
    try {
      const conn = await connect()
      const questions = await conn.query(querys.getAllRows(this.entitieName))

      return questions[0]
    } catch (e) {
      throw new Error("Unable to get questions")
    }
  }

  /**
   * Get one question by Id field
   * @param id question Id
   */
  public async getQuestionById(id: any): Promise<any | Question[]> {
    try {
      const conn = await connect()
      const questions = await conn.query(
        querys.searchById(this.entitieName, id)
      )

      return questions[0]
    } catch (e) {
      throw new Error("Unable to get questions")
    }
  }

  /**
   * Add one question
   * @param question Insert data
   */
  public async postQuestion(question: Question): Promise<any> {
    try {
      const conn = await connect()
      const newQuestion = await conn.query(
        `INSERT INTO ${this.entitieName} SET ?`,
        question
      )

      return newQuestion
    } catch (e) {
      throw e
    }
  }

  /**
   * Method for update one question
   * @param question Data for update questions
   * @returns information of the updated question
   */
  public async updateQuestionById(question: Question): Promise<any> {
    try {
      const { idQuestion } = question
      const conn = await connect()
      const updatedQuestion = await conn.query(
        `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
        [question, idQuestion]
      )

      return updatedQuestion
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete one question by his Id
   * @param id Id of the question to delete
   * @returns
   */
  public async deleteQuestionById(id: any): Promise<any> {
    try {
      const conn = await connect()
      const deletedQuestion = await conn.query(
        querys.deleteById(this.entitieName, id)
      )

      return deletedQuestion
    } catch (e) {
      throw e
    }
  }
}

export default QuestionRepository
