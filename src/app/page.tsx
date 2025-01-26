import React, { type ReactElement } from 'react'
import { redirect } from 'next/navigation'

import { ConfigProvider } from 'antd'

import theme from '../theme/themeConfig'

export default function Home (): ReactElement {
  redirect('/home')

  return (
    <ConfigProvider theme={theme}>
    <main>
      <div>
      </div>
    </main>
    </ConfigProvider>
  )
}
