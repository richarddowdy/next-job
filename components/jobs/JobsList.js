import { Card, Button } from "react-bootstrap";

export default function JobsList({ jobs }) {
  return jobs.map((job) => {
    console.log(job);
    return (
      <Card className="mb-4" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{job.company_handle}</Card.Subtitle>
          <Card.Text>{job.id}</Card.Text>
          <Card.Text>{job.salary}</Card.Text>
          <Card.Text>Number of Applicants {job.num_applicants}</Card.Text>
          <Card.Link href="#" className="mr-5">
            Card Link
          </Card.Link>
          <Button>Apply</Button>
        </Card.Body>
      </Card>
    );
  });
}
