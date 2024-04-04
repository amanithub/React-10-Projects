import React from  "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";


function App() {
  

  return (
   <div>
    <Navbar/>
    <main className="main_container">
    <Contact/>
    <ContactForm/>
    </main>
    
   </div>
  )
}

export default App
