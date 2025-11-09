import { Permission } from '@/enums/permission'
import { Role } from '@/enums/role'

export const PERMISSION_TEMPLATES: {
  [Role.OWNER]: Permission[]
  [Role.MANAGER]: Permission[]
  [Role.CASHIER]: Permission[]
  [Role.STOCKER]: Permission[]
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
    Permission.CREATE_PURCHASE,
    Permission.READ_PURCHASE,
    Permission.UPDATE_PURCHASE,
    Permission.DELETE_PURCHASE,
    Permission.CREATE_SALE,
    Permission.READ_SALE,
    Permission.UPDATE_SALE,
    Permission.DELETE_SALE,
    Permission.EXPORT_DB,
    Permission.SYNC_DB,
    Permission.WIPE_DB,
  ],
  cashier: [Permission.READ_SALE, Permission.CREATE_SALE],
  stocker: [Permission.READ_PURCHASE, Permission.CREATE_PURCHASE],
}
