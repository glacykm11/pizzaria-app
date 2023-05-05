/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import styled from "styled-components";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <Navbar onClick={() => setOpenModal(true)} />
      </div>
      <FirstPage>
        <PizzaImage src="/assets/images/pizza-com-fundo.png" />
      </FirstPage>
      <SecondPage>
        <div>
          <PizzasImages src="/assets/images/pizzaria-com-fundo.png" />
        </div>
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
          <Button color={"secondary"} onClick={() => setOpenModal(true)} title={"Fazer pedido"} />
          <Modal open={openModal} onClick={() => setOpenModal(false)} />
        </TextWrapper>
      </SecondPage>
    </>
  );
}

const FirstPage = styled.div`
  background-color: var(--primary-color);
  padding: 0 32px;
  text-align: center;
`;

const PizzaImage = styled.img`
  object-fit: contain;
  width: 80%;
`

const SecondPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  background-color: var(--secondary-color);
  padding: 32px;
  height: 60rem;
`;

const PizzasImages = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: contain;
`

const TextWrapper = styled.div`
  width: 32rem;
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
