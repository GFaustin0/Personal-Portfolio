import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMassage] = useState("")

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos")
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send(process.env.REACT_APP_EMAILJS_TOKEN_EMAIL, process.env.REACT_APP_EMAILJS_TOKEN_TEMPLATE, templateParams, process.env.REACT_APP_EMAILJS_TOKEN_PUBLIC_KEY)
      .then((response) => {
        console.log("email enviado", response.status, response.text)
        setEmail("")
        setMassage("")
        setName("")
      }, (err) => {
        console.log("ERRO", err)
        console.log(process.env)
      }
      )

  }

  return (


    <form className=' h-auto flex flex-wrap sm:flex-wrap  justify-center items-center space-y-9 space-x-2 sm:space-y-0 sm:space-x-4 md:space-x-16 mb-16' onSubmit={sendEmail}>

      <div className='flex flex-col space-y-8'>

        <div className='flex flex-col'>
          <label className='text-base font-medium text-slate-900' htmlFor="Name" >Name</label>
          <input className='border-none outline-none rounded-lg h-8 w-44 lg:h-10 lg:w-auto bg-slate-900 text-slate-100  px-2 shadow-xl' type="text" id='Name' onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        <div className='flex flex-col'>
          <label className='text-base font-medium text-slate-900' htmlFor="Email">Email</label>
          <input className='border-none outline-none rounded-lg h-8 w-44 lg:h-10 lg:w-auto bg-slate-900 text-slate-100 px-2 shadow-xl' type="email" id='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>

        <button className='bg-green-400 hover:bg-green-500 transition-all h-10 rounded-xl text-xl font-bold' type="submit">SUBMIT</button>

      </div>

      <textarea placeholder='send a message...' name="Send" id="Send" cols="30" rows="8" className='border-none outline-none rounded-xl resize-none bg-slate-900 text-slate-100 p-3 ' onChange={(e) => setMassage(e.target.value)} value={message}></textarea>

    </form>

  )
};

export default Contact;
