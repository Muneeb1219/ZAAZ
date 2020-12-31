import React from 'react';
import './../App.css';

import { Form , Button,  Container} from 'semantic-ui-react';



function SearchComponent() {
  return(
    <div className="container"> 

<Container>
   <h1>Search</h1>
   <Form.Field>
      <label >Search</label>
      <input placeholder='Search' />
    </Form.Field>

    <Button primary>Submit</Button>
    </Container>
    </div>
  )
}

export default SearchComponent;