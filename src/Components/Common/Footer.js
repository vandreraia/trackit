import styled from 'styled-components';
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer({ percentage }) {

    return (
        <>
            <Invisible></Invisible>
            <Container>
                <Link to="/habit">
                    <p>Hábitos</p>
                </Link>
                <Link to="/today">
                    <div>

                        <CircularProgressbar value={percentage} text={`Hoje`} backgroundPadding={10}
                            styles={buildStyles({
                                textSize: "18px",

                                pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                                textColor: 'black',
                                trailColor: '#52B6FF',
                                backgroundColor: '#52B6FF',
                            })}
                        />
                    </div>
                </Link>
                <Link to="/history">
                    <p>Histórico</p>
                </Link>
            </Container>
        </>
    )
}

const Invisible = styled.div`
    height: 120px;
`
const Container = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
        color: #52B6FF;
    }
    
    a {
        text-decoration: none;

    }
    div {
        width: 100px;
        /* background-color: #52B6FF; */
    }
`