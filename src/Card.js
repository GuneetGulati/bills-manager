import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBCardText, MDBCardLink } from 'mdb-react-ui-kit';

 function Card({description,category,amount,date,id,remove ,openEdit}) {
  return (
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardBody>
        <MDBCardTitle>{description}</MDBCardTitle>
        <MDBCardSubTitle>{category}</MDBCardSubTitle>
        <MDBCardSubTitle>Amount :<b> ₹ {amount}</b></MDBCardSubTitle>
        <MDBCardSubTitle>Date : <b> {date}</b></MDBCardSubTitle>
        
        <MDBCardLink onClick={()=>remove(id)} >Remove</MDBCardLink>
        <MDBCardLink onClick={(e)=>openEdit(e , id)} >Edit</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Card;