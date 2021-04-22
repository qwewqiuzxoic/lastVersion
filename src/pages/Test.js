import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, insertValue } from '../redux/testFn';

import Data from '../Data/Data.json';
import Button from '../components/testpage/Button';
import Question from '../components/testpage/Question';
import Progress from '../components/testpage/Progress';
import BackBtn from '../components/testpage/BackBtn';

import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    max-width: ${({ theme }) => theme.deviceSizes.XL}px;
    min-height:100vh;
    margin: 0px auto;
    background:  ${`url(${process.env.PUBLIC_URL}/images/bg_grid.jpg) repeat-y center`};
    background-size:100%;
    opacity: 0;
    transition: all ease 0.8s;
    padding:${({ theme }) => theme.deviceSizes.XL / 10}px 0;
`
const ViewBox = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.deviceSizes.XL}px;
    overflow: hidden;
`
const ViewTemp = styled.div`
    width: ${props => props.data.length}00%;
    max-width: ${props => props.data.length * props.theme.deviceSizes.XL}px;
    display: flex;
    flex-wrap: nowrap;
    &.active{
        
    }
`
const QBox = styled.div`
    position:relative;
    width:100%;
    height:0;
    padding-top : calc(268 / 646 * 100%);
    background:  ${`url(${process.env.PUBLIC_URL}/images/bg_q.png) no-repeat center`};
    background-size:cover;
`
const PageCount = styled.div`
    position:absolute;
    bottom:6%;
    left:0;
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    font-size: ${({ theme }) => theme.fontSizes.normal};
    @media (min-width: ${props => props.theme.deviceSizes.XL}px) {
            font-size: 20px;
          }
    @media ${props => props.theme.device.L} {
        font-size:14px;
    }
    @media ${props => props.theme.device.S} {
        font-size:12px;
    }
`
const ContentBox = styled.div`
    flex-basis:100%;
    max-width: ${({ theme }) => theme.deviceSizes.XL}px;
    padding:0 .5%;
    @media ${props => props.theme.device.L} {
        padding:0 .2%;
    }
`

export default function Test({ history }) {
    const slideRef = useRef(null);
    const wrapRef = useRef(null);

    const page_count = useSelector(state => state.testFn.page_count)

    const dispatch = useDispatch();
    const onPlus = (cnt, value) => {
        dispatch(increase(cnt));
        dispatch(insertValue(value));
    }
    const OninsertValue = (value) => {
        dispatch(insertValue(value));
    }
    useEffect(() => {
        if (page_count >= 12) {
            history.push("/");
        }
        slideRef.current.style.transition = "all 0.1s ease-in-out";
        slideRef.current.style.transform = `translateX(-${100 / Data.length * page_count}%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        wrapRef.current.style.opacity = "1";
        //console.dir(slideRef)

        // const activeClass = slideRef.children((contBox, i) => {
        //     contBox.classList.remove('active');
        //     slideRef.children[page_count].classList.add('active');
        //     return contBox;
        // }) 

    }, [page_count]);
    const onMinus = () => {
        dispatch(decrease());
    }

    return (

        <Wrapper ref={wrapRef}>
            <ViewBox>
                <ViewTemp data={Data} ref={slideRef}>
                    {Data.map((data, i) => {
                        if (i !== Data.length - 1) {
                            return (
                                <ContentBox key={i}>
                                    <QBox>
                                        <Question num={data.num} text={data.Question} />
                                    </QBox>
                                    <div>
                                        <Button
                                            person={data.image_1}
                                            position='left'
                                            text={data.answer_1}
                                            onPlus={() => { onPlus(1, data.value_1) }}
                                            lastPage={false}
                                            active={i == page_count ? 'active' : ''}
                                        />
                                        <Button
                                            person={data.image_2}
                                            position='right'
                                            text={data.answer_2}
                                            onPlus={() => { onPlus(2, data.value_2) }}
                                            lastPage={false}
                                            active={i == page_count ? 'active' : ''}
                                        />
                                    </div>
                                </ContentBox>
                            )
                        } else {
                            return (
                                <ContentBox key={i}>
                                    <QBox>
                                        <Question num={data.num} text={data.Question} />
                                    </QBox>
                                    <div>
                                        <Button
                                            person={data.image_1}
                                            position='left'
                                            text={data.answer_1}
                                            onPlus={() => { onPlus(1, data.value_1) }}
                                            lastPage={true}
                                            active={i == page_count ? 'active' : ''}
                                        />
                                        <Button
                                            person={data.image_2}
                                            position='right'
                                            text={data.answer_2}
                                            onPlus={() => { onPlus(2, data.value_2) }}
                                            lastPage={true}
                                            active={i == page_count ? 'active' : ''}
                                        />
                                    </div>
                                </ContentBox>
                            )
                        }

                    })}
                </ViewTemp>
            </ViewBox >
            {/* <PageBack>
                {page_count !== 0 && <BackBtn onMinus={() => { onMinus() }} />}
            </PageBack> */}
            <PageCount>
                {page_count !== 0 && <BackBtn onMinus={() => { onMinus() }} />}
                {page_count + 1}/{Data.length}
            </PageCount>
            {/* <Progress count={page_count} total={Data.length} /> */}
        </Wrapper>


    );
}