'use client'

import React, { type ReactElement } from 'react'

import { Carousel, Image, Layout } from 'antd'

const { Content } = Layout

export default function Janeiro (): ReactElement {
  return (
        <Content style={{ display: 'flex', flex: 1, height: 'calc(100vh - 90px)', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{ width: '100%', maxWidth: 500 }}>
                <Carousel arrows={true} infinite={false} dotPosition='bottom' draggable autoplay>
                    <div>
                        <Image style={{ width: '100%', height: 'auto' }} preview={false} src='/images/janeiro/janeiro1.jpeg' />
                    </div>
                    <div>
                        <Image style={{ width: '100%', height: 'auto' }} preview={false} src='/images/janeiro/janeiro2.jpeg' />
                    </div>
                    <div>
                        <Image style={{ width: '100%', height: 'auto' }} preview={false} src='/images/janeiro/janeiro3.jpeg' />
                    </div>
                    <div>
                        <Image style={{ width: '100%', height: 'auto' }} preview={false} src='/images/janeiro/janeiro4.jpeg' />
                    </div>
                    <div>
                        <Image style={{ width: '100%', height: 'auto' }} preview={false} src='/images/janeiro/janeiro5.jpg' />
                    </div>
                </Carousel>
            </div>
            <div style={{ margin: 78 }}>
              <h3>Date de Janeiro - 26/01/2025</h3>
              <br />
              <p>
                Alugamos um airbnb na trindade e aprendemos a fazer um site simples,
                <br />
                com direito a um cafézinho, muito vinho e uma pizza para finalizar.
              </p>
            </div>
        </Content>

  )
}
