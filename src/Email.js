//import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import './index.css';
import { makeStyles, Typography } from '@material-ui/core';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles({

  field:{
    
    marginBottom:20,
    marginTop:20,
    display:'block',
  
    


  }
})

const Email = () => {
  const classes=useStyles();
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[message,setMessage]=useState('');
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_jktdb5i', 'template_g9k6709', '.contact-form', 'user_QBGCBtGCiu1fwKr17UmrU')
      .then((result) => {

      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <Container className="email-form">
      <Typography>Contact Us</Typography>
      <form className="contact-form" onSubmit={sendEmail}>
      <TextField  
      onChange={(e)=>setName(e.target.value)}
      label="Your Name"
       name="contact_number"
        variant="outlined" 
      color="secondary" fullWidth />
      <TextField 
         onChange={(e)=>setEmail(e.target.value)}
      className={classes.field} label="Email" name="user_name" variant="outlined" color="secondary" fullWidth/>
      <TextField 
         onChange={(e)=>setMessage(e.target.value)}
      className={classes.field} label="Message" name="message" variant="outlined" color="secondary" multiline rows={4} fullWidth/>
      <Button endIcon={<SendIcon/>} type="submit" color="secondary" variant="contained">SEND</Button>

      </form>
    </Container>










  );
}

export default Email;