import React from 'react'
import Ecom from './ecom.png'
import Crm from './crm1.jpg'
import { Card } from 'react-bootstrap'
import './project.css'

const Projects = () => {
  return(
    <>
    <h1 className="pt-3 text-center  pb-3">PROJECTS</h1>
    <div className='projects'>
        <Card className='item'>
    <Card.Title>CRM Project</Card.Title>
  <Card.Img variant="top" src={Crm} style={{width:'670px',height:'400px'}}/>
  <Card.Body>
    <details >
            <summary>More Details</summary>
            <p><strong>Project: Sales +</strong></p>
            <p><strong>Description:</strong>Easy to use software for any business to track Sales,
             Inventory, <br/>Bank Accounts, Supplier & Customer Ledger, Expenses</p>
            <tr>
              <td>
                <strong>Technologies Used:</strong>
              </td>
              <td>
                <li>HTML,CSS And JavaScript</li>
                <li>Bootstrap</li>
                <li>React And Redux</li>
              </td>
            </tr>
          </details>
  </Card.Body>
</Card>
<Card className="item">
<Card.Title>E-Commerce Project</Card.Title>
  <Card.Img variant="top" src={Ecom} style={{width:'670px',height:'400px'}}/>
  <Card.Body>
    <details >
            <summary>More Details</summary>
            <p><strong>Project: EasyDay</strong></p>
            <p><strong>Description:</strong>A Grocery platform for to manage the details of shopping, Payment, Bills.<br/>
This project is very useful for customer can easily buy grocery products<br /> from home through internet</p>
            <tr>
              <td>
              <strong>Technologies Used:</strong>
              </td>
              <td>
                <li>HTML,CSS And JavaScript</li>
                <li>Material UI</li>
                <li>React And Redux</li>
              </td>
            </tr>
          </details>
  </Card.Body>
</Card>
    </div>
    </>
  )
}

export default Projects
