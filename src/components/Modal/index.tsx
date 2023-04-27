import React from "react";
import styled from "styled-components";

const Modal: React.FC<{ open: boolean, onClick: any }> = (props) => {   
    return (
        <ModalStyled open={props.open}>
            <ModalContent>
                <ModalClose onClick={props.onClick}>&times;</ModalClose>
                <p>Some text in the Modal..</p>
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

const ModalClose = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`;