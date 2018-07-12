class Flash {
  _messages = null;
  //_ signifies that it is private or temporary
  static setMessage(type, message){
    this._messages=this._messages || {};
    //if messages are truth then set it to messages otherwise set it to an empty object
    this._messages[type] = message;
  }

  static getMessages(){
    return this._messages;
  }
  static clearMessages(){
    this._messages =null;
  }
}

export default Flash;
