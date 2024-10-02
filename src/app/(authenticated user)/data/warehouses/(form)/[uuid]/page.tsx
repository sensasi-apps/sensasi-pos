export default function Page({
  params: { uuid },
}: {
  params: { uuid: string }
}) {
  return (
    <div>
      <div>(Halaman Ubah Data Gudang) {uuid}</div>
    </div>
  )
}
