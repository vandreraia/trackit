import styled from 'styled-components';
import { Link } from "react-router-dom";
import avatar from "../img/Rectangle 14.png"

export default function Header() {
    return (
        <Link to="/">
            <Head>
                <h1>Trackit</h1>
                <img src={avatar} alt="avatar" />
            </Head>
            <Invisible></Invisible>
        </Link>
    )
}

const Head = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #126BA5;
    padding: 10px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  box-sizing: border-box;
    h1{
        font-weight: 400;
        color: #FFFFFF;
        font-size: 38.982px;
        font-family: 'Playball', cursive;
    }
`

const Invisible = styled.div`
    height: 70px;
`