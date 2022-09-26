import Joi from 'joi';
const loginSchema = Joi.object({
	email: Joi.string().email().required().messages({
		'string.email': 'Email must be a valid email address',
		'string.empty': "Email can't be empty",
		'any.required': 'Email is required',
	}),
	password: Joi.string().required().messages({
		'string.empty': "Password can't be empty",
		'any.required': 'Password is required',
	}),
});

export default loginSchema;
