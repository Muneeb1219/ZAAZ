import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container,Row, Col,Card,Button, Accordion } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PaymentForm from "./components/PaymentForm";
import IntroductionComponent from "./components/Introduction"
import SearchComponent from "./components/Search"
import  FCD from "./components/FCD"
import ConsignmentDetail from './components/CosignmentDetail';

import BuyerDetail from './components/BuyerDetail';

import  TPE from './components/TPE';
import CalculationFactor from './components/CalculationFactor'


import Calculation from './components/Calculation'

import Export from './components/Export'
import Wbw from './components/Wbw'

import BuyerPayment from "./components/BuyerPayment";

import ForwarderPayment from "./components/ForwarderPayment";

import HandlerPayment from "./components/HandlerPayment";

import TPP from "./components/TPP";
function App() {
  return (
    <div className="App">
      

       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="">ZAAZ International</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
      <Nav.Link href="#login"><b>Login</b></Nav.Link>
      <Nav.Link  href="#Signup">
       SignUp
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                      activeKey="/home"
                      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                      >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                
                <Accordion >

                <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <b>Home</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                  <Nav.Link href="/introduction">Introduction</Nav.Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
                <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <b>Supplier Detail</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                  <Nav.Link href="/generalForm">Add</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <b>Forwarding Company Detail</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                  <Nav.Link href="/fcd">Add</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  <b>Consignment Detail</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                  <Nav.Link href="/consignmentDetail">Add</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  <b>Buyer Detail</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                  <Nav.Link href="/buyerDetail">Add</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  <b>Third Party Exporters</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                  <Nav.Link href="/tpe">Add</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  <b>Calculation Factor</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                  <Nav.Link href="/calculationFactor">Add</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  <b>Calculation </b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                  <Nav.Link href="/calculation">Add</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="8">
                    <b>Exports</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                  <Nav.Link href="/export">Suplierwise</Nav.Link>
                  <Nav.Link href="/wbw">Waybillwise</Nav.Link>
                  <Nav.Link href="/introduction">Handling</Nav.Link>
                  <Nav.Link href="/introduction">Third Party Export</Nav.Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="9">
                    <b>Payment</b>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                  <Nav.Link href="/payment">Suplier Payments</Nav.Link>
                  <Nav.Link href="/buyerPayment">Buyer Payments</Nav.Link>
                  <Nav.Link href="/forwarderPayment">Forwarder Payments</Nav.Link>
                  <Nav.Link href="/handlerPayment">Handler Payments</Nav.Link>
                   <Nav.Link href="/tpp">Third Party Payments</Nav.Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
                </Accordion>

            </Nav.Item>
            
            </Nav>

                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    <Router>
                        <Switch>

          <Route path="/generalForm"> 
            <GeneralForm />
          </Route>
          <Route path="/introduction"> 
            <IntroductionComponent />
          </Route>
          <Route path="/payment">
            <PaymentForm />
          </Route>

          <Route path="/search">
            <SearchComponent />
          </Route>
          <Route path="/fcd">
            <FCD />
          </Route>
          <Route path="/consignmentDetail">
            <ConsignmentDetail />
          </Route>

           <Route path="/buyerDetail">
            <BuyerDetail />
          </Route> 
          <Route path="/tpe">
            <TPE />
          </Route>
          <Route path="/calculationFactor">
            <CalculationFactor />
          </Route>      

          <Route path="/calculation">
            <Calculation />
          </Route> 
          <Route path="/export">
            <Export />
          </Route>      

           <Route path="/wbw">
            <Wbw />
          </Route>  

           <Route path="/buyerPayment">
            <BuyerPayment />
          </Route> 
          <Route path="/forwarderPayment">
            <ForwarderPayment />
          </Route> 

           <Route path="/handlerPayment">
            <handlerPayment />
          </Route> 

          <Route path="/tpp">
            <TPP />
          </Route>          
         
        </Switch>
        </Router>
                    </Col> 
                </Row>

            </Container>


       



    </div>
  );
}

export default App;
