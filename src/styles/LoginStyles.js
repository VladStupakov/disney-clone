import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  z-index: -1;
`

export const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`
export const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CTALogoOne = styled.img`
  margin-bottom: 12px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

export const SignUpButton = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;

export const Description  = styled.p`
  font-size: 12px;
  margin: 0px 0px 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`

export const CTALogoTwo = styled.img`
  max-width: 650px;
  margin-bottom: 20px;
`
