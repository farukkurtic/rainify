import Button from "./button";

export default function Download() {
    return (
        <div className="button-div">
            <Button logo="apple" store="App store"/>
            <Button logo="google-play" store="Play Store"/>
        </div>
    );
}