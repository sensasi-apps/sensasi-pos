'use client'

import mergeClass from '@/functions/merge-class'
import {
  Boxes,
  Check,
  CircleCheck,
  UserPlus,
  UsersRound,
  Warehouse,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

interface Step {
  name: string
  stepimg: ReactElement
  stepimgcurrent: ReactElement
  url: string
}

const STEPS: Step[] = [
  {
    name: '1. Tambah pengguna admin',
    stepimg: <UserPlus />,
    stepimgcurrent: <UserPlus color="#99C7FB" />,
    url: '/steps/1-add-admin-user',
  },
  {
    name: '2. Tambah pengguna lain',
    stepimg: <UsersRound />,
    stepimgcurrent: <UsersRound color="#99C7FB" />,
    url: '/steps/2-add-other-users',
  },
  {
    name: '3. Tambah gudang',
    stepimg: <Warehouse />,
    stepimgcurrent: <Warehouse color="#99C7FB" />,
    url: '/steps/3-add-warehouses',
  },
  {
    name: '4. Tambah produk dan stok',
    stepimg: <Boxes />,
    stepimgcurrent: <Boxes color="#99C7FB" />,
    url: '/steps/4-add-products-and-stock',
  },
  {
    name: '5. Selesai',
    stepimg: <CircleCheck />,
    stepimgcurrent: <CircleCheck color="#99C7FB" />,
    url: '/steps/finish',
  },
]

const Steps = () => {
  const pathname = usePathname()

  return (
    <ol className="max-w-5xl rounded-md border-2 border-zinc-500 bg-transparent p-5 lg:flex">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url)
        const isCompleted = STEPS.slice(i + 1).some(step =>
          pathname.endsWith(step.url),
        )

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={mergeClass(
                  'absolute top-0 left-0 h-full w-1 bg-transparent bg-zinc-500 lg:top-auto lg:bottom-0 lg:h-1 lg:w-full',
                  {
                    'bg-[#99C7FB]': isCurrent,
                    'bg-primary': isCompleted,
                  },
                )}
                aria-hidden="true"
              />

              <span
                className={mergeClass(
                  i !== 0 ? 'lg:pl-9' : '',
                  'flex items-start px-6 py-4',
                )}>
                <span>
                  {isCompleted ? (
                    <Check color="#016BE4" />
                  ) : isCurrent ? (
                    step.stepimgcurrent
                  ) : (
                    step.stepimg
                  )}
                </span>

                <span className="ml-4 flex h-full min-w-0 flex-col justify-center">
                  <span
                    className={mergeClass(
                      'text-sm font-semibold text-zinc-500',
                      {
                        'text-primary': isCompleted,
                        'text-[#99C7FB]': isCurrent,
                      },
                    )}>
                    {step.name}
                  </span>
                </span>
              </span>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Steps
