'use client'

// vendors
import { NavbarItem, Button, Tooltip } from '@nextui-org/react'
import NextLink from 'next/link'
import {
  CalculatorIcon,
  FileSpreadsheetIcon,
  ShoppingCartIcon,
} from 'lucide-react'
import { useState } from 'react'
// globals
import { hasAnyPermissions } from '@/functions/has-any-permissions'
import { Permission } from '@/enums/permission'
import PageUrlEnum from '@/enums/page-url'
// siblings
import { FeedbackFormModal } from '../feedback-form-modal'
import SettingsDropdownButtonInNavbar from './components/settings-dropdown-button'

/**
 * Navbar items for authenticated users
 */
export function AuthNavbarItems() {
  const [isFeedbackFormModalOpen, setIsFeedbackFormModalOpen] = useState(false)

  return (
    <>
      <NavbarItem className="flex gap-2">
        {hasAnyPermissions([Permission.READ_SALE]) && (
          <Tooltip content="Kasir" color="primary" showArrow size="lg">
            <Button
              isIconOnly
              href={PageUrlEnum.SALE_LIST}
              as={NextLink}
              variant="light"
              color="primary">
              <CalculatorIcon />
            </Button>
          </Tooltip>
        )}

        {hasAnyPermissions([Permission.READ_PURCHASE]) && (
          <Tooltip content="Pengadaan" color="primary" showArrow size="lg">
            <Button
              isIconOnly
              href={PageUrlEnum.PURCHASE_LIST}
              as={NextLink}
              variant="light"
              color="primary">
              <ShoppingCartIcon />
            </Button>
          </Tooltip>
        )}

        <SettingsDropdownButtonInNavbar
          onFeedbackFormModalOpen={() => {
            setIsFeedbackFormModalOpen(true)
          }}
        />
      </NavbarItem>

      <NavbarItem>
        <Button
          href={PageUrlEnum.REPORT_LIST}
          as={NextLink}
          startContent={<FileSpreadsheetIcon size="1rem" />}
          variant="flat"
          color="primary">
          Laporan
        </Button>
      </NavbarItem>

      <FeedbackFormModal
        isOpen={isFeedbackFormModalOpen}
        onClose={() => {
          setIsFeedbackFormModalOpen(false)
        }}
      />
    </>
  )
}
