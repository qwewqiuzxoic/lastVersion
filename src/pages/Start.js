import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { initstate } from '../redux/testFn';
import Button from '../components/startpage/Button';

import styled from "styled-components";

const Wrapper = styled.div`
    position:relative;
    width:100%;
    max-width: ${({theme}) => theme.deviceSizes.XL}px;
    background: ${`url(${process.env.PUBLIC_URL}/images/bg_grid.jpg) repeat-y top center`};
    min-height:100vh;
    margin: 0px auto;
    img{
        position:relative;
        z-index:1;
        width:100%;
    }
    &:before{
            position:absolute;
            bottom:0;
            content:'';
            width:100%;
            height:30%;
            background: ${({theme}) => theme.colors.yellow};
        }
`

export default function Start() {
    const dispatch = useDispatch();
    const initState = () => {
        dispatch(initstate());
    }
    useEffect(() => {
        initState();
    })
    return (
        <Wrapper>
            <img src={process.env.PUBLIC_URL +"/images/bg_start.png"} alt="테스트 시작하기"/>
            <Button text="테스트 시작하기" />
        </Wrapper>
    );
}