import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function Calculation() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Calculation</u></h2>
<Form>
    <Form.Field>
      <label >Frieght Charges</label>
      <input placeholder='Frieght Charges' />
    </Form.Field>

    <Form.Field>
      <label >Forwarding Company = Dollar Rate x No of Baskets x 9 x Charges Per Kg $</label>
      <input placeholder='' />
    </Form.Field>
    
    <h3 style={{marginRight:"200px"}}><u>DHC</u></h3> 

    <Form.Field>
      <label >DHC = Chg per Kg x 9 x Total waybill Qty</label>
      <input placeholder='' />
    </Form.Field>
<Form.Field>
<Checkbox label='Note: If answer is less than 3000 charge 3000' />
</Form.Field>
    <Button primary>Submit</Button>
  </Form>

 

        </Container>
    </div>
  )
}

export default Calculation;