import Joi from "joi"

/**
 * Validation for add a Thing
 */
const companyValidation = Joi.object({
  idCompany: Joi.number(),
  companyName: Joi.string(),
})

export default { companyValidation }
