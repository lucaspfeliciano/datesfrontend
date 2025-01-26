import './globals.css'

import React, { type ReactElement } from 'react'

import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'
import { Roboto } from 'next/font/google'

import Layout from '@/components/Layout'

import AntdRegistry from '../lib/AntdRegistry'
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry'
import theme from '../theme/themeConfig'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

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
      <body className={roboto.className}>
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
