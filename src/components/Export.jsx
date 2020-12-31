import React from 'react';
import './../App.css';

import { Form , Button, Checkbox, Container} from 'semantic-ui-react';



function Export() {
  const [open, setOpen] = React.useState(false)
  return(
    <div className="container">
        <Container >
<h2 style={{marginRight:"200px"}}><u>Suplierwise</u></h2>
<Form>

<label><b> Date</b></label>
            <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="1880-01-01" max="2080-12-31"/>
    <Form.Field>
      <label >Suplier </label>
      <input placeholder='Suplier ' />
    </Form.Field>

    <Form.Field>
      <label >Betal Price </label>
      <input placeholder='Betal Price ' />
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
                                     No. of KK   
                                    </th>
                                </tr>


                                <tr>
                                    <td>1</td>
                                    <td>ZAAZ International</td>
                                    <td>0017000102465</td>
                                    
                                    
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td></td>
                                    <td></td>
                                    
                                    
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td></td>
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

export default Export;


