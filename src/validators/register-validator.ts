import { checkSchema } from 'express-validator'

// export default [body('email').notEmpty().withMessage("Email is required")]

export default checkSchema({
    email: {
        errorMessage: 'Email is required',
        notEmpty: true,
        trim: true,
    },
    //   password: {
    //     isLength: {
    //       options: { min: 8 },
    //       errorMessage: 'Password should be at least 8 chars',
    //     },
    //   },
})
