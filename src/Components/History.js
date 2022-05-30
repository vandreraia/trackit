
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

export default function History() {

    function formatDate(date) {
        console.log(date)
    }
    return (
        <>
            <Header />
            <Topo>Histórico</Topo>
            <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>
            <Calendar 
            onClickDay={(value, event) => alert('Clicked day: ', value)}
            formatDay={(locale, date) => formatDate(date, 'd')}
            />
            <Footer />
        </>
    )
}

const Topo = styled.h3`
font-size: 23px;
color: #126BA5;
font-weight: 400;

`

// h4 {
    
//     font-weight: 400;
//     font-size: 18px;
//     color: #BABABA;
// }