import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Comment = (props) => {
    function convertTimestamp(timestamp) {
        // TODO: Implement
    }

    return (
        <Row>
            <Row>
                <Col>{props.comment.author}</Col>
                <Col>{props.comment.blockTimestamp}</Col>
            </Row>
            <br/>
            <Row>
                {props.comment.content}
            </Row>
        </Row>
    );
}

export default Comment;