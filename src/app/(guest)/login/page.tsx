'use client'

// vendors
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete'
import { Button } from '@heroui/button'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { FormEvent, useRef, useState } from 'react'
import { Input } from '@heroui/input'
import { useLiveQuery } from 'dexie-react-hooks'
import Link from 'next/link'
// icons
import { Eye, EyeOff, UserRound } from 'lucide-react'
//
import type { User } from '@/models/table-types/user'
import PageUrlEnum from '@/enums/page-url'
import mergeClass from '@/functions/merge-class'
import db from '@/models/db'
import { compare } from 'bcryptjs'
import { toast } from '@/functions/toast'
import useAuth from '@/hooks/use-auth'

export default function Page() {
  const users = useLiveQuery(() => db.users.toArray()) ?? []
  const [isVisible, setIsVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User>()
  const [isLoading, setIsLoading] = useState(false)
  const { setLoggedInUser } = useAuth()
  const formEl = useRef(null)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleAuthentication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formEl.current || !selectedUser) return

    setIsLoading(true)

    const formData = new FormData(formEl.current)
    const formValues = Object.fromEntries(formData)

    const isPasswordMatched = await compare(
      formValues.password as string,
      selectedUser.password__hashed ?? '',
    )

    const isPinMatched = await compare(
      formValues.password as string,
      selectedUser.pin__hashed ?? '',
    )

    setIsLoading(false)
    if (!isPasswordMatched && !isPinMatched) return toast('Pin salah', 'danger')

    toast('Berhasil masuk', 'success')
    setLoggedInUser(selectedUser)
  }

  return (
    <div className="container mt-8">
      <div className="flex justify-center">
        <Card className="max-w-md md:min-w-[400px]">
          <CardHeader>
            <span className="mx-auto block text-xl font-bold">Masuk</span>
          </CardHeader>
          <Divider />
          <CardBody>
            <form
              ref={formEl}
              className="space-y-4"
              onSubmit={handleAuthentication}>
              <Autocomplete
                label="Pilih Pengguna"
                name="username"
                autoComplete="off"
                onSelectionChange={key => {
                  setSelectedUser(users.find(user => user.uuid === key))
                }}
                isRequired
                isDisabled={isLoading}>
                {users.map(user => (
                  <AutocompleteItem
                    key={user.uuid}
                    startContent={
                      <UserRound size={24} className="text-primary-300" />
                    }>
                    {user.name}
                  </AutocompleteItem>
                ))}
              </Autocomplete>

              <Input
                label="PIN / Kata Sandi"
                name="password"
                autoComplete="current-password"
                isRequired
                isDisabled={isLoading}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility">
                    {isVisible ? (
                      <EyeOff className="text-default-400 pointer-events-none text-2xl" />
                    ) : (
                      <Eye className="text-default-400 pointer-events-none text-2xl" />
                    )}
                  </button>
                }
                type={isVisible ? 'text' : 'password'}
              />

              <Button
                color="primary"
                className="w-full"
                isDisabled={!selectedUser}
                isLoading={isLoading}
                type="submit">
                Masuk
              </Button>

              <Link
                href={`${PageUrlEnum.FORGOT_PASSWORD}?method=email`}
                className={mergeClass(
                  isLoading
                    ? 'text-default-400 pointer-events-none'
                    : 'pointer-events-auto',
                  'my-4 block text-center text-sm',
                )}>
                Lupa Kata Sandi?
              </Link>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
