export function InputAdditionalContent({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="pointer-events-none flex items-center">
      <span className="text-default-400 text-small">{children}</span>
    </div>
  )
}
