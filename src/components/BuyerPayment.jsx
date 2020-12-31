

import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function BuyerPayment() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Buyer Payments</u></h2>
<Form>

<label><b> Date</b></label>
            <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="1880-01-01" max="2080-12-31"/>
    <Form.Field>
      <label >Buyer</label>
      <input  placeholder='Buyer  ' />
    </Form.Field>

    <Form.Field>
      <label >Payment Mode</label>
      <input placeholder=' Payment Mode ' />
    </Form.Field>

    <Form.Field>
      <label >Currancy</label>
      <input placeholder='Currancy' />
    </Form.Field>

    <Form.Field>
      <label >Amount </label>
      <input  placeholder='Amount  ' />
    </Form.Field>

    <Form.Field>
      <label >Conversion Rate</label>
      <input  placeholder='Conversion Rate ' />
    </Form.Field>
    <Form.Field>
      <label >BankCharges</label>
      <input  placeholder='BankCharges' />
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

export default BuyerPayment;