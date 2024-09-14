import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react'
import {
  DatabaseBackupIcon,
  PackageIcon,
  PowerCircleIcon,
  SettingsIcon,
  UserCogIcon,
} from 'lucide-react'
import ThemeSwitcher from '@/components/theme-switcher'
import PageUrlEnum from '@/enums/page-url'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function SettingsDropdownButtonInNavbar() {
  const { theme, setTheme } = useTheme()

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="light" isIconOnly>
          <SettingsIcon />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Pengaturan">
        <DropdownItem
          startContent={<ThemeSwitcher />}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Mode Gelap
        </DropdownItem>

        <DropdownItem
          as={Link}
          href={PageUrlEnum.APP_SETTING_PAGE_URL}
          startContent={<SettingsIcon className="mr-1" />}>
          Pengaturan
        </DropdownItem>

        <DropdownSection title="Master Data" showDivider>
          <DropdownItem
            as={Link}
            href={PageUrlEnum.PRODUCT_LIST}
            startContent={<PackageIcon className="mr-1" />}>
            Produk
          </DropdownItem>

          <DropdownItem
            as={Link}
            href={PageUrlEnum.USER_LIST}
            startContent={<UserCogIcon className="mr-1" />}>
            Pengguna
          </DropdownItem>

          <DropdownItem
            as={Link}
            href={PageUrlEnum.BACKUPS}
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
