'use client'

// vendors
import { Button } from '@nextui-org/button'
import { NavbarItem } from '@nextui-org/navbar'
import { Tooltip } from '@nextui-org/tooltip'
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
import { SettingDropdownButton } from './components/settings-dropdown-button'

/**
 * Navbar items for authenticated users
 */
export function AuthNavbarItems() {
  const [isFeedbackFormModalOpen, setIsFeedbackFormModalOpen] = useState(false)

  return (
    <>
      <NavbarItem className="flex gap-2">
        <Tooltip content="Kasir" color="primary" showArrow size="lg">
          <Button
            className={
              hasAnyPermissions([Permission.READ_SALE])
                ? 'max-sm:hidden'
                : 'hidden'
            }
            isIconOnly
            href={PageUrlEnum.SALE_LIST}
            as={NextLink}
            variant="light"
            color="primary">
            <CalculatorIcon />
          </Button>
        </Tooltip>

        <Tooltip content="Pengadaan" color="primary" showArrow size="lg">
          <Button
            className={
              hasAnyPermissions([Permission.READ_PURCHASE])
                ? 'max-sm:hidden'
                : 'hidden'
            }
            isIconOnly
            href={PageUrlEnum.PURCHASE_LIST}
            as={NextLink}
            variant="light"
            color="primary">
            <ShoppingCartIcon />
          </Button>
        </Tooltip>

        <SettingDropdownButton
          onFeedbackFormModalOpen={() => {
            setIsFeedbackFormModalOpen(true)
          }}
        />
      </NavbarItem>

      <NavbarItem
        className={
          hasAnyPermissions([Permission.READ_DASHBOARD])
            ? 'max-sm:hidden'
            : 'hidden'
        }>
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
