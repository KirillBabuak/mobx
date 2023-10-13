import {Nav} from "react-bootstrap";

export const Menu = () => {
    return <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/counter">Counter</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/todo">Todo</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/posts">Posts</Nav.Link>
        </Nav.Item>
    </Nav>
}

