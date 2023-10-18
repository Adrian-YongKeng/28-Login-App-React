import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function Login() {
    const [username, setUsername ] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login (){
        const isCorrectUsername = username === "Adrian" || username ==="adrian@email.com";
        const isCorrectPassword = password === "123";
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("123");
            alert("Login successful!")
            navigate("/dashboard");
        } else {
            alert("Wrong username or password.");
        }

    }

  return (
    <Container>
        <h1 className='my-3'>Login to your account</h1>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="adrian@email.com || Adrian"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
             We&apos;ll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password is 123" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
        </Form.Group>
      
        <Button variant="primary" onClick={login} >
            Login
        </Button>
        </Form>
    </Container>
  );
}

