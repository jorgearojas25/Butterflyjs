import Repository from "../interfaces/common/repository.interface"
import Answer from "../interfaces/Entities/Answer/answer.interface"
import { connect } from "../utils/db"
import querys from "../utils/querys"

class AnswerRepository implements Repository {
  public entitieName = "answer"

  /**
   * Get list of answers
   */
  public async getAnswers(): Promise<any | Answer[]> {
    try {
      const conn = await connect()
      const answers = await conn.query(querys.getAllRows(this.entitieName))

      return answers[0]
    } catch (e) {
      throw new Error("Unable to get answers")
    }
  }

  /**
   * Get one answer by Id field
   * @param id answer Id
   */
  public async getAnswerById(id: any): Promise<any | Answer[]> {
    try {
      const conn = await connect()
      const answers = await conn.query(querys.searchById(this.entitieName, id))

      return answers[0]
    } catch (e) {
      throw new Error("Unable to get answers")
    }
  }

  /**
   * Add one answer
   * @param answer Insert data
   */
  public async postAnswer(answer: Answer): Promise<any> {
    try {
      const conn = await connect()
      const newAnswer = await conn.query(
        `INSERT INTO ${this.entitieName} SET ?`,
        answer
      )

      return newAnswer
    } catch (e) {
      throw e
    }
  }

  /**
   * Method for update one answer
   * @param answer Data for update answers
   * @returns information of the updated answer
   */
  public async updateAnswerById(answer: Answer): Promise<any> {
    try {
      const { idAnswer } = answer
      const conn = await connect()
      const updatedAnswer = await conn.query(
        `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
        [answer, idAnswer]
      )

      return updatedAnswer
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete one answer by his Id
   * @param id Id of the answer to delete
   * @returns
   */
  public async deleteAnswerById(id: any): Promise<any> {
    try {
      const conn = await connect()
      const deletedAnswer = await conn.query(
        querys.deleteById(this.entitieName, id)
      )

      return deletedAnswer
    } catch (e) {
      throw e
    }
  }
}

export default AnswerRepository
