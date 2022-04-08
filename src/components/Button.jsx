import "./Button.css";

const Button = ({className, value, buttonClicked}) => {
    return (
        <button className={className} onClick={buttonClicked}>{value}</button>
    );
}

export default Button;