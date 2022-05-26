
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import dayjs from 'dayjs';
import HabitContext from "../contexts/HabitContext";
import { useState, useEffect, useContext } from "react";


export default function Today() {
    const { habitList, setHabitList } = useContext(HabitContext);
    let today = dayjs().get('day');
    let date = dayjs().get('date');
    let month = dayjs().get('month');

    console.log(habitList)
    return (
        <>
        <Header />
            {today}, {date}/{month}
            <p>Nenhum hábito concluído ainda</p>
        <Footer />
        </>
    )   
}