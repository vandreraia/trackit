import styled from 'styled-components';
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { useState, useContext, useEffect } from "react";
import MyHabit from './MyHabit';
import TokenContext from '../../contexts/TokenContext';
import axios from 'axios';
import MapDays from './MapDays';


export default function Habits() {
    const [habitList, setHabitList] = useState([]);
    const [myHabits, setMyHabits] = useState();
    const { token } = useContext(TokenContext);
    const [showHabit, setShowHabit] = useState(false);
    const [habit, setHabit] = useState();
    const [loading, setLoading] = useState(false);
    const letters = ["D", "S", "T", "Q", "Q", "S", "S"];

    console.log(myHabits, habitList)
    function postHabit() {
        const body = {
            name: habit,
            days: habitList
        };
        setLoading(true)
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            body, token);
        promise.then(() => {
            setLoading(false);
            setShowHabit(false);
            setHabitList([])
        }
        )
        promise.catch(() =>
            console.log("habitpost error"))
    }


    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", token)
            .then((res) =>
                setMyHabits(res.data)
            )
            .catch(err => console.log("getHabit error", err))
    }, [myHabits])

    return (
        <Container>
            <Header />
            <AddHabit>
                <p>Meus hábitos</p>
                <button onClick={() => setShowHabit(true)}>
                    <ion-icon color="#FFFFFF" name="add-outline"></ion-icon>
                </button>
            </AddHabit>
            {showHabit ?
                <Habit>
                    <input disabled={loading ? true : false} type="text" placeholder='nome do hábito' onChange={e => setHabit(e.target.value)}></input>
                    <div>
                        {letters.map((day, index) =>
                            <MapDays day={day} key={index} nDay={index} habitList={habitList} setHabitList={setHabitList} />
                        )}
                    </div>
                    <div>
                        <Button>Cancelar</Button>
                        <Button onClick={() => postHabit()} bg={true}>Salvar</Button>
                    </div>
                </Habit> : ""
            }

            {(myHabits && myHabits.length !== 0)
                ? myHabits.map((habit, index) =>
                    <MyHabit key={index} id={habit.id} habit={habit.name} selectedDays={habit.days} />
                )
                : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
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