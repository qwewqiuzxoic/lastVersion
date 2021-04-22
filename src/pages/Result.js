import { useSelector, useDispatch } from 'react-redux';
import BestWorst from '../components/resultpage/BestWorst';
import Data from '../ResultData/Data.json';
import InstaBtn from '../components/resultpage/InstaBtn';
import KakaoBtn from '../components/resultpage/KakaoBtn';
import FacebookBtn from '../components/resultpage/FacebookBtn';


import styled from "styled-components";
import { Redirect } from 'react-router';

const Wrapper = styled.div`
    width:100%;
    max-width: ${({ theme }) => theme.deviceSizes.XL}px;
    min-height:100vh;
    margin: 0px auto;
    background: ${`url(${process.env.PUBLIC_URL}/images/bg_grid.jpg) repeat-y top center`};
    background-size:100%;
    padding:${({ theme }) => theme.deviceSizes.XL /14}px 5% ${({ theme }) => theme.deviceSizes.XL / 10}px;
`
const ResultTop = styled.div`
    width:100%;
    margin: 0px auto;
    max-width: ${({ theme }) => theme.deviceSizes.XL}px;
    margin: 0px auto;
    img{
        vertical-align:middle;
        width:100%;
    }
`
const ResultDesc = styled.div`
    position:relative;
    border:2px solid ${({ theme }) => theme.colors.black};
    border-radius:14px;
    background: ${({ theme }) => theme.colors.yellow};
    margin-bottom:80px;
    padding: 14% 10%;
    word-break:keep-all;
    line-height:1.8;
    font-family:"omnigothic", "sunflower",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size:${({ theme }) => theme.fontSizes.normal};
    @media (min-width: ${props => props.theme.deviceSizes.XL}px) {
        font-size: 20px;
    }
    @media ${props => props.theme.device.L} {
        font-size:14px;
        margin-bottom:60px;
        border:1.5px solid ${({ theme }) => theme.colors.black};
    }
    p{
        margin-bottom:24px;
        font-size:${({ theme }) => theme.fontSizes.title};
        @media (min-width: ${props => props.theme.deviceSizes.XL}px) {
            font-size: 28px;
        }
    }
    img{
        position:absolute;
        top:-5%;
        left:0;
        right:0;
        margin:0 auto;
        width:14%;
        max-width: 84px;
        height:auto;
        @media ${props => props.theme.device.L} {
            top:-4%;
        }
        @media ${props => props.theme.device.S} {
            top:-3%;
        }
    }
    li{
        list-style: disc;
        margin-left: 14px;
        padding-bottom:16px;
        line-height:1.4;
        &:last-child{
            padding-bottom:0;            
        }
    }
`
const ResultBtm = styled.div`
    display:flex;
    justify-content:space-between;
`

const SnsWrap = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:24px 0;
`
export const SnsLink = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:54px;
    height:54px;
    margin-right:-8px;
    border-radius:27px;
    border:2px solid ${({ theme }) => theme.colors.black};
    background: ${props => props.theme.colors[props.color]};
    cursor:pointer;
    img{
        width:60%;
        height:auto;
        margin:0 auto;
    }
    @media ${props => props.theme.device.M} {
        width:44px;
        height:44px;
        margin-right:-6px;
        border-radius:22px;
    }
`
const VideoWrap = styled.div`
    position:relative;
    background: ${`url(${process.env.PUBLIC_URL}/images/bg_video.png) no-repeat center`};
    background-size:100%;
    width:90%;
    margin:12% auto;
    padding-bottom:76%;
    iframe{
        position:absolute;
        top:23.5%;
        left:0;
        right:0;
        margin:0 auto;
        border:2px solid ${({ theme }) => theme.colors.black};
        box-shadow: 0 0 0 2px inset;
    }
`
const TitImg = styled.div`
    width:60%;
    margin:0 auto;
`
export default function Result({ match, history }) {
    const total = useSelector(state => state.testFn.total)
    const { result } = match.params;


    return (
        <>
        <ResultTop>
                <img src={process.env.PUBLIC_URL + `/images/instagram/${Data[result].name}.jpg`} alt={Data[result].subtit}/>
            </ResultTop>
        <Wrapper>
            {/* <ResultTop>
                <img src={process.env.PUBLIC_URL + `/images/result_${Data[result].name}.png`} alt={Data[result].subtit}/>
            </ResultTop> */}
            <ResultDesc>
                <img src={process.env.PUBLIC_URL + `/images/result_card.png`} alt="테스트결과"/>
                <p>'{Data[result].dessert}'를 닮은 당신!</p>
                {/* {Data[result].text} */}
                <ul>
                {
                    Data[result].text.map( text => {
                        return (<li>{text}</li>)
                    })
                }
                </ul>
            </ResultDesc>
            <ResultBtm>
                <BestWorst text="나랑 잘맞는 친구" name="best" history={history} type={Data[result].best} />
                <BestWorst text="나랑 안맞는 친구" name="worst" history={history} type={Data[result].worst} />
            </ResultBtm>
            <VideoWrap>
                <iframe width="93%" height="62.5%" src="https://www.youtube.com/embed/6_VGvdE-7nk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen marginheight="0" marginwidth="0" topmargin="0" title="teaser"></iframe>
            </VideoWrap>
            <TitImg>
                <img src={process.env.PUBLIC_URL + `/images/tit_share.png`} alt="프렌즈와 결과 공유하기" />
            </TitImg>
            <SnsWrap>
                <InstaBtn title={Data[result].name} />
                <KakaoBtn title={Data[result].title} />
                <FacebookBtn />
            </SnsWrap>
        </Wrapper>
        </>
    )
    // if (total < 8) {
    //     return (
    //         <div>
    //             {Data[0].Title}
    //             {Data[0].Text}
    //         </div>
    //     );
    // } else if (total < 10) {
    //     return (
    //         <div>
    //             {Data[1].Title}
    //             {Data[1].Text}
    //         </div>
    //     );
    // } else if (total === 10) {
    //     return (
    //         <div>
    //             {Data[4].Title}
    //             {Data[4].Text}
    //         </div>
    //     );
    // } else if (total < 12) {
    //     return (
    //         <div>
    //             {Data[2].Title}
    //             {Data[2].Text}
    //         </div>
    //     );
    // } else if (total <= 13) {
    //     return (
    //         <div>
    //             {Data[3].Title}
    //             {Data[3].Text}
    //         </div>
    //     );
    // } else {
    //     <div>
    //         {Data[3].Title}
    //         {Data[3].Text}
    //     </div>
    // }

}