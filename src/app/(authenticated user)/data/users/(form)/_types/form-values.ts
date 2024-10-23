import type { User } from '@/models/table-types/user'

export type FormValues = Partial<
  Omit<User, 'pin__hashed'> & {
    pin: string
    pin_confirmation: string
  }
>
