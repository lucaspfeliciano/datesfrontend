import './globals.css'

import React, { type ReactElement } from 'react'

import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'

import Layout from '@/components/Layout'

import AntdRegistry from '../lib/AntdRegistry'
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry'
import theme from '../theme/themeConfig'

export const metadata: Metadata = {
  title: 'Dates',
  description: 'Dates dos Xus'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="pt-br">
      <body>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <Layout>
                <StyledComponentsRegistry>
                  {children}
                </StyledComponentsRegistry>
              </Layout>
            </ConfigProvider>
          </AntdRegistry>
      </body>
    </html>
  )
}
