// types
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type { LucideProps } from 'lucide-react'
// vendors
import { Button, ButtonProps, Tooltip } from '@nextui-org/react'

export function IconButtonInputContent({
  text,
  icon: IconComponent,
  onClick,
}: {
  text: string
  children?: never
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  onClick?: ButtonProps['onClick']
}) {
  return (
    <Tooltip content={text} size="sm" showArrow placement="top">
      <Button size="sm" isIconOnly variant="light" onClick={onClick}>
        <IconComponent className="text-default-400" />
      </Button>
    </Tooltip>
  )
}
