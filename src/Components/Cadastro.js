import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cadastro() {
    let navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [account, setAccount] = useState();
    const [loading, setLoading] = useState(false);

    function registerAcount(event) {
        // const obj = {
        //     email: "jae@respondeai.com.br",
        //     password: "123456",
        //     name: "Joe",
        //     image: "https://http.cat/411.jpg"
        // };
        const obj = {
            email,
            password,
            name,
            image
        };
        setLoading(true);
        event.preventDefault();
        console.log(obj)
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", obj);
        promise.then(() =>{
            setLoading(false);
            navigate("/");
        }
        );
        promise.catch(() => {
            setLoading(false);
            console.log("falha de registro");
        }
        );
    }
    console.log(account)
    return (
        <>
            <Container>
                <h1>Trackit</h1>
                <input disabled={loading ? true : false} type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)}></input>
                <input disabled={loading ? true : false} type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}></input>
                <input disabled={loading ? true : false} type="text" placeholder="nome" onChange={e => setName(e.target.value)}></input>
                <input disabled={loading ? true : false} type="text" placeholder="foto" onChange={e => setImage(e.target.value)}></input>
                <Link to="/">
                    <button onClick={registerAcount}>Cadastrar</button>
                </Link>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
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
    font-size: 14px;
}
h1 {
    color: #126BA5;
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
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
    font-size: 20px;
}
`