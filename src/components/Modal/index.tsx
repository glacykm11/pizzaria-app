import React, { FC } from "react";
import styled from "styled-components";
import Card from "../Card";
import { PIZZAS } from "@/utils/constants";
import Input from "../Input";
import Button from "../Button";

const Modal: FC<{ open: boolean, onClick: () => void }> = (props) => {
    return (
        <ModalStyled open={props.open}>
            <ModalContent>
                <ModalClose src="/assets/icons/close-button.svg" onClick={props.onClick} />

                <ModalTitle><img src="/assets/icons/pizza-icon.svg" /><h2>Escolha sua pizza</h2></ModalTitle>
                <Cards>
                    <img src="/assets/icons/arrow-left.svg" />
                    {
                        PIZZAS.map(pizza =>
                            <Card key={pizza.id} sabor={pizza.sabor} fatias={pizza.fatias} url={pizza.url}></Card>
                        )
                    }
                    <img src="/assets/icons/arrow-right.svg" />
                </Cards>

                <FormDelivery>
                    <div>
                        <ModalTitle><img src="/assets/icons/delivery-icon.svg" /><h2>Forma de entrega</h2></ModalTitle>
                        <Input label={'Forma de entrega'} />
                        <Input label={'Endereço'} />
                    </div>
                    <div>
                        <ModalTitle><img src="/assets/icons/payment-icon.svg" /><h2>Pagamento</h2></ModalTitle>
                        <Input label={'Forma de pagamento'} />
                    </div>
                </FormDelivery>

                <div>
                    <Button title={"Finalizar pedido"} color={"primary"} onClick={undefined}></Button>
                </div>
            </ModalContent>
        </ModalStyled>
    );
};

export default Modal;

const ModalStyled = styled.div<{ open: boolean }>`
    display: ${(props) => props.open ? 'block' : 'none'}; 
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
`;

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 24px;
    border: 1px solid #888;
    border-radius: 8px;
    width: 80%; 
`;

const ModalClose = styled.img`
    display: inline;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`;

const Cards = styled.div`
    margin: 8px 0;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
`

const ModalTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 16px 0;
`

const FormDelivery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`