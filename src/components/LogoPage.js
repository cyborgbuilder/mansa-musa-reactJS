import React from 'react'
import styled from 'styled-components'
function LogoPage() {
    return (
        <Container>
            <img src="/Images/logo.png"/>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transperant;
`
export default LogoPage
