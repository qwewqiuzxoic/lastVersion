import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initstate } from '../redux/testFn';

import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    max-width: ${({theme}) => theme.deviceSizes.XL}px;
    min-height:100vh;
    margin: 0px auto;
    background:  ${`url(${process.env.PUBLIC_URL}/images/bg_grid.jpg) no-repeat center`};
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
        padding:10% 0;
        width:80%;
        
    }
`

export default function Loading({history}) {
    const Vstate = useSelector(state => state.testFn);
    const value_J_P = Vstate.value_J>Vstate.value_P? "J":"P";
    const value_T_F = Vstate.value_T>Vstate.value_F? "T":"F";
    const value_E_I = Vstate.value_E>Vstate.value_I? "E":"I";
    const last_value = value_E_I+value_T_F+value_J_P;
    useEffect(() => {
        setTimeout(()=>{
             history.push("/Result/"+last_value);
        },2500)
    })
    return (
        <Wrapper>
            <img src={process.env.PUBLIC_URL + `/images/loading.gif`} alt="loading"/>
        </Wrapper>
    );
}