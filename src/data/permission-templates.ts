import { Permission } from '@/enums/permission'
import { User } from '@/models/table-types/user'

export const PERMISSION_TEMPLATES: {
  [key in User['roles'][0]]: Permission[]
} = {
  owner: [Permission.READ_REPORT, Permission.READ_DASHBOARD],
  manager: [
    Permission.READ_REPORT,
    Permission.READ_DASHBOARD,
    Permission.CREATE_PRODUCT,
    Permission.READ_PRODUCT,
    Permission.UPDATE_PRODUCT,
    Permission.DELETE_PRODUCT,
    Permission.CREATE_USER,
    Permission.READ_USER,
    Permission.UPDATE_USER,
    Permission.DELETE_USER,
    Permission.CREATE_WAREHOUSE,
    Permission.READ_WAREHOUSE,
    Permission.UPDATE_WAREHOUSE,
    Permission.DELETE_WAREHOUSE,
    Permission.CREATE_PURCHASE,
    Permission.READ_PURCHASE,
    Permission.UPDATE_PURCHASE,
    Permission.DELETE_PURCHASE,
    Permission.CREATE_SALE,
    Permission.READ_SALE,
    Permission.UPDATE_SALE,
    Permission.DELETE_SALE,
  ],
  cashier: [Permission.READ_SALE, Permission.CREATE_SALE],
  stocker: [Permission.READ_PURCHASE, Permission.CREATE_PURCHASE],
}
