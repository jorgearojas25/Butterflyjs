import Joi from "joi"

/**
 * Validation for add a Thing
 */
const thingValidation = Joi.object({
  idCompany: Joi.number(),
  companyName: Joi.string(),
})

export default { thingValidation }
