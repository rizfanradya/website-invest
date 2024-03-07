import * as React from 'react'

import Typography from '@/app/components/uikit/Typography'
import SidebarMenu from '@/app/components/app/SidebarMenu'
import CompanyLogo from '@/app/components/app/CompanyLogo'

interface SidebarContentProps {
  mobileOnClose: () => void
}

export default function SidebarContent(props: SidebarContentProps) {
  return (
    <>
      <CompanyLogo />
      <SidebarMenu mobileOnClose={props.mobileOnClose} />
    </>
  )
}
