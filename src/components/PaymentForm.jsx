

import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function PaymentForm() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Suplier Payments</u></h2>
<Form>

<label><b> Date</b></label>
            <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="1880-01-01" max="2080-12-31"/>
    <Form.Field>
      <label >Suplier</label>
      <input  placeholder='Suplier  ' />
    </Form.Field>

    <Form.Field>
      <label >Amount </label>
      <input placeholder=' Amount ' />
    </Form.Field>

    <Form.Field>
      <label >Payment Mode </label>
      <input placeholder='Payment Mode ' />
    </Form.Field>

    <Form.Field>
      <label >Bank </label>
      <input  placeholder='Bank ' />
    </Form.Field>

    <Form.Field>
      <label >Depositer </label>
      <input  placeholder='Depositer ' />
    </Form.Field>

    <Form.Field>
      <label >Remarks </label>
      <input  placeholder='Remarks ' />
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

export default PaymentForm;