import React from 'react';
import styled from 'styled-components';
import BgImg from '../assets/hero-image.jpg';

const Section = styled.section`
    background-image: url(${BgImg});
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;

const Content = styled.div`
    width: 100%;
    height: 100px;
`;

const Left = styled.div`
    padding-left: 220px;
    padding-top: 143px;

`;

const Title = styled.p`
    font-size: 55px;
    color: #04040a;
    font-weight: 400;
`;

const Description = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea0ac;
    margin-top: 58px;
`;

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 58px;
    width: 371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #006BFF, #006BFF); /*#34495E);*/
    text-decoration: none;
    box-shadow: 0 14px 14px rgba(0 42 177 / 12%);
`;

const Hero = () => {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Software solutions<br /> to take your business further
                        <Description>
                         Leading the digital transformation with innovative 
                         business solutions tailormade for your business
                        </Description>   
                        <Button href='google.com' target='_blank'>
                            <span>GET IN TOUCH</span>
                        </Button>
                    </Title>
                </Left>
            </Content>
        </Section>
    )
}

export default Hero
