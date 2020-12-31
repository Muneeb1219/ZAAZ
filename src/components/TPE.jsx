import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function TPE() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Third Party Exporters</u></h2>
<Form>
    

    <Form.Field>
      <label >Company Name</label>
      <input placeholder='Buyer Name' />
    </Form.Field>

    
           
         
            
<Form.Field>
<Checkbox label='I agree to the Terms and Conditions' />
</Form.Field>
    <Button primary>Submit</Button>
  </Form>

 

        </Container>
    </div>
  )
}

export default TPE;