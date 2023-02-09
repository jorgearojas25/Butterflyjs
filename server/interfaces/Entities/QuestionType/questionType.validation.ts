import Joi from "joi"

/**
 * Validation for add a Thing
 */
const questionTypeValidation = Joi.object({
  idQuestionType: Joi.number(),
  questionType: Joi.string(),
})

export default { questionTypeValidation }
