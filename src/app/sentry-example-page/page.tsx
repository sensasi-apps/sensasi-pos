export default function SentryExamplePage() {
  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button
        onClick={() => {
          throw new Error('Sentry Example Page Error')
        }}>
        Throw Error
      </button>
    </div>
  )
}
