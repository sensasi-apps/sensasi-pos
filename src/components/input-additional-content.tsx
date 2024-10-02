export function InputAdditionalContent({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="pointer-events-none flex items-center">
      <span className="text-small text-default-400">{children}</span>
    </div>
  )
}
