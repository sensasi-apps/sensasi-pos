import Steps from '@/components/stepper'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-1 flex-col px-8">
        <Steps />
      </div>
      {children}
    </>
  )
}

export default Layout
