'use client'

import { Button } from '@heroui/button'
import { useLiveQuery } from 'dexie-react-hooks'
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'

import PageUrlEnum from '@/enums/page-url'

import db from '@/models/db'

import { Card, CardBody } from '@heroui/card'
import { useDisclosure } from '@heroui/modal'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@heroui/drawer'
import { ProductList } from './_component/list-product'
import { ProductForm } from './_component/product-form'
import { Link } from '@heroui/link'

export default function AddProductsPage() {
  const products = useLiveQuery(() => db.products.toArray(), [])
  const nProducts = products?.length ?? 0

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-3xl">
        <Card>
          <CardBody>
            <p className="text-gray-500">
              Tambahkan beberapa produk yang akan Anda jual. Anda dapat melewati
              langkah ini dan menambahkannya nanti.
            </p>

            <ProductForm onProductAdded={() => {}} />

            <div className="mt-8 flex justify-between">
              <Button
                variant="light"
                startContent={<MoveLeftIcon />}
                as={Link}
                href={PageUrlEnum.ONBOARDING_STEP_1}
                color="primary">
                Kembali
              </Button>

              <Button
                color="primary"
                variant="solid"
                endContent={<MoveRightIcon />}
                as={Link}
                href={PageUrlEnum.ONBOARDING_STEP_FINISH}
                isDisabled={nProducts === 0}>
                Selesai
              </Button>
            </div>
            <div className="mt-4 flex flex-col justify-between gap-3">
              <Button onPress={onOpen}>Lihat Produk</Button>
              <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent>
                  {onClose => (
                    <>
                      <DrawerHeader className="flex flex-col gap-1">
                        Produk yang sudah ditambahkan:
                      </DrawerHeader>
                      <DrawerBody>
                        <ProductList />
                      </DrawerBody>
                      <DrawerFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}>
                          Close
                        </Button>
                      </DrawerFooter>
                    </>
                  )}
                </DrawerContent>
              </Drawer>

              <Button
                variant="ghost"
                as={Link}
                href={PageUrlEnum.ONBOARDING_STEP_FINISH}>
                Lewati untuk sekarang
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
