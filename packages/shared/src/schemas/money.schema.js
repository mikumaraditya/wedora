import { z } from 'zod';

export const paiseSchema = z
  .number({
    required_error: 'Amount in paise is required.',
    invalid_type_error: 'Amount must be an integer.',
  })
  .int('Amount must be a whole integer in paise.')
  .positive('Amount must be greater than zero.');
