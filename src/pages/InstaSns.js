
export default function InstaSns({ match }) {
    const { data } = match.params;

    return (
        <div>
            <img src={process.env.PUBLIC_URL + `/images/instagram/${data}.jpg`} alt="instagram photo"/>
        </div>
    )
}