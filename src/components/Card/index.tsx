import styled from "styled-components";

const Card: React.FC<{ sabor: string, fatias: string, url: string }> = (props) => {
  return <CardStyled>
    <ImageWrapper>
      <CardImage src={props.url} />
    </ImageWrapper>
    <PizzaInfos>
      <Title>Sabor</Title>
      <Description>{props.sabor}</Description>
    </PizzaInfos>
    <PizzaInfos>
      <Title>Fatias</Title>
      <Description>{props.fatias} fatias</Description>
    </PizzaInfos>
  </CardStyled>;
};

export default Card;

const CardStyled = styled.div`
  gap: 8px;
  width: 16rem;
  min-height: 20rem;
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 16px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`

const CardImage = styled.img`
  width: 175px;
  height: 98px;
  object-fit: contain;
`

const PizzaInfos = styled.div`
  margin-bottom: 16px;
  padding: 0 16px;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`

const Description = styled.p`
  font-size: 15px;  
  margin-top: 8px
`