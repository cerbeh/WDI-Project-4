import React from 'react';
import Flash from '../../lib/Flash';

const FlashMessages = () =>{
  //stores messages for when we run the method getMessages through Flash
  const messages = Flash.getMessages();
  Flash.clearMessages();
  return(
    <div className="container">
      {messages && Object.keys(messages).map(type => <div key={type} className={`notification is-${type}`}>{messages[type]}</div>
      )}
    </div>
  );
};

export default FlashMessages;
