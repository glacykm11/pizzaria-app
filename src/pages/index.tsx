/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import pizzaComFundo from "../assets/pizza-com-fundo.png";
import pizzariaComFundo from "../assets/pizzaria-com-fundo.png";
import styled from "styled-components";
import Image from "next/image";
import Button from "@/components/Button";
import fundoPizza2 from "../assets/background-second-page.png";
import Modal from "@/components/Modal";
import React from "react";

export default function Home() {
  const [openModal, setOpenModal] = React.useState(false);
  
  return (
    <>
      <FirstPage>
        <Navbar onClick={() => setOpenModal(true)}/>
        <Image src={pizzaComFundo} alt="pizza" style={{ objectFit: 'contain', minWidth: '500px', minHeight: '400px' }} />
      </FirstPage>
      <SecondPage>
        <Image
          src={fundoPizza2}
          alt="pizza"
          style={{ backgroundImage: `url(${fundoPizza2})`, width: '100%', position: 'relative' }}
        />
        <ContentWrapper>
          <Image
            src={pizzariaComFundo}
            alt="pizza"
            width={500}
            style={{ backgroundImage: `url(${pizzariaComFundo})` }}
          />
          <TextWrapper>
            <Title>Nossa Pizzaria</Title>
            <Text>
              Desde 1980 produzindo as melhores pizzas da região. Nosso rodízio
              oferece mais de 60 sabores entre pizzas, massas e porções.
            </Text>
            <Text>
              Você pode escolher se prefere o serviço à la carte, ou encomendar
              nossas deliciosas pizzas pelo nosso delivery.
            </Text>
            <Button color={"secondary"} onClick={() => setOpenModal(true)}/>
            <Modal open={openModal} onClick={() => setOpenModal(false)}/>
          </TextWrapper>
        </ContentWrapper>
      </SecondPage>
    </>
  );
}

const FirstPage = styled.div`
  background-color: var(--primary-color);
  padding: 0 34px;
  text-align: center;
`;

const SecondPage = styled.div`
  background-color: var(--secondary-color);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 34rem 28rem;
  grid-template-rows: 1fr;
  position: absolute;
  top: 63rem;
  left: 20rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 40px;
  border-bottom: 4px solid black;
  width: 16rem;
`;

const Text = styled.p`
  color: var(--terciary-color);
  font-size: 20px;
  text-align: justify;
  margin: 16px 0;
  line-height: 35px;
`;
