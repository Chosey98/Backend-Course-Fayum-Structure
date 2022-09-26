import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = Joi.extend(joiPasswordExtendCore);
const registerSchema = Joi.object({
	email: Joi.string().email().required().messages({
		'string.email': 'Email must be a valid email address',
		'string.empty': "Email can't be empty",
		'any.required': 'Email is required',
	}),
	name: Joi.string().min(8).max(32).required().messages({
		'string.min': 'Name must be at least 8 characters',
		'string.max': "Name can't be longer than 32 characters",
		'string.empty': "Name can't be empty",
		'any.required': 'Name is required',
	}),
	password: joiPassword
		.string()
		.min(8)
		.minOfLowercase(1)
		.minOfUppercase(1)
		.minOfNumeric(1)
		.required()
		.messages({
			'string.min': 'Password must be at least 8 characters',
			'password.minOfLowercase':
				'Password must contain at least 1 lowercase character',
			'password.minOfUppercase':
				'Password must contain at least 1 uppercase character',
			'password.minOfNumeric':
				'Password must contain at least 1 numeric character',
			'string.empty': "Password can't be empty",
			'any.required': 'Password is required',
		}),
	age: Joi.number().required().messages({
		'number.base': 'Age must be a number',
		'any.required': 'Age is required',
	}),
});

export default registerSchema;
