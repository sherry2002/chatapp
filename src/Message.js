import React,{forwardRef} from 'react';
import { Card,CardContent,Typography } from '@material-ui/core';
import './Message.css';

const Message= forwardRef(({message,username},ref) =>{
    const isuser = username === message.username;
    return (
        <div className="message_card">
        <div ref={ref} className={`message ${isuser && `message_user`}`}>
            <Card className={isuser?"message_usercard":"message_guestcard"}>
             <CardContent>

                 <Typography 
                 color="textPrimary"
                 variant="h5"
                 compoontent="h2"  
                 >
                {!isuser && `${message.username  || 'unknown user' }: `}  {message.message}

                 </Typography>
             </CardContent>
   
            </Card>
           
            
        </div>
        </div>
    )
})

export default Message;
