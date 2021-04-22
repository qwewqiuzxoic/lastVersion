import { Link } from 'react-router-dom';
import styled from "styled-components";

const StartBtn = styled.div`
    position:fixed;
    bottom:10%;
    width: 300px;
    height: 80px;
    line-height:80px;
    left:0;
    right:0;
    margin: 0px auto;
    background: ${({theme}) => theme.colors.white};
    text-align:center;
    border: 2px solid ${({theme}) => theme.colors.black};
    border-radius:10px;
    z-index:9;
    a{
        display:block;
        width:100%;
        height:100%;
        font-size: 26px;
        font-weight:bold;
    }
    @media ${props => props.theme.device.L} {
        a{
            font-size:20px;
        }
    }
    @media ${props => props.theme.device.M} {
        width:240px;
        height:68px;
        line-height:68px;
    }
    @media ${props => props.theme.device.S} {
        width:240px;
        height:60px;
        line-height:60px;
        a{
            font-size:16px;
        }
    }
    
`

export default function Button({ text }) {
    return (
        <StartBtn>
            <Link to="/Test">
                {text}
            </Link>
        </StartBtn>
    )
}