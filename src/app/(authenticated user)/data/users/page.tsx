'use client'

import PageUrlEnum from '@/enums/page-url'
import Link from 'next/link'
import {
  Button,
  Chip,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'
import { useHook } from './hook'
import { EditIcon } from 'lucide-react'

export default function Page() {
  const { users, setUserActiveStatus } = useHook()

  return (
    <div>
      <Button href={PageUrlEnum.USER_CREATE} as={Link} color="primary">
        Tambah data pengguna
      </Button>

      <Table aria-label="users-table">
        <TableHeader>
          <TableColumn>Nama</TableColumn>
          <TableColumn>Surel</TableColumn>
          <TableColumn>Peran</TableColumn>
          <TableColumn>Status (aktif/tidak)</TableColumn>
          <TableColumn>Sunting</TableColumn>
        </TableHeader>

        <TableBody>
          {(users ?? []).map(user => (
            <TableRow
              key={user.uuid}
              className={
                user.inactivated_at ? 'text-gray-600 line-through' : undefined
              }>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {
                  /**
                   * @todo Terjemahkan peran pengguna ke dalam bahasa Indonesia
                   */
                  user.roles.map(role => <Chip key={role}>{role}</Chip>) ??
                    'Tidak ada peran'
                }
              </TableCell>
              <TableCell>
                <Switch
                  isSelected={!user.inactivated_at}
                  aria-label="Status"
                  onClick={() => {
                    setUserActiveStatus(user.uuid, !!user.inactivated_at)
                      .then(
                        () =>
                          (user.inactivated_at = !user.inactivated_at
                            ? new Date().toISOString()
                            : null),
                      )
                      .catch(err => {
                        throw err
                      })
                  }}
                />
              </TableCell>
              <TableCell className="flex gap-3">
                <Button
                  isIconOnly
                  href={PageUrlEnum.USER_EDIT.replace(':uuid', user.uuid)}
                  as={Link}>
                  <EditIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
