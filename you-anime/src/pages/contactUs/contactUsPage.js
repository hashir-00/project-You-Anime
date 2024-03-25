import React from "react";
import ContactUsApp from "./contactUsApp";
import Todo from "../../components/todo/Todo";

function ContactUsPage() {
  return (
    <div className="app">
      <ContactUsApp />
      <Todo/>
    </div>
  );
}

export default ContactUsPage;