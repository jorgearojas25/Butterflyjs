import Joi from "joi"

/**
 * Validation for add a Thing
 */
const thingValidation = Joi.object({
  idQuestionType: Joi.number(),
  questionType: Joi.string(),
})

export default { thingValidation }
