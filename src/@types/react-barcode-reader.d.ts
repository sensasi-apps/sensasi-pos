declare module 'react-barcode-reader' {
  export interface BarcodeReaderProps {
    onScan?: (barcode: string) => void
    onError?: (barcode: string, message: string) => void
    onReceive?: (char: string) => void
    onKeyDetect?: (char: string) => void
    timeBeforeScanTest?: number
    avgTimeByChar?: number
    minLength?: number
    endChar?: number[]
    startChar?: number[]
    scanButtonKeyCode?: number
    scanButtonLongPressThreshold?: number
    onScanButtonLongPressed?: () => void
    stopPropagation?: boolean
    preventDefault?: boolean
    testCode?: string
  }

  declare class BarcodeReader extends React.Component<
    BarcodeReaderProps,
    undefined
  > {}

  export default BarcodeReader
}
