import type { FC, ReactNode } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

type Props = {
  children: ReactNode;
  footer: string;
  header: string;
};

const MainLayout: FC<Props> = ({ children, footer, header }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={12} lg={10}>
          <Card border="light">
            <Card.Header as="h1" className="text-center">
              {header}
            </Card.Header>
            <Card.Body>{children}</Card.Body>
            <Card.Footer className="text-muted text-end">{footer}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
