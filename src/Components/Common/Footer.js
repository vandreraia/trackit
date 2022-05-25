import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Container>
            <Link to="/habit">
                <p>Hábitos</p>
            </Link>
            <Link to="/today">
            <button>Hoje</button>
            </Link>
            <Link to="/history">
            <p>Histórico</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    p {
        color: #52B6FF;
    }
`