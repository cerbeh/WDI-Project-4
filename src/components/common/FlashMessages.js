import React from 'react';
import Flash from '../../lib/Flash';

class FlashMessages extends React.Component{
  state ={
    messages: null
  }
  //stores messages for when we run the method getMessages through Flash
  render(){
    const messages = Flash.getMessages();
    Flash.clearMessages();
    setTimeout(() => this.setState({ messages: '' }), 2000);
    return(
      <div className="container is-flash">
        {messages && Object.keys(messages).map(type => <div key={type} className={`notification is-${type}`}>{messages[type]}</div>
        )}
      </div>
    );
  }
}

export default FlashMessages;
