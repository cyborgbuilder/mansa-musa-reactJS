import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
function Detail() {

    const scrollToTop = () => window.scrollTo({ top: '100px', behavior: "smooth"})
    

    return (
        <Container>
            <Wrap>
                
                <Left>
                   <Slide left>
                    <div>
                    <img src="/Images/story.png"/>
                    </div>
                    </Slide>
                </Left>
             

                
                <Right>
                <Slide right>
                    <div>
                    <h1>THE STORY OF MUSA’S ERA</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. L and scrambled it to make a type specimen book. It has  centuries, but also the leap into electronic typesetting, remaining essentially

unchanged. It was popularised in the 1960s with the release of Letraset sheets cont</p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. L and scrambled it to make a type specimen book.</p>
                    
                    <button onClick={scrollToTop}>Read More</button>
                    </div>
                    
                    </Slide>
                </Right>
                
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        height: 150vh;
    }



`

const Wrap = styled.div`
    width: 90%;
    display: flex;
    margin-top: 50px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 70px;
    }
`

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    div{
        width: 100%;

        img{
            width: 100%;
        }
    }

`

const Right = styled.div`
    width: 50%;
    text-align: left;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    div{
        width: 85%;


        h1{
            color: white;
            font-size: 36px;
            letter-spacing: 1.05px;
            
            @media only screen and (max-width: 768px) {
                font-size: 21px;
                margin-top: 30px;
            }
        }

        p{
            color: white;
            line-height: 1.5rem;
            letter-spacing: 1.1px;
            margin-top: 40px;

            @media only screen and (max-width: 768px) {
                font-size: 14px;
            }
        }

        button{
            padding: 10px 22px;
            border-radius: 5px;
            outline: none;
            border: none;
            background-color: #FFC800;
            margin-top: 30px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            &:hover{
                transform: scale(1.02);
                color: white;
            }

        }
    }
`
export default Detail
