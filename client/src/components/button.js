export default function Button(props) {
    return (
        <a href="#" className="button-link">
            <button className="download-button">
                <div className="button-icon">
                    <i className={`fa-brands fa-${props.logo}`}></i>
                </div>
                <div className="button-text">
                    <p>Download on the <br /> {props.store}</p>
                </div>
            </button>
        </a>
    );
}
