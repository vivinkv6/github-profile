import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards({userDetails}) {
  return (
    <Card style={{ width: '18rem',marginTop:"100px",color:'white' }} className="bg bg-dark">
      <Card.Img variant="top" src={userDetails.avatar_url}  style={{borderRadius:'50%',padding:'10px'}}/>
      <Card.Body>
        <Card.Title>{userDetails.name}</Card.Title>
        <Card.Text>
          {userDetails.bio}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush ">
        <ListGroup.Item className='bg bg-dark'><button className='btn btn-secondary'>Followers: {userDetails.followers}</button>
</ListGroup.Item>
        <ListGroup.Item className='bg bg-dark'><button className='btn btn-secondary ms-0'>Following: {userDetails.following}</button></ListGroup.Item>
        <ListGroup.Item className='bg bg-dark'><button className='btn btn-secondary'>Repositories: {userDetails.public_repos}</button></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={userDetails.html_url}>GitHub URL</Card.Link>
        
      </Card.Body>
    </Card>
  );
}

export default Cards;
