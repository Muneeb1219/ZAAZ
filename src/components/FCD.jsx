import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';

function FCD() {

    const [open, setOpen] = React.useState(false)
    return(
      <div className="container">
          <Container >

          <h3 style={{marginRight:"200px"}}><u>Forwarding Company Detail</u></h3>
<Form>
    <Form.Field>
      <label >Company Name</label>
      <input placeholder='Company Name' />
    </Form.Field>

    <Form.Field>
      <label >Company Address</label>
      <input placeholder='Company Address' />
    </Form.Field>
    
            <Form.Field label='Bank Accounts' control='select'>
          
                <option >Acc No.1</option>
                <option >Acc No.2</option>
                <option >Acc No.3</option>
            </Form.Field>

            <Form.Field>
      <label >Freight Charges - Flight</label>
      <input placeholder='Freight Charges - Flight' />
    </Form.Field>

            
         
            <label><b>Start Date</b></label>
            <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="1880-01-01" max="2080-12-31"/>
<Form.Field>
<Checkbox label='I agree to the Terms and Conditions' />
</Form.Field>
    <Button primary>Submit</Button>
  </Form>

        </Container>
    </div>
  )
}

export default FCD;