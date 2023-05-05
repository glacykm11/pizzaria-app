import { FC } from "react";
import styled from "styled-components";

const Input: FC<{ label: string }> = (props) => {
    return <FormStyled>
        <label>{props.label}</label>
        <InputStyled type="text" />
    </FormStyled>
};

export default Input;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 8px;
`

const InputStyled = styled.input`
    all: unset;
    border-radius: 8px;
    background-color: var(--gray-color);
    height: 2.5rem;
    width: 10rem;
`