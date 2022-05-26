
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import dayjs from 'dayjs';
import MyHabitContext from '../contexts/MyHabitContext';
import TokenContext from '../contexts/TokenContext';
import MyHabit from "./Habit/MyHabit";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

function Daily() {
    const { token } = useContext(TokenContext);
    const [habits, setHabits] = useState();

    useEffect(() => {

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token)
            .then((res) => setHabits(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(habits)

    return (
        <>
            {habits?.map((habit, index) =>
                <Card key={index}>
                    <div>
                        <h3>{habit.name}</h3>
                        <span>Sequência atual: {habit.currentSequence} dias</span>
                        <br></br>
                        <span>Seu recorde: {habit.highestSequence} dias</span>
                    </div>
                    <div>
                        <ion-icon name="checkbox"></ion-icon>
                    </div>
                </Card>
            )}
        </>
    )
}
export default function Today() {
    const { myHabits, setMyHabits } = useContext(MyHabitContext);
    const { token } = useContext(TokenContext);
    let today = dayjs().get('day');
    let date = dayjs().get('date');
    let month = dayjs().get('month');
    month++;

    function setDay() {
        if (today === 0) {
            today = "Domingo";
        } else if (today === 1) {
            today = "Segunda"
        } else if (today === 2) {
            today = "Terça"
        } else if (today === 3) {
            today = "Quarta"
        } else if (today === 4) {
            today = "Quinta"
        } else if (today === 5) {
            today = "Sexta"
        } else if (today === 6) {
            today = "Sabádo"
        }
    }
    setDay()
    useEffect(() => {

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", token)
            .then((res) =>
                setMyHabits(res.data)
            )
            .catch(err => console.log("getHabit error", err))
    }, [])
    return (
        <>
            <Header />
            <Container>

                <h3>{today}, {date}/{month}</h3>
                <h4>Nenhum hábito concluído ainda</h4>
                {/* {myHabits.map((habit, index) => 
                <MyHabit key={index} habit={habit.name} />
            )} */}
                <Daily />
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`

    h3 {
        font-size: 23px;
        color: #126BA5;
        font-weight: 400;
    }

    h4 {
        
        font-weight: 400;
        font-size: 18px;
        color: #BABABA;
    }

`

const Card = styled.div `
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
        color: #EBEBEB;
        font-size: 70px;
    }
`