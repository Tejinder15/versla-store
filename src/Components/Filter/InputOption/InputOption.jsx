const InputOption = (props) => {
    return (
        <div className="input-option">
            <input type={props.type} name={props.name} id={props.id}/>
            <label htmlFor={props.id}>{props.title}</label>
        </div>
    );
}

export default InputOption;