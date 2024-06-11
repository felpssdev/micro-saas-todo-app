import * as z from 'zod'

export const themeSchema = z.object({
  theme: z.string(),
})
