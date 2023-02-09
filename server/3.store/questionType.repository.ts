import Repository from "../interfaces/common/repository.interface"
import QuestionType from "../interfaces/Entities/QuestionType/questionType.interface"
import { connect } from "../utils/db"
import querys from "../utils/querys"

class QuestionTypeRepository implements Repository {
  public entitieName = "questionType"

  /**
   * Get list of questionTypes
   */
  public async getQuestionTypes(): Promise<any | QuestionType[]> {
    try {
      const conn = await connect()
      const questionTypes = await conn.query(
        querys.getAllRows(this.entitieName)
      )

      return questionTypes[0]
    } catch (e) {
      throw new Error("Unable to get questionTypes")
    }
  }

  /**
   * Get one questionType by Id field
   * @param id questionType Id
   */
  public async getQuestionTypeById(id: any): Promise<any | QuestionType[]> {
    try {
      const conn = await connect()
      const questionTypes = await conn.query(
        querys.searchById(this.entitieName, id)
      )

      return questionTypes[0]
    } catch (e) {
      throw new Error("Unable to get questionTypes")
    }
  }

  /**
   * Add one questionType
   * @param questionType Insert data
   */
  public async postQuestionType(questionType: QuestionType): Promise<any> {
    try {
      const conn = await connect()
      const newQuestionType = await conn.query(
        `INSERT INTO ${this.entitieName} SET ?`,
        questionType
      )

      return newQuestionType
    } catch (e) {
      throw e
    }
  }

  /**
   * Method for update one questionType
   * @param questionType Data for update questionTypes
   * @returns information of the updated questionType
   */
  public async updateQuestionTypeById(
    questionType: QuestionType
  ): Promise<any> {
    try {
      const { idQuestionType } = questionType
      const conn = await connect()
      const updatedQuestionType = await conn.query(
        `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
        [questionType, idQuestionType]
      )

      return updatedQuestionType
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete one questionType by his Id
   * @param id Id of the questionType to delete
   * @returns
   */
  public async deleteQuestionTypeById(id: any): Promise<any> {
    try {
      const conn = await connect()
      const deletedQuestionType = await conn.query(
        querys.deleteById(this.entitieName, id)
      )

      return deletedQuestionType
    } catch (e) {
      throw e
    }
  }
}

export default QuestionTypeRepository
