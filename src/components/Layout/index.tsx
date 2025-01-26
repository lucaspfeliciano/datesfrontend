'use client'

import React, { type ReactElement, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { Layout, Menu, theme } from 'antd'
import type { MenuProps } from 'antd'

const { Content, Sider, Header } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  onClick?: () => void
): MenuItem {
  return {
    key,
    icon,
    label,
    onClick
  }
}

const AppLayout = ({
  children
}: {
  children: React.ReactNode
}): ReactElement => {
  const pathname = usePathname()
  const router = useRouter()

  const [collapsed, setCollapsed] = useState(false)

  const items: MenuItem[] = [
    getItem('Página inicial', '/home'),
    getItem('Janeiro', '/janeiro'),
    getItem('Fevereiro', '/fevereiro'),
    getItem('Março', '/marco'),
    getItem('Abril', '/abril'),
    getItem('Maio', '/maio'),
    getItem('Junho', '/junho'),
    getItem('Julho', '/julho'),
    getItem('Agosto', '/agosto'),
    getItem('Setembro', '/setembro'),
    getItem('Outubro', '/outubro'),
    getItem('Novembro', '/novembro'),
    getItem('Dezembro', '/dezembro')
  ]

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider
          width={260}
          style={{
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
          theme='light'
          collapsible
          collapsed={collapsed}
          trigger={null}
          onCollapse={(value) => {
            setCollapsed(value)
          }
        }>
          <Menu
            theme="light"
            defaultSelectedKeys={[pathname || 'home']}
            mode="inline"
            items={items}
            style={{ height: '100%', padding: 0 }}
            onClick={ ({ key }) => { router.push(key) }}
          />
        </Sider>
        <Layout style={{ background: colorBgContainer, display: 'flex', flex: 1, marginLeft: 260 }}>
        <Header style={{ height: '80px', padding: '0 80px', background: colorBgContainer, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

        </Header>
        <Content>
            {children}
          </Content>
        </Layout>
    </Layout>
  )
}

export default AppLayout
