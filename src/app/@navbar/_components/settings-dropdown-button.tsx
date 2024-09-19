// vendors
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react'
import {
  ChevronDown,
  DatabaseBackupIcon,
  PackageIcon,
  PowerCircleIcon,
  SettingsIcon,
  UserCogIcon,
  WarehouseIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

// globals
import { hasAnyPermissions } from '@/functions/has-any-permissions'
import { Permission } from '@/enums/permission'
import ThemeSwitcher from '@/components/theme-switcher'
import PageUrlEnum from '@/enums/page-url'

export default function SettingsDropdownButtonInNavbar() {
  const { theme, setTheme } = useTheme()

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          color="primary"
          variant="light"
          className="min-w-[50px] gap-0 px-0"
          endContent={<ChevronDown size={16} />}>
          <SettingsIcon />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Pengaturan">
        <DropdownItem
          startContent={<ThemeSwitcher />}
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}>
          Mode Gelap
        </DropdownItem>

        <DropdownItem
          as={Link}
          href={PageUrlEnum.APP_SETTING_PAGE_URL}
          startContent={<SettingsIcon className="mr-1" />}>
          Pengaturan
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
            startContent={<PackageIcon className="mr-1" />}>
            Produk
          </DropdownItem>

          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_WAREHOUSE]) ? '' : 'hidden'
            }
            href={PageUrlEnum.WAREHOUSE_LIST}
            startContent={<WarehouseIcon className="mr-1" />}>
            Gudang
          </DropdownItem>

          <DropdownItem
            as={Link}
            className={
              hasAnyPermissions([Permission.READ_USER]) ? '' : 'hidden'
            }
            href={PageUrlEnum.USER_LIST}
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
            startContent={<DatabaseBackupIcon className="mr-1" />}>
            Pencadangan
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          className="text-danger"
          color="danger"
          startContent={<PowerCircleIcon className="mr-1" />}>
          Log Keluar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
