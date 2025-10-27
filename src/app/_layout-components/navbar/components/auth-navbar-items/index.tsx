'use client'

// vendors
import { Button } from '@heroui/button'
import { NavbarItem } from '@heroui/navbar'
import { Tooltip } from '@heroui/tooltip'
import {
  CalculatorIcon,
  FileSpreadsheetIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { useState } from 'react'
// globals
import { Permission } from '@/enums/permission'
import PageUrlEnum from '@/enums/page-url'
// siblings
import { FeedbackFormModal } from '../feedback-form-modal'
import { SettingDropdownButton } from './components/settings-dropdown-button'
import useAuth from '@/hooks/use-auth'
import { Link } from '@heroui/link'

/**
 * Navbar items for authenticated users
 */
export function AuthNavbarItems() {
  const { hasAnyPermissions } = useAuth()
  const [isFeedbackFormModalOpen, setIsFeedbackFormModalOpen] = useState(false)

  return (
    <>
      <NavbarItem className="flex gap-2">
        <Tooltip content="Kasir" color="primary" showArrow size="lg">
          {hasAnyPermissions([Permission.READ_SALE]) && (
            <Button
              className="max-sm:hidden"
              isIconOnly
              as={Link}
              href={PageUrlEnum.SALE_LIST}
              variant="light"
              color="primary">
              <CalculatorIcon />
            </Button>
          )}
        </Tooltip>

        <Tooltip content="Pengadaan" color="primary" showArrow size="lg">
          {hasAnyPermissions([Permission.READ_PURCHASE]) && (
            <Button
              isIconOnly
              as={Link}
              href={PageUrlEnum.PURCHASE_LIST}
              variant="light"
              color="primary">
              <ShoppingCartIcon />
            </Button>
          )}
        </Tooltip>

        <SettingDropdownButton
          onFeedbackFormModalOpen={() => {
            setIsFeedbackFormModalOpen(true)
          }}
        />
      </NavbarItem>

      {hasAnyPermissions([Permission.READ_DASHBOARD]) && (
        <NavbarItem className="max-sm:hidden">
          <Button
            as={Link}
            href={PageUrlEnum.REPORT_LIST}
            startContent={<FileSpreadsheetIcon size="1rem" />}
            variant="flat"
            color="primary">
            Laporan
          </Button>
        </NavbarItem>
      )}

      <FeedbackFormModal
        isOpen={isFeedbackFormModalOpen}
        onClose={() => {
          setIsFeedbackFormModalOpen(false)
        }}
      />
    </>
  )
}
