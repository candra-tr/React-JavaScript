import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            Selamat datang di CinemaScape, tempat terbaik untuk merayakan keajaiban dunia perfilman. Di dalam alam ini, kami menghadirkan pengalaman yang mendalam dan memikat untuk semua pecinta film, dari yang baru mengenal hingga penggemar film berat. Sambutlah untuk menjelajahi keindahan dan keragaman film di CinemaScape!
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png' />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size; cover;
        background-repeat: no-repeat;
        background-image: url('/images/login-background.jpg');
        position: absolute;
        content:'';
        opacity: 0.7;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weigth: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px
    letter-spacing: 1.5px;
    text-align: center;
    line-heigh: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`