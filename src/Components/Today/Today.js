
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import dayjs from 'dayjs';
import TokenContext from '../../contexts/TokenContext';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Daily from "./Daily";

export default function Today() {
    const [myHabits, setMyHabits] = useState();
    const { token } = useContext(TokenContext);
    const [percentage, setPercentage] = useState(0);
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
    }, [myHabits])

    return (
        <>
            <Header />
            <Container>
                <h3>{today}, {date}/{month}</h3>
                <Daily percentage={percentage} setPercentage={setPercentage} />
            </Container>
            <Footer percentage={percentage} />
        </>
    )
}

const Container = styled.div`

    h3 {
        font-size: 23px;
        color: #126BA5;
        font-weight: 400;
    }
`