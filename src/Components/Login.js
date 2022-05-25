import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
export default function Login() {
    return (
        <>
            <Container>
                <h1>Trackit</h1>
                <input type="email" placeholder="e-mail"></input>
                <input type="password" placeholder="senha"></input>
                <Link to="/habitos">
                    <button>Entrar</button>
                </Link>
                <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
                
                </Link>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        color: #52B6FF;
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
    }
    h1 {
        color: #126BA5;
        font-family: 'Playball', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
    }
    button {
        background-color: #52B6FF;
        height: 45px;
        width: 100%;
        border-width: 0;
        border-radius: 3px;
        color: #ffffff;
        padding: 10px 20px;
        margin: 20px 10px 10px 0px;
    }
`