import Joi from "joi"

/**
 * Validation for add a Thing
 */
const questionValidation = Joi.object({
  idQuestionType: Joi.number(),
  questionType: Joi.string(),
})

export default { questionValidation }
