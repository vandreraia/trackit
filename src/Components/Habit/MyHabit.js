
import { useContext } from "react";
import styled from 'styled-components';
import axios from 'axios';
import TokenContext from '../../contexts/TokenContext';

export default function MyHabit({ habit, selectedDays, id }) {
    const letters = ["D", "S", "T", "Q", "Q", "S", "S"];
    const { token } = useContext(TokenContext);

    function deleteHabit() {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, token)
            .then(() => alert("confirm?"))
    }

    return (
        <Habit>
            <div>
                {habit}
                <ion-icon onClick={deleteHabit} name="trash-outline"></ion-icon></div>
            <div>
                {letters.map((day, index) =>
                    <Days key={index} selected={selectedDays.find(e => e === index) ? true : false}>{day}</Days>
                )}
            </div>
        </Habit>
    )
}

const Habit = styled.div`
    background-color: white;
    padding: 20px;
    margin: 10px;

    input {
        width: 99%;
        height: 45px;
        font-size: 20px;
        border: 1px solid #D5D5D5;
    }
    div:first-child {
        display: flex;
        justify-content: space-between;
    }
    div:nth-child(2) {
        margin: 10px 0 0px 0;
    }
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