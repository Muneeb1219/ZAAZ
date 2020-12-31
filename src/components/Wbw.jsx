import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function Wbw() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Waybillwise</u></h2>
<Form>

<label><b> Date</b></label>
            <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="1880-01-01" max="2080-12-31"/>
    <Form.Field>
      <label >Dollar Rate </label>
      <input  type="number"placeholder='Dollar Rate  ' />
    </Form.Field>

    <Form.Field>
      <label >No. of Waybills </label>
      <input placeholder=' No. of Waybills ' />
    </Form.Field>

    <Form.Field>
      <label >Flight </label>
      <input placeholder='Flight ' />
    </Form.Field>

    <Form.Field>
      <label >WayBill No. </label>
      <input type="number" placeholder='WayBill No. ' />
    </Form.Field>

    <Form.Field label='Destiation' control='select'>
          
          <option >Frieght/Cargo</option>
          <option >Cargo Only</option>
          <option >Frieght Only</option>
          <option >Third Party</option>
      </Form.Field>

      <Form.Field label='Forwarder' control='select'>
          
          <option >Frieght/Cargo</option>
          <option >Cargo Only</option>
          <option >Frieght Only</option>
          <option >Third Party</option>
      </Form.Field>
    
           
         
            
<Form.Field>
<Checkbox label='I agree to the Terms and Conditions' />
</Form.Field>
    <Button primary>Submit</Button>
  </Form>

  <div className="table-box">
                            <table className="table-border">
                                <tr>
                                    <th className="table-heading-bg-colour">
                                   Mark
                                    </th>

                                    <th className="table-heading-bg-colour">
                                   No. of Bucket
                                    </th>

                                    <th className="table-heading-bg-colour">
                                     Types  
                                    </th>
                                </tr>


                                <tr>
                                    <td>AAA</td>
                                    <td>20</td>
                                    <td></td>
                                    
                                    
                                </tr>

                                <tr>
                                    <td>BBB</td>
                                    <td>15</td>
                                    <td></td>
                                    
                                    
                                </tr>

                                <tr>
                                    <td>CCC</td>
                                    <td>15</td>
                                    <td></td>
                                    
                                    
                                </tr>

                                <tr>
                                    <td>111</td>
                                    <td>10</td>
                                    <td></td>
                                    
                                    
                                </tr>
                            </table>
                        </div>

                        <div className="button-box">
                            <Button  primary className="btton-custom-style">Edit</Button>
                            <Button primary  className="btton-custom-style">Save</Button>
                            <Button danger  className="btton-custom-style">Delete</Button>
                        </div>

 

        </Container>
    </div>
  )
}

export default Wbw;

