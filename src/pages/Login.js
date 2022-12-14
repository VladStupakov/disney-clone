import React from 'react'
import { Container, Content, CTA, CTALogoOne, CTALogoTwo, Description, SignUpButton } from '../styles/LoginStyles'

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' />
          <SignUpButton>GET ALL THERE</SignUpButton>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' />
        </CTA>
      </Content>
    </Container>
  )
}

export default Login