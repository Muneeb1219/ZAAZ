import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function CalculationFactor() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>CalculationFactor</u></h2>
<Form>
    <Form.Field>
      <label >Invoice Value</label>
      <input placeholder='Invoice Value' />
    </Form.Field>

    <Form.Field>
      <label >Net Weight/Bucket</label>
      <input placeholder='Net Weight/Bucket' />
    </Form.Field>

    <Form.Field>
      <label >Handling Charges</label>
      <input placeholder='Handling Charges' />
    </Form.Field>

    <Form.Field>
      <label >DHC Charges/Kg</label>
      <input placeholder='DHC Charges/Kg' />
    </Form.Field>

    <Form.Field>
      <label >Waybill Charges $</label>
      <input placeholder='Waybill Charges $' />
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

export default CalculationFactor;