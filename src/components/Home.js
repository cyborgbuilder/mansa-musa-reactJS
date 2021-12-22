import React from 'react'
import HomePage from './HomePage'
import BlankPage from './BlankPage'
import LogoPage from './LogoPage'
import Detail from './Detail'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Mint from './Mint'
import MusaCards from './MusaCards'
import Roadmap from './Roadmap'
import EndCard from './EndCard'

function Home() {
    return (

        <Container>
            <HomePage />
            <BlankPage />
            <LogoPage />
            <Detail />
            <ImageSlider />
            <Mint />
            <MusaCards />
            <Roadmap />
            <EndCard />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 0;

    
    Nav{
        margin-left: 750px;
        font-size: 20px;

        @media only screen and (max-width: 768px) {
            margin: 0;
            padding-left: 10px;        
        }
    }

`


export default Home
