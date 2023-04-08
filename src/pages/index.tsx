/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import pizzaComFundo from "../assets/pizza-com-fundo.png";
import pizzariaComFundo from "../assets/pizzaria-com-fundo.png";
import styled from "styled-components";
import Image from "next/image";
import Button from "@/components/Button";
import fundoPizza2 from "../assets/background-second-page.png";

export default function Home() {
  return (
    <>
      <Main>
        <FirstPage>
          <Navbar />
          <Image src={pizzaComFundo} alt="pizza" style={{ width: "100%" }} />
        </FirstPage>
        <SecondPage>
          <Image
            src={fundoPizza2}
            alt="pizza"
            style={{ position: "absolute", width: "100%" }}
          />

          <TextWrapper>
            <Image
              src={pizzariaComFundo}
              alt="pizza"
              width={500}
              style={{ position: "relative" }}
            />
            <Title>
              <Underscore>Nossa Pizzaria</Underscore>
            </Title>
            <Text>
              Desde 1980 produzindo as melhores pizzas da região. Nosso rodízio
              oferece mais de 60 sabores entre pizzas, massas e porções.
            </Text>
            <Text>
              Você pode escolher se prefere o serviço à la carte, ou encomendar
              nossas deliciosas pizzas pelo nosso delivery.
            </Text>
            <Button color={"secondary"} />
          </TextWrapper>
        </SecondPage>
      </Main>
    </>
  );
}

const Main = styled.main``;

const FirstPage = styled.div`
  background-color: var(--primary-color);

  padding: 0 34px;
  text-align: center;
`;

const SecondPage = styled.div``;

const TextWrapper = styled.div`
  width: 40%;
  position: relative;
`;

const Title = styled.h2``;

const Underscore = styled.u``;

const Text = styled.p`
  color: var(--terciary-color);
  font-size: 15px;
  text-align: justify;
  margin: 16px 0;
`;
