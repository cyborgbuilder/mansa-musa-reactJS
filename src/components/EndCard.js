import React from 'react'
import styled from'styled-components'
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {  FaTwitter } from "react-icons/fa";

function EndCard() {
    return (
        <Container>
            <Wrap>
                <h1>MUSA’S GOD FATHERS</h1>
                <p>Take a look at our growing collection of NFTs or digital artwork</p>

                <Cards>
                    <Card>
                        <div>
                        <img src="/Images/cardend.png" />
                        </div>
                        <h4>Kate Williom</h4>
                        <h5>NFT Expert</h5>

                        <SocialIcons>
                            <FaFacebookF style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                            <FaTwitter style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                            <FaGooglePlusG style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                            <FaLinkedin style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                        </SocialIcons>
                    </Card>


                    <Card>
                        <div>
                        <img src="/Images/cardend.png" />
                        </div>
                        <h4>Kate Williom</h4>
                        <h5>NFT Expert</h5>

                        <SocialIcons>
                            <FaFacebookF style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer', cursor: 'pointer'}} />
                            <FaTwitter style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer', cursor: 'pointer'}} />
                            <FaGooglePlusG style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer', cursor: 'pointer'}} />
                            <FaLinkedin style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer', cursor: 'pointer'}} />
                        </SocialIcons>
                    </Card>


                    <Card>
                        <div>
                        <img src="/Images/cardend.png" />
                        </div>
                        <h4>Kate Williom</h4>
                        <h5>NFT Expert</h5>

                        <SocialIcons>
                            <FaFacebookF style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                            <FaTwitter style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                            <FaGooglePlusG style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                            <FaLinkedin style={{color: 'rgb(165, 154, 7)', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} />
                        </SocialIcons>
                    </Card>


                </Cards>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: black;

`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-cointent: center;
flex-direction: column;
margin-top: 170px;

@media only screen and (max-width: 768px) {
    margin-top: 70px;
}

h1{
    color: white;
    font-size: 50px;

    @media only screen and (max-width: 768px) {
        font-size: 30px;
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
const Cards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin: 80px 0;

@media only screen and (max-width: 768px) {
    margin-top: 0;
    flex-direction: column;
}
`
const Card = styled.div`
text-align: left;
width: 30%;
margin-left: 30px;

@media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 60px;
}

h4{
    color: white;
    margin-top: 20px;
}
h5{
    color: white;
    margin-top: 20px;
}

div{
    width: 100%;

    img{
        width: 100%;
    }
}
`

const SocialIcons = styled.div`
display: flex;
margin-top: 25px;
`
export default EndCard
