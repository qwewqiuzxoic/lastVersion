import { useEffect, useRef } from 'react';
import styled from "styled-components";


const QText = styled.div`
    position:absolute;
    top:50%;
    left:0;
    right:0;
    transform:translateY(-50%);
    font-size: ${({theme}) => theme.fontSizes.large};
    text-align:center;
    //margin-top:10px;
    opacity: 0;
    transition: all ease 0.8s;
    @media (min-width: ${props => props.theme.deviceSizes.XL}px) {
        font-size: 28px;
    }
`
const QNum = styled.div`
    font-size: ${({theme}) => theme.fontSizes.title};
    text-align:center;
    @media (min-width: ${props => props.theme.deviceSizes.XL}px) {
        font-size: 28px;
    }
    @media ${props => props.theme.device.L} {
        font-size:20px;
    }
`

export default function Question({ num, text }) {
    const show_1 = useRef();
    const str = text.replaceAll("&lt;", "<").replaceAll("&gt;", ">");

    useEffect(() => {
        show_1.current.style.marginTop = "20px";
        show_1.current.style.opacity = "0";
        show_1.current.style.marginTop = "0";
        show_1.current.style.opacity = "1";
    })
    return (
        <QText ref={show_1}>
            <QNum>Q{num}.</QNum>
            {
                str.split('<br />').map( Text => {
                    return (<>{Text}<br/></>)
                })
            }
        </QText>
    )
}