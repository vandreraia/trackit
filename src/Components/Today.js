
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import dayjs from 'dayjs';
import MyHabitContext from '../contexts/MyHabitContext';
import TokenContext from '../contexts/TokenContext';
import MyHabit from "./MyHabit";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Today() {
    const { myHabits, setMyHabits } = useContext(MyHabitContext);
    const { token, setToken } = useContext(TokenContext);
    let today = dayjs().get('day');
    let date = dayjs().get('date');
    let month = dayjs().get('month');

    useEffect((event) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then((res) =>
                setMyHabits(res.data)
            )
            .catch(err => console.log("getHabit error", err))
    }
    )
    return (
        <>
            <Header />
            {today}, {date}/{month}
            <p>Nenhum hábito concluído ainda</p>
            {myHabits.map((habit, index) => 
                <MyHabit key={index} habit={habit.name} />
            )}
            <Footer />
        </>
    )
}