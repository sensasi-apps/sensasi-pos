export enum Permission {
  READ_REPORT = 'read:report',
  READ_DASHBOARD = 'read:dashboard',

  // PRODUCT
  CREATE_PRODUCT = 'create:product',
  READ_PRODUCT = 'read:product',
  UPDATE_PRODUCT = 'update:product',
  DELETE_PRODUCT = 'delete:product',

  // USER
  CREATE_USER = 'create:user',
  READ_USER = 'read:user',
  UPDATE_USER = 'update:user',
  DELETE_USER = 'delete:user',

  // WAREHOUSE
  CREATE_WAREHOUSE = 'create:warehouse',
  READ_WAREHOUSE = 'read:warehouse',
  UPDATE_WAREHOUSE = 'update:warehouse',
  DELETE_WAREHOUSE = 'delete:warehouse',

  // PURCHASE
  CREATE_PURCHASE = 'create:purchase',
  READ_PURCHASE = 'read:purchase',
  UPDATE_PURCHASE = 'update:purchase',
  DELETE_PURCHASE = 'delete:purchase',

  // SALE
  CREATE_SALE = 'create:sale',
  READ_SALE = 'read:sale',
  UPDATE_SALE = 'update:sale',
  DELETE_SALE = 'delete:sale',

  // DB
  EXPORT_DB = 'export:db',
  SYNC_DB = 'sync:db',
  WIPE_DB = 'wipe:db',
}
