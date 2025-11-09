'use client'

import { Card, CardBody, CardHeader } from '@heroui/card'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import {
  Database,
  Download,
  RefreshCw,
  Trash2,
  type LucideIcon,
} from 'lucide-react'
import PageUrlEnum from '@/enums/page-url'
import { Permission } from '@/enums/permission'
import useAuth from '@/hooks/use-auth'

interface SettingsMenuItemProps {
  href: string
  icon: LucideIcon
  title: string
  description: string
  color?: 'primary' | 'danger' | 'warning' | 'success' | 'secondary' | 'default'
}

function SettingsMenuItem({
  href,
  icon: Icon,
  title,
  description,
  color = 'primary',
}: SettingsMenuItemProps) {
  return (
    <Button
      as={Link}
      href={href}
      variant="flat"
      color={color}
      startContent={<Icon size={18} />}
      className="justify-start h-[unset] py-2">
      <div className="flex flex-col items-start">
        <span className="font-semibold">{title}</span>
        <span className="text-xs text-default-500">{description}</span>
      </div>
    </Button>
  )
}

export default function Page() {
  const { hasAnyPermissions } = useAuth()

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="mb-2 text-3xl font-bold">Pengaturan Aplikasi</h1>
        <p className="text-default-500">
          Kelola pengaturan dan data aplikasi Anda
        </p>
      </div>

      <Card
        className={
          hasAnyPermissions([
            Permission.EXPORT_DB,
            Permission.WIPE_DB,
            Permission.SYNC_DB,
          ])
            ? ''
            : 'hidden'
        }>
        <CardHeader className="flex-col items-start gap-2 px-6 pb-0 pt-6">
          <div className="flex items-center gap-2">
            <Database className="text-primary" size={24} />
            <h2 className="text-xl font-bold">Manajemen Basis Data</h2>
          </div>
          <p className="text-sm text-default-500">
            Kelola data lokal aplikasi Anda
          </p>
        </CardHeader>

        <CardBody className="gap-3 px-6 py-6">
          <SettingsMenuItem
            href={PageUrlEnum.EXPORT_DATABASE}
            icon={Download}
            title="Ekspor Basis Data"
            description="Cadangkan data aplikasi Anda"
          />

          <SettingsMenuItem
            href={PageUrlEnum.SYNC_DATABASE}
            icon={RefreshCw}
            title="Sinkronisasi Basis Data"
            description="Sinkronkan data dengan perangkat lain"
          />

          <SettingsMenuItem
            href={PageUrlEnum.WIPE_DATABASE}
            icon={Trash2}
            title="Hapus Basis Data"
            description="Hapus semua data aplikasi secara permanen"
            color="danger"
          />
        </CardBody>
      </Card>
    </div>
  )
}
