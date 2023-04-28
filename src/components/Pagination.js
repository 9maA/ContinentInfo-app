import Pages from 'react-bootstrap/Pagination';

function Pagination(props) {
    
    const items = []

    for(let i = 1; i < props.pageCount+1; i++){
        items.push(<Pages.Item key={i} onClick={handlePagination}>{i}</Pages.Item>)
    }

    function handlePagination(event){
        props.onClick(event.target.text);
        console.log(event.target.text);
    }

    function handlePrev(){
        if(parseInt(props.pageNumber)-1 != 0){
            props.onClick((parseInt(props.pageNumber)-1).toString());
        }
        console.log(props.pageNumber);
    }

    function handleNext(event){
        if(parseInt(props.pageNumber)+1 != 23){
            props.onClick((parseInt(props.pageNumber)+1).toString());
        }
        console.log(props.pageNumber);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Pages>
                <Pages.Prev onClick={handlePrev}/>
                {items}
                
                <Pages.Next onClick={handleNext}/>
            </Pages>
        </div>
    );
}

export default Pagination;