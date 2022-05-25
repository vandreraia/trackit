
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import dayjs from 'dayjs';

export default function Today() {
    let today = dayjs().get('day');
    let date = dayjs().get('date');
    let month = dayjs().get('month');

    console.log(today)
    return (
        <>
        <Header />
            {today}, {date}/{month}
            <p>Nenhum hábito concluído ainda</p>
        <Footer />
        </>
    )   
}