import React, { Component } from "react";
import Form from "./components/Form/Form.jsx";
import Section from "./components/Section/Section";
import Contacts from "./components/Contacts/Contacts.jsx";

import { nanoid } from "nanoid";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  // formSubbitHandler = (data) => {
  //   console.log(data);
  //   this.setState({ contacts: [data] });
  // };
  nameContactId = nanoid();

  addContacts = (data) => {
    // const contact = {
    //   data,
    // };
    this.setState((prevState) => ({ contacts: [data, ...prevState.contacts] }));
    console.log(this.state.contacts);
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          {/* <Form onSubmit={this.formSubbitHandler} /> */}
          <Form onSubmit={this.addContacts} />
        </Section>

        <Contacts contacts={this.state.contacts} id={this.nameContactId} />
      </>
    );
  }
}

export default App;
