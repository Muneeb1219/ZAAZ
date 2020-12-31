import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function BuyerDetail() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Buyer Details</u></h2>
<Form>
    <Form.Field>
      <label >Buyer Category(Freight only/Freight and Cargo/Cargo Only)</label>
      <input placeholder='Buyer Category' />
    </Form.Field>

    <Form.Field>
      <label >Buyer Name</label>
      <input placeholder='Buyer Name' />
    </Form.Field>

    <label><b>Start Date</b></label>
            <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="1880-01-01" max="2080-12-31"/>

    <Form.Field>
      <label >Marks (Multiple Marks)</label>
      <input placeholder='Marks' />
    </Form.Field>

    <Form.Field>
      <label >Status (Active/InActive)</label>
      <input placeholder='Status' />
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

export default BuyerDetail;