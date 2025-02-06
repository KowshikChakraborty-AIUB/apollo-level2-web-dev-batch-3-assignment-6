import { z } from 'zod';

const changeUserPasswordValidationSchema = z.object({
    body: z.object({
        oldPassword: z.string().min(1, 'Old password is required.'),
        newPassword: z.string().min(1, 'New password is required.'),
    }),
});

export default changeUserPasswordValidationSchema;