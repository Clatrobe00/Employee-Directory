import Button from 'react-bootstrap/Button';

const SortButton = (props) => (
    <Button onClick={props.onClick}>
        {props.children}
    </Button>
)

export default SortButton;