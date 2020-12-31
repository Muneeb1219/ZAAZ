import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function ConsignmentDetail() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Consignment Details</u></h2>
<Form>
    <Form.Field>
      <label >Consignment Name</label>
      <input placeholder='Suplier Name' />
    </Form.Field>

    <Form.Field>
      <label >Address</label>
      <input placeholder='Address' />
    </Form.Field>

    <Form.Field>
      <label >Consignment Bank/Address</label>
      <input placeholder='Consignment Bank/Address' />
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

export default ConsignmentDetail;