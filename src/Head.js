//import logo from './logo.svg';
import './App.css';
//import home from './containers/home/Index';
import React,{useState,useEffect} from 'react';
import Message from './Message';
import {Button,FormControl,InputLabel,Input} from "@material-ui/core";



function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([{username:"sunny", text:"helo"},{username:'qazi', text:'hi'}]);
  const [username,setusername] = useState('');

  useEffect(()=> {
   // const name= prompt('please enter your name')
    setusername (prompt ('enter your name'));
  },[]) 

    const sendMessage = (event) => {
      event.preventDefault();
      setMessages([...messages,{username:username , text:input}])
      setInput('');
    }
  
  return (
    <div className="App">
   <h1> Welcome {username}</h1>
   <form>
   <FormControl>
   <InputLabel>Enter a message..</InputLabel>
   <Input value={input} onChange={event=>setInput(event.target.value)}/>
   <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>send message</Button>

   </FormControl>
   </form> 
   {
     messages.map((message)=>(
       <Message username={message.username} message={message.text} />
     ))
   }
    </div>
  );
}

export default App ;