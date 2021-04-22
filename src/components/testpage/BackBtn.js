import styled from "styled-components";

const Btn = styled.div`
    width:26px;
    height:26px;
    background:  ${`url(${process.env.PUBLIC_URL}/images/btn_back.png) no-repeat center`};
    background-size:100%;
    cursor:pointer;
    margin-right: 12px;
`

export default function BackBtn({ onMinus }) {

    return (
        <Btn onClick={onMinus}>
        </Btn>
    )
}