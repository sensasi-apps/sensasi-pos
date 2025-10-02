// vendors
import { Button } from '@heroui/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@heroui/dropdown'
import { useTheme } from 'next-themes'
import Link from 'next/link'
// icons
import {
  ChevronDown,
  DatabaseBackupIcon,
  MessageSquareTextIcon,
  PackageIcon,
  PowerCircleIcon,
  SettingsIcon,
  UserCogIcon,
  WarehouseIcon,
  MenuIcon,
  CalculatorIcon,
  ShoppingCartIcon,
  FileSpreadsheetIcon,
} from 'lucide-react'
// globals
import { hasAnyPermissions } from '@/functions/has-any-permissions'
import { Permission } from '@/enums/permission'
import ThemeSwitcher from '@/components/theme-switcher'
import PageUrlEnum from '@/enums/page-url'

export function SettingDropdownButton({
  onFeedbackFormModalOpen,
}: {
  onFeedbackFormModalOpen: () => void
}) {
  const { theme, setTheme } = useTheme()

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color="primary"
          variant="light"
          className="w-fit min-w-min gap-0 px-2"
          endContent={<ChevronDown size={16} className="max-sm:hidden" />}>
          <SettingsIcon className="max-sm:hidden" />
          <MenuIcon className="sm:hidden" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Menu">
        <DropdownSection title="Navigasi" showDivider className="sm:hidden">
          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_SALE]) ? '' : 'hidden'
            }
            href={PageUrlEnum.SALE_LIST}
            key="sale"
            startContent={<CalculatorIcon className="mr-1" />}>
            Kasir
          </DropdownItem>

          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_PURCHASE]) ? '' : 'hidden'
            }
            href={PageUrlEnum.PURCHASE_LIST}
            key="purchase"
            startContent={<ShoppingCartIcon className="mr-1" />}>
            Pengadaan
          </DropdownItem>

          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_DASHBOARD]) ? '' : 'hidden'
            }
            href={PageUrlEnum.REPORT_LIST}
            key="report"
            startContent={<FileSpreadsheetIcon className="mr-1" />}>
            Laporan
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          key="theme"
          startContent={<ThemeSwitcher />}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}>
          Mode Gelap
        </DropdownItem>

        <DropdownItem
          as={Link}
          href={PageUrlEnum.APP_SETTING_PAGE_URL}
          key="setting"
          startContent={<SettingsIcon className="mr-1" />}>
          Pengaturan
        </DropdownItem>

        <DropdownItem
          className="text-secondary"
          color="secondary"
          key="feedback"
          onClick={onFeedbackFormModalOpen}
          startContent={<MessageSquareTextIcon className="mr-1" />}>
          Saran Perbaikan
        </DropdownItem>

        <DropdownSection
          title="Data Induk"
          showDivider
          className={
            hasAnyPermissions([
              Permission.READ_PRODUCT,
              Permission.READ_WAREHOUSE,
              Permission.READ_USER,
              Permission.EXPORT_DB,
              Permission.WIPE_DB,
              Permission.SYNC_DB,
            ])
              ? ''
              : 'hidden'
          }>
          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_PRODUCT]) ? '' : 'hidden'
            }
            href={PageUrlEnum.PRODUCT_LIST}
            key="product"
            startContent={<PackageIcon className="mr-1" />}>
            Produk
          </DropdownItem>

          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_WAREHOUSE]) ? '' : 'hidden'
            }
            href={PageUrlEnum.WAREHOUSE_LIST}
            key="warehouse"
            startContent={<WarehouseIcon className="mr-1" />}>
            Gudang
          </DropdownItem>

          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_USER]) ? '' : 'hidden'
            }
            href={PageUrlEnum.USER_LIST}
            key="user"
            startContent={<UserCogIcon className="mr-1" />}>
            Pengguna
          </DropdownItem>

          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([
                Permission.EXPORT_DB,
                Permission.WIPE_DB,
                Permission.SYNC_DB,
              ])
                ? ''
                : 'hidden'
            }
            href={PageUrlEnum.DATABASE_ACTION_LIST}
            key="backup"
            startContent={<DatabaseBackupIcon className="mr-1" />}>
            Pencadangan
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          className="text-danger"
          color="danger"
          key="logout"
          startContent={<PowerCircleIcon className="mr-1" />}>
          Log Keluar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
