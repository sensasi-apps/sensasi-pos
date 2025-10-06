import ManagerUserForm from './manager-user-form'

export default function Page() {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-2">
      <h1 className="text-3xl font-bold">Buat akun pengelola</h1>

      <p className="mb-4 text-sm text-gray-500">
        Pengelola akan mendapatkan akses penuh untuk pengelolaan aplikasi.
      </p>

      <ManagerUserForm />
    </div>
  )
}

export const metadata = {
  title: 'Sensasi POS',
}
