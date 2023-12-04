import { Col, Row } from "reactstrap";
function LinhaDica({img,titulo,descricao}) {
    return (
        <div>
            <Row>
                <Col>
                    <img src={img} className="img-fluid"></img>
                </Col>
                    
                <Col>
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                </Col>
            </Row>
        </div>

    )
}

export default LinhaDica;