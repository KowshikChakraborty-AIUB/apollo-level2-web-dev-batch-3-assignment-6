import { z } from 'zod';

const loginValidationSchema = z.object({
    email: z.string()
        .email('Please enter a valid email address.')
        .min(1, 'Email is required.'),

    password: z.string()
        .min(1, 'Password is required.'),
});

export default loginValidationSchema;