
import MyHabitContext from '../contexts/MyHabitContext';
import { useState, useEffect, useContext } from "react";
import styled from 'styled-components';
import MapDays from './MapDays';

export default function MyHabit({ habit, selectedDays }) {
    const { myHabits, setMyHabits } = useContext(MyHabitContext);
    const letters = ["D", "S", "T", "Q", "Q", "S", "S"];
    console.log(selectedDays)
    return (
        <Habit>
            <div>{habit}</div>
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
    div:nth-child(2) {
        margin: 10px 0 30px 0;
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