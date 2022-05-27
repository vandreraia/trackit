import styled from 'styled-components';
import { useState, useContext } from "react";
import HabitContext from "../../contexts/HabitContext";

export default function MapDays({ day, nDay }) {
    const [clicked, setClicked] = useState(false);
    const { habitList, setHabitList } = useContext(HabitContext);

    function createArr() {
        if (habitList.find(e => e === nDay) === undefined) {
            setHabitList([...habitList, nDay])
        } else {
            setHabitList(habitList.filter(e => e !== nDay))
        }
        setClicked(!clicked)
    }

    return (
        <Days selected={clicked} onClick={() => createArr()}>{day}</Days>
    )
}


const Days = styled.button`
    width: 30px;
    height: 30px;
    margin: 2px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background-color: ${props => props.selected ? "#CFCFCF" : "white"};
    color: ${props => props.selected ? "white" : "#DBDBDB"};
`