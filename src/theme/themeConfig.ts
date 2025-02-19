import type { ThemeConfig } from 'antd'
import { Playfair_Display } from 'next/font/google'

const butcherman = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700']
})

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#7bdb95',
    colorPrimaryHover: '##7bdb95',
    colorBgBase: '#fffafa',
    colorBgContainer: '#b7cded',
    colorLink: '##7bdb95',
    colorBorder: '#c8c8c8',
    borderRadius: 0,
    fontFamily: butcherman.style.fontFamily
  }
}

export default theme
