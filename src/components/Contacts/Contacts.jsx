// import React, { Component } from "react";
import s from './Contacts.module.css'

function Contacts({ contacts, id }) {
  console.log(id)
  
  
  return contacts.map((contact) => (
   
    <ul className={s.Contacts} >
      <li key = {id}>{contact.name} <span>{contact.number}</span></li>
      
    </ul>
)
    )
  
}

export default Contacts;