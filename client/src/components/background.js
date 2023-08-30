export default function Background(props) {
    return (
        <div className="animated-background">
            <video autoPlay loop muted playsInline className="animated-background" id="background-video">
                <source key={props.src} src={props.src} />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}