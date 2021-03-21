import React, { Component } from 'react'
import './PhoneCard.css'
import { Card } from 'react-bootstrap'

class PhoneCard extends Component {

    render() {
        const { phone } = this.props
        if (!phone) return (<div></div>)

        return (
            <div className="phone-card">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'http://localhost:5001/images/' + phone.imageFileName} />
                    <Card.Body>
                        <Card.Title>{phone.name}</Card.Title>
                        <Card.Text>
                            Manufactured by: {phone.manufacturer}
                        </Card.Text>
                        <Card.Text>
                            Description: {phone.description}
                        </Card.Text>
                        <Card.Text>
                            Color: {phone.color}
                        </Card.Text>
                        <Card.Text>
                            Price: {phone.price}
                        </Card.Text>
                        <Card.Text>
                            Screen: {phone.screen}
                        </Card.Text>
                        <Card.Text>
                            Processor: {phone.processor}
                        </Card.Text>
                        <Card.Text>
                            Ram: {phone.ram}
                        </Card.Text>
                    </Card.Body>
                </Card>



            </div>
        )
    }
}

export default PhoneCard