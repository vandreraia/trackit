import styled from 'styled-components';
import { Link } from "react-router-dom";
import Header from "./Common/Header";
import Footer from "./Common/Footer";

export default function Habits() {

    function createHabit() {
        return (
            <Habit>
                <input type="text" placeholder='nome do hábito'></input>
                <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                </div>
                <div>
                    <button>Cancelar</button>
                    <button>Salvar</button>
                </div>
            </Habit>
        )
    }

    return (
        <Container>
            <Header />
            <AddHabit>
                <p>Meus hábitos</p>
                <button onClick={() => createHabit()}>
                    <ion-icon color="#FFFFFF" name="add-outline"></ion-icon>
                </button>
            </AddHabit>
            <Habit>
                <input type="text" placeholder='nome do hábito'></input>
                <div>
                    <Days selected={true}>D</Days>
                    <Days>S</Days>
                    <Days>T</Days>
                    <Days>Q</Days>
                    <Days>Q</Days>
                    <Days>S</Days>
                    <Days>S</Days>
                </div>
                <div>
                    <Button>Cancelar</Button>
                    <Button bg={true}>Salvar</Button>
                </div>
            </Habit>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer />
        </Container>
    )
}

const Button = styled.button`
width: 84px;
height: 35px;
border-width: 0;
border-radius: 3px;
font-size: 16px;
background-color: ${props => props.bg ? "#52B6FF" : "white"};
color: ${props => props.bg ? "white" : "#52B6FF"};
`

const Days = styled.button`
    width: 30px;
    height: 30px;
    margin: 2px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: ${props => props.selected ? "#CFCFCF" : "white"};
    color: ${props => props.selected ? "white" : "#DBDBDB"};
`

const Habit = styled.div`
    background-color: white;
    padding: 20px;

    input {
        width: 99%;
        height: 45px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
    }
    div:last-child{
        display: flex;
        justify-content: flex-end;

    }
    div:nth-child(2) {
        margin: 10px 0 30px 0;
    }
`

const AddHabit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: #126BA5;
        font-size: 24px ;
    }

    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border-width: 0;
        color: white;

    }
`

const Container = styled.div`

`