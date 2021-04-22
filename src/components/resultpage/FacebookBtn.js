import { SnsLink } from "../../pages/Result";

export default function FacebookBtn({ title }) {
    const url = encodeURIComponent(window.location.href);
    const title2 = encodeURIComponent(title);
    const sendLink = () => {
        window.open('http://www.facebook.com/sharer.php?u=' + url + '&t=' + title2);
    }
    return (
        <SnsLink color='green' onClick={sendLink}>
            <img src={process.env.PUBLIC_URL +`/images/icon_sns2.png`} alt="facebook"/>
        </SnsLink>
    )
} 