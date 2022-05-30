import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);

    function registerAcount(event) {
        const body = {
            email,
            password,
            name,
            image
        };
        setLoading(true);
        event.preventDefault();
        console.log(body)
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        , body);
        promise.then((res) => {
            console.log(res)
            setLoading(false);
            navigate("/");
        }
        );
        promise.catch(() => {
            setLoading(false);
            alert("falha de registro");
        }
        );
    }
    return (
        <>
            <Container>
                <h1>Trackit</h1>

                <input disabled={loading ? true : false} type="email" placeholder="e-mail" onChange={e => setEmail(e.target.value)}></input>
                <input disabled={loading ? true : false} type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}></input>
                <input disabled={loading ? true : false} type="text" placeholder="nome" onChange={e => setName(e.target.value)}></input>
                <input disabled={loading ? true : false} type="text" placeholder="foto" onChange={e => setImage(e.target.value)}></input>
                <button onClick={registerAcount}><PropagateLoader size={10} loading={loading} color="white" />{loading ? "" : "Cadastrar"}</button>

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
background-color: white;
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
    width: 90%;
    border-width: 0;
    border-radius: 3px;
    color: #ffffff;
    margin: 0px 0px 10px 0px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 90%;
    margin: 3px;
}
`