import Button from 'react-bootstrap/Button';

function ContinentSelector(props) {

    function handleChecked(event){
        props.onChange(currentList => [...currentList, event.target.value]); //appending checked continent to the usestate list in app.js
    }

    function handleClicked(event){
        const checkboxList = document.querySelectorAll('input[type="radio"]')
        checkboxList.forEach(box => box.checked = false); //setting all the radio boxes to false
        props.onClick([]); //emptying the usestate list in app.js
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "20px" }}>
            <label style={{padding: "10px"}}>
                <input type="radio" name="Africa" className="check" value="Africa" onChange={handleChecked}/>
                Africa
            </label>
            <label style={{padding: "10px"}}>
                <input type="radio" name="Asia" className="check" value="Asia" onChange={handleChecked}/> 
                Asia
            </label>
            <label style={{padding: "10px"}}>
                <input type="radio" name="Europe" className="check" value="Europe" onChange={handleChecked}/> 
                Europe
            </label>
            <label style={{padding: "10px"}}>
                <input type="radio" name="North America" className="check" value="North America" onChange={handleChecked}/> 
                North America
            </label>
            <label style={{padding: "10px"}}>
                <input type="radio" name="Oceania" className="check" value="Oceania" onChange={handleChecked}/> 
                Oceania
            </label>
            <label style={{padding: "10px"}}>
                <input type="radio" name="South America" className="check" value="South America" onChange={handleChecked}/> 
                South America
            </label>

            <Button as="input" type="reset" value="Reset" onClick={handleClicked}/>
        </div>
    );
}

export default ContinentSelector;