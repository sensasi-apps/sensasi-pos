import FileResizer from 'react-image-file-resizer'

export default function resizeImage(
  file: File,
  maxWidth = 640,
  maxHeight = 640,
) {
  return new Promise<string>(resolve => {
    FileResizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      'webp',
      100,
      0,
      value => {
        if (typeof value === 'string') {
          resolve(value)
          return
        }

        if (value instanceof Blob || value instanceof File) {
          const reader = new FileReader()
          reader.onload = () => {
            if (typeof reader.result === 'string') resolve(reader.result)
          }

          reader.readAsDataURL(value)
          return
        }

        throw new Error('Unexpected type')
      },
      'base64',
    )
  })
}
