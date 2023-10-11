import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Profile ()  {
    const authContext = useContext(AuthContext);

    return (
        <Container className='text-center'>
            <h1 className='my-3 ' >Profile</h1>
            <Row>
                <Col md={12}>
                <Card>
                    <Card.Body>
                        <Card.Title className='mb-4'>This is your Profile</Card.Title>
                        <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque facere a non cum molestiae fugiat recusandae eos earum iure nisi quaerat at similique suscipit, culpa commodi, corrupti, porro dolorem perspiciatis.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos obcaecati voluptatem optio natus ab minima tempore officia libero fugiat saepe inventore fugit blanditiis dignissimos dolor, facilis ipsam. Aperiam, tempore dolore!
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </Col>
          </Row>
        </Container>
    )
}
 