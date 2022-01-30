import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #ffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '1rem'};
    right: ${(props) => props.direction === 'right' && '1rem'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    &:hover {
        background-color: teal;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100%;
    display: Grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    background-color: #${(props) => props.bg};
     @media (max-width: 1280px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
     }
`;

const ImgContainer = styled.div`
    width: 100%;
    flex: 1;
    overflow: hidden;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    margin: auto;
    align-items: center;
`;

const Image = styled.img`
    height: 80%;
    object-fit: cover;
    object-position: top;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-family: 'Krona One';
    text-align: center;
`;

const Button = styled.button`

    padding: 0.8rem;
    font-size: 1rem;
    background-color: transparent;
    cursor: pointer;
    letter-spacing: 0.04rem;
    border:none;
    background-color: teal;
    color:white;
    font-weight: 700;
    &:hover {
        background-color: mediumvioletred;
    }
    `;

const Desc = styled.p`
    margin: 1rem 0;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.04rem;
`;

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {' '}
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
}

export default Slider;
