import {Card, CardBody, CardTitle, CardText} from 'reactstrap'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function BoasVindas({img,titulo,descricao}) {
    return (
        <div>
            <Card
            className='mb-4 mx-auto d-block'
                style={{
                    width: '18rem',
                    minHeight: '425px'
                }}
            >
                <img
                    alt={titulo}
                    src={img}
                    className='img-fluid'
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>
                    <CardText>
                        {descricao.substring(0,70)}{descricao.length >= 70 && '...'}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default BoasVindas