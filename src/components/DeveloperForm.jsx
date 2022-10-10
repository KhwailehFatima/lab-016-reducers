import { useReducer } from 'react';
import { developer } from './Developer';
import Card from 'react-bootstrap/Card'
import { Form } from 'react-bootstrap';

function DeveloperForm() {
    const [developers, dispatch] = useReducer(developer, [])

    // console.log(dispatch.payload)

    const handleSubmit = (e) => {
        console.log(e.target.name.value)
        e.preventDefault();
        const name = e.target.name.value;
        const favProgLanguage = e.target.favProgLanguage.value;
        const listOfTechnologies = e.target.listOfTechnologies.value;
        const favFood = e.target.favFood.value;
        const favDrink = e.target.favDrink.value;

        dispatch({
            type: 'ADD_DEVELOPER',
            payload: {
                name: name,
                favProgLanguage: favProgLanguage,
                listOfTechnologies: listOfTechnologies,
                favFood: favFood,
                favDrink: favDrink
            }

        });
    }

    const handleDelete = (event, id) => {
        event.preventDefault();
        dispatch({
            type: 'DELETE_DEVELOPER',
            payload: id
        });
    }

    return (
        <>
            <Card style={{ width: '22rem', justifyContent: 'center', display: 'flex', margin: '10px auto' }}>
                <Card.Header className='developer-info'> Developer Information </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="mb-3" required type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="favProgLanguage">
                            <Form.Label>Your Favourite Programming Language</Form.Label>
                            <Form.Select className="mb-3" aria-label='favProgLanguage' >
                                <option className='input'> Your Favourite Programming Language</option>
                                <option>Javascript</option>
                                <option>MATLAB</option>
                                <option>Java</option>
                                <option>C++</option>
                                <option>PHP</option>
                                <option>C#</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="listOfTechnologies">
                            <Form.Label>Your Favourite Technology</Form.Label>
                            <Form.Select placeholder='Your Favourite Technology' className="mb-3" aria-label='listOfTechnologies' >
                                <option className='input'> Your Favourite Technology</option>
                                <option className="mb-3">React.js</option>
                                <option className="mb-3">Node.js</option>
                                <option className="mb-3">Express.js</option>
                                <option className="mb-3">Next.js</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="favFood">
                            <Form.Label>Favourite Food</Form.Label>
                            <Form.Control className="mb-3" required type="text" placeholder="Enter your  Favourite Food" />
                        </Form.Group>

                        <Form.Group controlId="favDrink">
                            <Form.Label>Favourite Drink</Form.Label>
                            <Form.Control className="mb-3" required type="text" placeholder="Enter your Favourite Drink" />
                        </Form.Group>
                        <button className="mb-3" type="submit">Submit</button>
                    </Form>
                </Card.Body>
            </Card>


            <h2> Developer Data</h2>
            {
                developers.length ? developers.map((developer) => (

                    <Card className='card' key={developer.id} style={{ width: '22rem', justifyContent: 'center', display: 'flex', margin: '10px auto' }}>
                        <br/>
                        <Card.Body>
                            <Card.Title> Developer Name :{developer.name}</Card.Title>
                            <br />
                            <Card.Text>
                                Favourite Propramming Language: {developer.favProgLanguage}
                                <br />
                                Favourite Technology: {developer.listOfTechnologies}
                                <br />
                                Favourite Food: {developer.favFood}
                                <br />
                                Favourite Drink: {developer.favDrink}
                                <br />
                            </Card.Text>
                            <button variant="danger" onClick={(event) => handleDelete(event, developer.id)}>Delete Developer Data</button>

                        </Card.Body>
                    </Card>
                )
                )
                    : <h3 className='empty' >No developers registered</h3>}
        </>
    )
}

export default DeveloperForm;