import Button from 'react-bootstrap/Button';



const SortButton = (props) => {

    return (
        <Button name={props.name} onClick={props.onClick}>
            {props.children}
        </Button>
    )    
}





export default SortButton;