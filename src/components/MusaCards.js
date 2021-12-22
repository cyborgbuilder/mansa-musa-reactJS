import React from 'react'
import styled from 'styled-components'
function MusaCards() {



    return (
        <Container>
           <Up></Up>
           <Down></Down>
           <Wrap>
               <Wrapper>
                   <h1>COLLECT YOUR MANSA MUSA KING</h1>
                   <p>Take a look at our growing collection of NFTs or digital artwork by most popular and trending artists and creators from across  the globe</p>
                   <Cards>
                       <Card>
                           <div><img src="/Images/card.png"/></div>
                           <p>Sample NFT Project</p>
                           <button>Collect</button>

                       </Card>

                       <Card>
                           <div><img src="/Images/card.png"/></div>
                           <p>Sample NFT Project</p>
                           <button>Collect</button>

                       </Card>

                       <Card>
                           <div><img src="/Images/card.png"/></div>
                           <p>Sample NFT Project</p>
                           <button>Collect</button>

                       </Card>

                       <Card>
                           <div><img src="/Images/card.png"/></div>
                           <p>Sample NFT Project</p>
                           <button>Collect</button>

                       </Card>

                       
                   </Cards>

                   <Btn >Show Full Collection</Btn>
               </Wrapper>
           </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 120vh;
    position: relative;
    
    @media only screen and (max-width: 768px) {
        height: 435vh;
    }
    
`

const Up = styled.div`
    width: 100%;
    height: 60vh;
    background: black;

    @media only screen and (max-width: 768px) {
        height: 80vh;
    }

`

const Down = styled.div`
    width: 100%;
    height: 60vh;
    background: white;

    @media only screen and (max-width: 768px) {
        height: 355vh;
    }
`

const Wrap = styled.div`
    position: absolute;
    top: 0;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        margin-top: 30px;
    }

    h1{
        margin-top: 60px;
        font-size: 39px;

        @media only screen and (max-width: 768px) {
            font-size: 20px;
            margin-top: 30px;
        }
    }

    p{
        margin-top: 30px;

        @media only screen and (max-width: 768px) {
            font-size: 14px;
            margin-top: 20px;
            text-align: center;
        }
    }

`
const Btn = styled.div`
border: none;
outline: none;
padding: 14px 22px;
border-radius: 5px;
background-color: #FFC800;
margin-top: 35px;
color: black;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
    transform: scale(1.02);
    color: white;
    cursor: pointer;
}
`
const Cards = styled.div`
    width: 100%;
    display: flex;
    margin-top: 40px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 20px;
    }


`

const Card = styled.div`
    width: 22%;
    border: 1px solid #969696;
    border-radius: 15px;
    margin-left: 26px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 26px;
        margin-left: 0;
    }

    div{
        width: 100%;

        img{
            width: 100%;
            border-radius: 15px;
        }
    }

    p{
        color: black;
        margin-left: 10px;

        @media only screen and (max-width: 768px) {
            font-size: 22px;
        }
    }

    button{
        border: none;
        outline: none;
        padding: 8px 12px;
        margin-left: 10px;
        margin-bottom: 10px;
        padding: 8px 26px;
        background-color: #FFC800;
        border-radius: 5px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover{
            transform: scale(1.02);
            color: white;
        }
    }
`
export default MusaCards

