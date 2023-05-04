import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Modal: React.FC<{ open: boolean, onClick: any }> = (props) => {
    const pizzas = [
        { sabor: 'Calabresa', id: 1, fatias: '8', url: '/assets/images/pizza-calabresa.png' },
        { sabor: 'Mussarela', id: 2, fatias: '8', url: '/assets/images/pizza-calabresa.png' },
        { sabor: 'Portuguesa', id: 3, fatias: '6', url: '/assets/images/pizza-calabresa.png' },
    ];

    const listCards = pizzas.map(pizza =>
        <Card key={pizza.id} sabor={pizza.sabor} fatias={pizza.fatias} url={pizza.url}></Card>
    );

    return (
        <ModalStyled open={props.open}>
            <ModalContent>
                <ModalClose src="/assets/icons/close-button.svg" onClick={props.onClick} />
                <ModalTitle><img src="/assets/icons/pizza-icon.svg" /><h2>Escolha sua pizza</h2></ModalTitle>
                <Cards>
                    <img src="/assets/icons/arrow-left.svg" />
                    {listCards}
                    <img src="/assets/icons/arrow-right.svg" />
                </Cards>
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
    padding: 20px;
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
`