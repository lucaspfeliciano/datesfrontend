'use client'

import React, { type ReactElement, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { CalendarOutlined, HomeOutlined } from '@ant-design/icons'
import { Image, Layout, Menu, theme } from 'antd'
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
    onClick,
    style: { height: '100%', fontSize: 20 }
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
    getItem('Página inicial', '/home', <HomeOutlined />),
    getItem('Janeiro', '/janeiro', <CalendarOutlined />),
    getItem('Fevereiro', '/fevereiro', <CalendarOutlined />),
    getItem('Março', '/marco', <CalendarOutlined />),
    getItem('Abril', '/abril', <CalendarOutlined />),
    getItem('Maio', '/maio', <CalendarOutlined />),
    getItem('Junho', '/junho', <CalendarOutlined />),
    getItem('Julho', '/julho', <CalendarOutlined />),
    getItem('Agosto', '/agosto', <CalendarOutlined />),
    getItem('Setembro', '/setembro', <CalendarOutlined />),
    getItem('Outubro', '/outubro', <CalendarOutlined />),
    getItem('Novembro', '/novembro', <CalendarOutlined />),
    getItem('Dezembro', '/dezembro', <CalendarOutlined />)
  ]

  const {
    token: { colorBgBase }
  } = theme.useToken()

  return (
    <Layout style={{ maxHeight: '100vh' }}>
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
            style={{ height: '100%', padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            onClick={ ({ key }) => { router.push(key) }}
          />
        </Sider>
        <Layout style={{ background: colorBgBase, display: 'flex', flex: 1, marginLeft: 260, maxHeight: '100vh' }}>
          <Header style={{ height: '80px', padding: '0 80px', background: '#8eb3e6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
            <Image src='/images/xuslogo.png' preview={false} width={60} />
            <h2 style={{ color: 'white', marginLeft: 8 }}>DATES DOS XUS</h2>
            </div>
            <h2 style={{ color: 'white' }}>2025</h2>
          </Header>
          <Content style={{ maxHeight: '100vh' }}>
              {children}
            </Content>
        </Layout>
    </Layout>
  )
}

export default AppLayout
