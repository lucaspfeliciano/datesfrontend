'use client'

import React, { type ReactElement } from 'react'
import { Image } from 'antd'

export default function Home (): ReactElement {
  return (
    <div style={{ display: 'flex', flex: 1, height: 'calc(100vh - 90px)', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Image style={{ width: '25vw' }} preview={false} src='/images/home/home.jpeg'/>
      <div style={{ width: '30vw' }}>
        <h2 style={{ marginBottom: 2 }}>A nossa mini família</h2>
        <p style={{ marginBottom: 12, fontSize: 18 }}>Para podermos relembrar (principalmente nos momentos necessários) da sorte que temos de
          ter a nossa família e a oportunidade de vivermos juntos. Que possamos sempre achar formas de inovar nosso amor
          mesmo com o passar dos anos.
          </p>
      </div>
    </div>
  )
}
