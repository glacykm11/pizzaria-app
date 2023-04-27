import styled from "styled-components";

const Button: React.FC<{ color: "primary" | "secondary" }> = (props) => {
  return <ButtonStyled color={props.color}>Fazer Pedido</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button<{ color: "primary" | "secondary" }>`
  all: unset;
  border-radius: 8px;
  color: ${(props) =>
    props.color === "primary" ? "var(--primary-color)" : "var(--white-color)"};
  font-size: 14px;
  height: 3rem;
  width: 12rem;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "primary"
      ? "var(--secondary-color)"
      : "var(--primary-color)"};
`;
