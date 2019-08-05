import "bootstrap/dist/css/bootstrap.css";
import Layout from '../components/Layout';
import { ListGroup, ListGroupItem, Media } from 'reactstrap'

const Speakers = () => {
  const speakers = [
    {
      id: "1",
      firstname: "Matt",
      lastname: "Reetz",
      title: "Software Engineer",
      company: "Headway",
      avatar: "https://api.adorable.io/avatars/64/matt",
      biography: "Matt is a coding ninja.",
      email: "matt@headway.io"
    },
    {
      id: "2",
      firstname: "Tim",
      lastname: "Gremore",
      title: "Software Engineer",
      company: "Headway",
      avatar: "https://api.adorable.io/avatars/64/mike",
      biography: "Mike is a coding ninja also.",
      email: "mike@headway.io"
    }
]
  return (
    <Layout>
      <ListGroup>
        {speakers.map(speaker => {
          return (
            <ListGroupItem className="justify-content-between">
              <Media>
                <Media body>
                  <Media heading>
                    {speaker.firstname} {speaker.lastname}
                  </Media>
                  <Media heading>
                    {speaker.title}
                  </Media>
                  {speaker.biography}
                </Media>
              </Media>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  </Layout>);
}

export default Speakers;