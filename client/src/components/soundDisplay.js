export default function SoundDisplay(props) {
    return (
        <div className="sound-display" onClick={props.onClick}>
            <h1>{props.soundName}</h1>
            <h3>{props.soundDescription}</h3>
        </div>
    );
}