import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'

function HomePage() {


    return (
        <Container>

<Navbar  bg="myTra" variant='dark'  expand='lg' sticky='top'>

<Navbar.Toggle style={{marginLeft: '20px'}} />
<Navbar.Collapse>
<Nav >
    <Nav.Link  style={{marginRight: '12px'}} href="">Home</Nav.Link>
    <Nav.Link style={{marginRight: '12px'}} href="">Purchase</Nav.Link>
    <Nav.Link style={{marginRight: '12px'}} href="">Team</Nav.Link>
    <Nav.Link style={{marginRight: '12px'}} href="">Mint</Nav.Link>
    <Nav.Link style={{marginRight: '12px'}} href="">Gallary</Nav.Link>
</Nav>
</Navbar.Collapse >

<Btn>Connect Wallet</Btn>

</Navbar>


            <Wrapper>
                <Wrap>
                <Left>
                    <div>
                    <p><span>VERY RARE NFT COLLECTION</span></p>
                    <h1>MANSA MUSA’S KINGDOM</h1>
                    <p>Buy and sell NFTs and browse our massive collection of digital art and collectibles by top artists from around the world.</p>
                    <button>Show Full Collection</button>
                    </div>
                </Left>

                <Right>
                    <div>
                        <img src="/images/musa.png" />
                    </div>
                </Right>
                </Wrap>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/Images/Backg1.png');
    position: absolute;
    top: 0;

    @media only screen and (max-width: 768px) {
        height: 140vh;
    }



   

`

const Btn = styled.div`
border: none;
outline: none;
border-radius: 5px;
background-color: #FFC800;
margin-right: 10px;
padding: 6px 14px;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
    transform: scale(1.02);
    color: white;
}


@media only screen and (max-width: 768px) {

    margin-top: 6px;
    
}

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrap = styled.div`
    width: 90%;
    display: flex;
    

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        
    }
`
const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    

    @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
    }

    div{

        margin-top: 60px;
        @media only screen and (max-width: 768px) {
            margin-top: 25px;
        }

        span{
            color: #BCE320;

            
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
            
        }


        
        h1{
            color: white;
            font-size: 62px;

            @media only screen and (max-width: 768px) {
                font-size: 25px;
                margin-top: 20px;
            }
        }

        p{
            color: white;
            margin-top: 40px;
            line-height: 1.8rem;
            letter-spacing: 1.1px;

            @media only screen and (max-width: 768px) {
                margin: 0;
                margin-top: 20px;
                font-size: 14px;
            }
        }

        button{
            background-color: #FFC800;
            border: none;
            outline: none;
            padding: 12px 25px;
            border-radius: 8px;
            margin-top: 20px;
            cursor: pointer;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            &:hover{
                transform: scale(1.02);
                color: white;
            }

            @media only screen and (max-width: 768px) {
                margin-top: 30px;
            }
        }

    }
`

const Right = styled.div`
width: 50%;


@media only screen and (max-width: 768px) {
    width: 100%;
}


div{
    width: 100%;

    img{
        width: 92.82%;
        margin-left: 80px;

        @media only screen and (max-width: 768px) {
            margin-top: 58px;
            width: 89.7%;
            margin-left: 27px;
        }
    }
}

`
export default HomePage
