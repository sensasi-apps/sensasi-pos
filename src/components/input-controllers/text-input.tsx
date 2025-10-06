import { Input, type InputProps } from '@heroui/input'
import {
  Controller,
  FieldValues,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form'

export default function TextInput<T extends FieldValues>({
  slotProps,
  ...props
}: Pick<ControllerProps<T>, 'rules' | 'name'> & {
  slotProps?: {
    input?: InputProps
  }
}) {
  const { control } = useFormContext<T>()

  return (
    <Controller
      {...props}
      control={control}
      render={({ field: { value, ...rest }, fieldState: { error } }) => (
        <Input
          {...rest}
          value={value ?? ''}
          isInvalid={!!error}
          errorMessage={error?.message}
          autoComplete={props.name}
          {...slotProps?.input}
        />
      )}
    />
  )
}
