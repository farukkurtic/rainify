export default function Header(props) {
    return (
        <nav className="navbar">
            <i className="fa-solid fa-road" onClick={() => props.onClick("street")}></i>
            <i class="fa-solid fa-fire-flame-curved" onClick={() => props.onClick("room")}></i>
            <i className="fa-brands fa-pagelines" onClick={() => props.onClick("woods")}></i>
            <i className="fa-solid fa-mountain-city" onClick={() => props.onClick("city")}></i>
        </nav>
    );
}