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
// icons
import {
  ChevronDown,
  MessageSquareTextIcon,
  PackageIcon,
  PowerCircleIcon,
  SettingsIcon,
  UserCogIcon,
  MenuIcon,
  CalculatorIcon,
  ShoppingCartIcon,
  FileSpreadsheetIcon,
} from 'lucide-react'
// globals
import { Permission } from '@/enums/permission'
import ThemeSwitcher from '@/components/theme-switcher'
import PageUrlEnum from '@/enums/page-url'
import useAuth from '@/hooks/use-auth'
import { Link } from '@heroui/link'

export function SettingDropdownButton({
  onFeedbackFormModalOpen,
}: {
  onFeedbackFormModalOpen: () => void
}) {
  const { hasAnyPermissions } = useAuth()
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
            className={
              hasAnyPermissions([Permission.READ_SALE]) ? '' : 'hidden'
            }
            as={Link}
            href={PageUrlEnum.SALE_LIST}
            key="sale"
            startContent={<CalculatorIcon className="mr-1" />}>
            Kasir
          </DropdownItem>

          <DropdownItem
            className={
              hasAnyPermissions([Permission.READ_PURCHASE]) ? '' : 'hidden'
            }
            as={Link}
            href={PageUrlEnum.PURCHASE_LIST}
            key="purchase"
            startContent={<ShoppingCartIcon className="mr-1" />}>
            Pengadaan
          </DropdownItem>

          <DropdownItem
            className={
              hasAnyPermissions([Permission.READ_DASHBOARD]) ? '' : 'hidden'
            }
            as={Link}
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
          className="text-white"
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
            hasAnyPermissions([Permission.READ_PRODUCT, Permission.READ_USER])
              ? ''
              : 'hidden'
          }>
          <DropdownItem
            className={`${hasAnyPermissions([Permission.READ_PRODUCT]) ? '' : 'hidden'} text-white`}
            as={Link}
            href={PageUrlEnum.PRODUCT_LIST}
            key="product"
            startContent={<PackageIcon className="mr-1" />}>
            Produk
          </DropdownItem>

          <DropdownItem
            className={`${hasAnyPermissions([Permission.READ_USER]) ? '' : 'hidden'} text-white`}
            as={Link}
            href={PageUrlEnum.USER_LIST}
            key="user"
            startContent={<UserCogIcon className="mr-1" />}>
            Pengguna
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          className="text-danger"
          color="danger"
          key="logout"
          as={Link}
          href={PageUrlEnum.LOGOUT}
          startContent={<PowerCircleIcon className="mr-1" />}>
          Log Keluar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
