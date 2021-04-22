import { useEffect } from "react";
import { SnsLink } from "../../pages/Result";

export default function KakaoBtn({ title }) {
    const url = window.location.href;
    useEffect(() => {

    }, [])
    const sendLink = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: title,
                description: '나의 친구 유형은 무엇일까?',
                imageUrl:
                    'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                link: {
                    mobileWebUrl: url,
                    webUrl: url,
                },
            },
            buttons: [
                {
                    title: '심리테스트 하러가기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                }
            ]
        })
    }
    return (
        <SnsLink color='yellow' onClick={() => sendLink()}>
            <img src={process.env.PUBLIC_URL + `/images/icon_sns1.png`} alt="kakaotalk" />
        </SnsLink>
    )
}