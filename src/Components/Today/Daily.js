
import TokenContext from '../../contexts/TokenContext';
import PercentContext from "../../contexts/PercentContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Daily() {
    const { token } = useContext(TokenContext);
    const { percentage, setPercentage } = useContext(PercentContext)
    const [habits, setHabits] = useState();

    useEffect(() => {

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token)
            .then((res) => setHabits(res.data))
            .catch(err => console.log(err))
    }, [habits])

    function countDone() {
        let count = 0;

        habits.forEach(habit => {
            if (habit.done) {
                count++;
            }
        });

        setPercentage(((count / habits.length) * 100).toFixed(0));

        if (count) {
            return (
                <Done isDone={true}>{percentage}% dos hábitos concluídos</Done>
            )
        }
        return (
            <Done isDone={false}>Nenhum hábito concluído ainda</Done>
        )
    }

    function checkDaily(id, done) {
        if (done) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, token)
        } else
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, token)
                .then(console.log(""))
                .catch(err => console.log(err))
    }

    return (
        <>
            {habits ? (countDone()) : ""}
            {habits?.map((habit, index) =>
                <Card key={index} check={habit.done}>
                    <div>
                        <h3>{habit.name}</h3>
                        <span>Sequência atual: <Streak isDone={habit.done}>{habit.currentSequence} dias</Streak></span>
                        <br></br>
                        <span>Seu recorde: <Record streak={habit.currentSequence >= habit.highestSequence ? true : false}>{habit.highestSequence} dias</Record></span>
                    </div>
                    <div>
                        <ion-icon onClick={() => checkDaily(habit.id, habit.done)} name="checkbox"></ion-icon>
                    </div>
                </Card>
            )}
        </>
    )
}

const Done = styled.div`
        font-weight: 400;
        font-size: 18px;
        color: ${props => props.isDone ? "#8FC549" : "#BABABA"};
`

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px;
    margin: 10px;

    h3 {
        margin: 0 0 10px;
        font-weight: 400;
        font-size: 20px;
    }

    span {
        font-size: 13px;
    }

    ion-icon {
        color: ${props => props.check ? "#8FC549" : "#EBEBEB"};
        font-size: 70px;
    }
`

const Streak = styled.span`
    color: ${props => props.isDone ? "#8FC549" : "#000000"};
    font-weight: 400;
`

const Record = styled.span`
    color: ${props => props.streak ? "#8FC549" : "#000000"};
    font-weight: 400;
`