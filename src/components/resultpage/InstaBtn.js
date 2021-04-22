import { SnsLink } from "../../pages/Result";
import { Link } from 'react-router-dom';

export default function InstaBtn({ title }) {
    return (
        <SnsLink color='red'>
            <Link to={"/InstaSns/" + title}>
                <img src={process.env.PUBLIC_URL + `/images/icon_sns0.png`} alt="instagram"/>
            </Link>
        </SnsLink>
    )
}