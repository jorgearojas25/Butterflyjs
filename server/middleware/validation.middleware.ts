import response from "../utils/response"
import { Request, Response, NextFunction, RequestHandler } from "express"
import Joi from "joi"

function validationMiddleware(schema: Joi.Schema): RequestHandler {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    }

    try {
      const value = await schema.validateAsync(req.body, validationOptions)
      req.body = value
      next()
    } catch (e: any) {
      const errors: string[] = []
      e.details.forEach((error: Joi.ValidationError) => {
        errors.push(error.message)
      })
      response.error(res, 400, errors, errors)
    }
  }
}

export default validationMiddleware
