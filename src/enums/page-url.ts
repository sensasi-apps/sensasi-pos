enum PageUrlEnum {
  HOME = '/',
  DASHBOARD = '/dashboard',
  APP_SETTING_PAGE_URL = '/settings',

  // REPORT
  REPORT_LIST = '/reports',
  REPORT_SALE_PER_TX = '/reports/sale-per-tx',
  REPORT_SALE_PER_PRODUCT = '/reports/sale-per-product',
  REPORT_SALE_PER_PRODUCT_CATEGORY = '/reports/sale-per-product-category',
  REPORT_STOCK_IN_OUT_PER_PRODUCT = '/reports/stock-in-out-per-product',

  // ############# PARENT DATA #############
  // PRODUCT
  PRODUCT_LIST = '/data/products',
  PRODUCT_CREATE = '/data/products/create',
  PRODUCT_EDIT = '/data/products/:uuid',
  PRODUCT_DELETE = '/data/products/:uuid/delete',

  // USER
  USER_LIST = '/data/users',
  USER_CREATE = '/data/users/create',
  USER_EDIT = '/data/users/:uuid',
  USER_DELETE = '/data/users/:uuid/delete',

  // WARAHOUSE
  WAREHOUSE_LIST = '/data/warehouses',
  WAREHOUSE_CREATE = '/data/warehouses/create',
  WAREHOUSE_EDIT = '/data/warehouses/:uuid',
  WAREHOUSE_DELETE = '/data/warehouses/:uuid/delete',

  // ############# TRANSACTIONAL DATA #############
  // PURCHASE
  PURCHASE_LIST = '/purchases',
  PURCHASE_CREATE = '/purchases/create',
  PURCHASE_EDIT = '/purchases/:uuid',
  PURCHASE_DELETE = '/purchases/:uuid/delete',

  // SALE
  SALE_LIST = '/sales',
  SALE_CREATE = '/sales/create',
  SALE_EDIT = '/sales/:uuid',
  SALE_DELETE = '/sales/:uuid/delete',

  // DATABASE
  DATABASE_ACTION_LIST = '/database',
  EXPORT_DATABASE = '/database/export',
  SYNC_DATABASE = '/database/sync',
  WIPE_DATABASE = '/database/wipe',
}

export default PageUrlEnum
