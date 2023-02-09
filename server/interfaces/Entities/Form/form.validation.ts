import Joi from "joi"

/**
 * Validation for add a Thing
 */
const thingValidation = Joi.object({
  idForm: Joi.number(),
  formName: Joi.string(),
  idCompany: Joi.number(),
})

export default { thingValidation }
