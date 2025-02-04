import { z } from 'zod';

const profileUpdateValidationSchema = z.object({
    name: z.string()
        .min(1, 'Name is required')
        .max(100, 'Name should not be longer than 100 characters'),

    phone: z.string()
        .min(11, 'Phone number should be at least 11 characters')
        .max(15, 'Phone number should be no more than 15 characters')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits'),

    profileImg: z.string().optional(),

    address: z.string()
        .min(1, 'Address is required')
        .max(255, 'Address should not be longer than 255 characters'),

});

export default profileUpdateValidationSchema;