import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Roadmap() {
    return (
        <Container>
            <Wrap>
                <h1>ROAD MAP</h1>
                <p>Take a look at our growing collection of NFTs or digital artwor</p>

                <Map>
                    <Fade bottom>
                <Box>
                <Left>
                    <img src="Images/RdmpL1.png"/>
                    <h4>Brand & Tech Development</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  versions of Lorem Ipsum</p>

                </Left>
                
                <Right>
                    <img src="Images/RdmpR1.png"/>
                </Right>
                </Box>

                </Fade>

                <Fade bottom>
                <Box>

                <RightTwo>
                    <img src="Images/RdmpR2.png"/>
                </RightTwo>


                <LeftTwo>
                    <img src="Images/RdmpL2.png"/>
                    <h4>Final Touches</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  versions of Lorem Ipsum</p>

                </LeftTwo>
                </Box>
                </Fade>

                <Fade bottom>
                <Box >

<LeftThree>
    <img src="Images/RdmpL3.png"/>
    <h4>Mansa Musa Dash</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  versions of Lorem Ipsum</p>

</LeftThree>

<RightThree>
    <img src="Images/RdmpR3.png"/>
</RightThree>
</Box>

</Fade>

<Fade bottom>
<Box>

<RightFour>
    <img src="Images/RdmpR4.png"/>
</RightFour>

<LeftFour>
    <img src="Images/RdmpL4.png"/>
    <h4>Community Event</h4>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  versions of Lorem Ipsum</p>

</LeftFour>


</Box>
</Fade>
                
                </Map>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    
`

const Wrap = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        color: white;
        margin-top: 50px;
        font-size: 55px;

        @media only screen and (max-width: 768px) {
            font-size: 40px;
        }
    }

    p{
        color: white;
        margin-top: 20px;

        @media only screen and (max-width: 768px) {
            font-size: 14px;
        }
    }


`

const Left = styled.div`
    width: 50%;
    background-color: #4F5CEB;
    padding: 30px 20px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    h4{
        color: white;
        margin-top: 20px;

        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    }
    p{
        line-height: 2.1rem;
        letter-spacing: 1.2px;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const LeftTwo = styled.div`
    width: 50%;
    background-color: #FF6D3D;
    padding: 30px 20px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }


    h4{
        color: white;
        margin-top: 20px;
    }
    p{
        line-height: 2.1rem;
        letter-spacing: 1.2px;
    }
`

const RightTwo = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const RightThree = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const LeftThree = styled.div`
    width: 50%;
    background-color: #25CFAA;
    padding: 30px 20px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    h4{
        color: white;
        margin-top: 20px;
    }
    p{
        line-height: 2.1rem;
        letter-spacing: 1.2px;
    }
`

const LeftFour = styled.div`
    width: 50%;
    background-color: #FFCA40;
    padding: 30px 20px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    h4{
        color: white;
        margin-top: 20px;
    }
    p{
        line-height: 2.1rem;
        letter-spacing: 1.2px;
    }
`

const RightFour = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`
const Map = styled.div`
    margin-top: 30px;

    @media only screen and (max-width: 768px) {
        margin-top: 0;
    }

`

const Box = styled.div`
    display: flex;
    margin-top: 80px;

    @media only screen and (max-width: 768px) {
        margin-top: 40px;
    }
`
export default Roadmap
