function errorHandler(err, req, res, next) {
  //error that comes from mongoose.
  if(err.name === 'ValidationError') {
    err.status = 422;
    //setting the status to be 422.
    err.message = 'Unprocessable Entity';
    const errors = {};
    //creating an errors object and then we're looping over the object
    for(const field in err.errors) {
      errors[field] = err.errors[field].message;
      //we get an error and then the error message.
    }
    err.errors = errors;
  }

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ message, errors: err.errors });
  //send the message of the errors otherwise it'll send the internal server error
  next(err);
}

module.exports = errorHandler;
