import { useSelector } from 'react-redux';

export default function Progress({ count, total }) {
    const wid = (count + 1) * 40;
    const tempStyle = {
        display: "inline-block",
        width: `${100 / total * (count + 1)}%`,
        height: "10px",
        boder: "1px solid black",
        background: "orange",
        transition: "all ease 0.2s"
    }

    return (
        <div>
            <div style={tempStyle}>
            </div>
        </div>

    )
}