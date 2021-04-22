import styled from "styled-components";

const Box = styled.div`
    position:relative;
    width:48%;
    font-size: ${({theme}) => theme.fontSizes.normal};
    text-align:center;
    @media (min-width: ${props => props.theme.deviceSizes.XL}px) {
        font-size: 24px;
    }
`

const Type = styled.div`
    position:relative;
    background: ${({theme}) => theme.colors.white};
    border:2px solid ${({theme}) => theme.colors.black};
    border-radius:14px;
    @media ${props => props.theme.device.L} {
        border:1.5px solid ${({ theme }) => theme.colors.black};
    }
    p{
        position:absolute;
        display:flex;
        align-items:center;
        justify-content:center;
        vertical-align:middle;
        width:80%;
        padding:10% 0;
        top:-8%;
        left:0;
        right:0;
        margin:0 auto;
        background: ${props => `url(${process.env.PUBLIC_URL}/images/result_${props.name}.png) no-repeat center`};
        background-size:100%;
    }
`
const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:20% 8% 12%;
    text-align:center;

    img{
        width:98%;
        text-align:center;
    }
`

export default function BestWorst({name,  history, type, text }) {
    // const onClick = () => {
    //     history.push("/Result/" + type);
    // }
    return (
        <Box>
            <Type name={name}>
                <p></p>
                <Content>
                    <img src={process.env.PUBLIC_URL +`/images/result_${type}_s.png`} alt="잘맞는친구,안맞는친구"/>
                </Content>
            </Type>
        </Box>
    )
}