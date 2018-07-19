const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI ||'mongodb://localhost:27017/WDI-Project-4';
const secret = '🐝🥐🐝🥐🐝🥐🐝🥐🐝🥐Martin&Linda🐝🥐🐝🥐🐝🥐🐝🥐🐝🥐🐝🥐🐝🥐🐝🥐🐝';

module.exports = { dbURI, port, secret };
