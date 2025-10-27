import Steps from '@/components/stepper'
import type { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-1 justify-start px-8 lg:justify-center">
        <Steps />
      </div>
      {children}
    </>
  )
}

export default Layout
