const GenderFilter = (props) => {
    return (
        <div className="input-option">
            <input type="checkbox" name={props.name} id={props.id} defaultChecked={props.checked}  onChange={props.handler}/>
            <label htmlFor={props.id}>{props.name} Clothing</label>
        </div>
    );
}

export default GenderFilter;