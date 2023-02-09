import Joi from "joi"

/**
 * Validation for add a Thing
 */
const answerValidation = Joi.object({
  idAnswer: Joi.number(),
  score: Joi.number(),
  comment: Joi.string(),
  date: Joi.date().default(new Date()),
  userId: Joi.string(),

  idQuestion: Joi.number(),
})

export default { answerValidation }
