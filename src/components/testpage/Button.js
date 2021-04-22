import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components";

const SlideToTop = keyframes`
  0% {
        transform: translateY(60px);
        opacity: 0;

  }
  100% {
        transform: translateY(0);
        opacity: 1;
  }
`

const Abox = styled.div`
    margin:76px 24px;
    display:flex;
    justify-content:${props => props.position ==='left' ? 'flex-start' : 'flex-end'};
    flex-wrap:nowrap;
    cursor: pointer;
    opacity:0;
    &.active{
        animation-name: ${SlideToTop};
        animation-duration: .3s;
        animation-timing-function: linear; 
        animation-delay: ${props => props.position ==='left' ? '0s' : '.2s'};
        animation-fill-mode: forwards;
    }
    @media ${props => props.theme.device.L} {
        margin:60px 8px;
    }
    img{
        width:24%;
        max-width:140px;
        margin-top:-20px;
        order:${props => props.position ==='left' ? '0' : '2'};
        padding-right:1.5%;
        transform: ${props => props.position ==='left' ? 'none' : 'scaleX(-1)'}; 
    }    
`
const Answer = styled.div`
    width:100%;
    background: ${props => `url(${process.env.PUBLIC_URL}/images/bg_${props.person}.png) no-repeat center`};
    background-size:contain;
    //width:450px;
    font-size: ${({theme}) => theme.fontSizes.normal};
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    transform: ${props => props.position ==='left' ? 'none' : 'scaleX(-1)'}; 
    p{
        transform: ${props => props.position ==='left' ? 'none' : 'scaleX(-1)'}; 
        ${props => props.position ==='left' ? 'padding-left' : 'padding-right'}:20px;
        &.last{
            padding-top:5%;
            padding-bottom:5%;
        }
    }
    @media (min-width: ${props => props.theme.deviceSizes.XL}px) {
        font-size: 20px;
    }
    @media ${props => props.theme.device.L} {
        font-size:14px;
    }
    @media ${props => props.theme.device.M} {
        font-size:12px;
    }
    @media ${props => props.theme.device.S} {
        font-size:10px;
        p{
            ${props => props.position ==='left' ? 'padding-left' : 'padding-right'}:8px; 
        }
    }
`



export default function Button({ person, position, text, onPlus, lastPage, active,  OninsertValue}) {
    const str = text.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    const src = `/images/${person}.png`
    
    if (!lastPage) {
        return (
            <Abox person={person} position={position} onClick={onPlus} className = {active}>
                <img src={process.env.PUBLIC_URL+src} alt='answer'/>
                <Answer person={person} position={position}>
                    <p>
                    {
                    str.split('<br />').map( QText => {
                        return (<span>{QText}<br/></span>)
                    })
                    }
                    </p>
                </Answer>
            </Abox>
        )
    } else {
        return (
            <Link to="/Loading">
                <Abox person={person} position={position} onClick={onPlus} className = {active}>
                    <img src={process.env.PUBLIC_URL+src} alt='answer'/>
                    <Answer person={person} position={position}>
                    <p className="last">
                    {
                    str.split('<br />').map( QText => {
                        return (<span>{QText}<br/></span>)
                    })
                    }
                    </p>
                    </Answer>
                </Abox>
            </Link>

        )
    }

}