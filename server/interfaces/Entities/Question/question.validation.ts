import Joi from "joi"

/**
 * Validation for add a Thing
 */
const thingValidation = Joi.object({
  idQuestion: Joi.number(),
  idForm: Joi.number(),
  idQuestionType: Joi.number(),
  question: Joi.string(),
  message: Joi.string(),
  resource: Joi.string(),
})

export default { thingValidation }
