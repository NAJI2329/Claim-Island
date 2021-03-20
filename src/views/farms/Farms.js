import React, { useState } from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Container, Row, Col
} from 'reactstrap';

const Farms = () => {
    return <div> 
        <div>Farms</div>
        <Row>
            <Col sm="2">
                <Card>
                    <CardImg top width="100%" src="https://via.placeholder.com/318" alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>

    </div>
};

export default Farms;