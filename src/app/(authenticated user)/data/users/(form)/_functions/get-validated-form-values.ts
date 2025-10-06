import type { User } from '@/models/table-types/user'
import type { FormValues } from '../_types/form-values'
import { getHash } from '@/functions/get-hash'

export function getValidatedFormValues(formValues: FormValues): User {
  if (
    !formValues.uuid ||
    !formValues.pin ||
    !formValues.name ||
    !formValues.email ||
    !formValues.roles?.length ||
    !formValues.permissions?.length ||
    !formValues.created_at ||
    !formValues.updated_at
  ) {
    throw new Error('Data pengguna tidak lengkap')
  }

  return {
    uuid: formValues.uuid,
    name: formValues.name,
    email: formValues.email,

    pin__hashed: getHash(formValues.pin),

    roles: formValues.roles,
    permissions: formValues.permissions,

    created_at: formValues.created_at,
    updated_at: new Date().toISOString(),
  }
}
