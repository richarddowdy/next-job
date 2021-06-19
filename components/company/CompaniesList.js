import { Card } from "react-bootstrap";

export default function CompaniesList({ companies }) {
  return companies.map((company) => {
    return (
      <Card className="mb-4" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{company.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{company.handle}</Card.Subtitle>
          <Card.Text>
            {company.id}
            {company.num_employees}
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  });
}
