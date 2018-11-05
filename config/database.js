if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://lampham:123456abc123@ds255930.mlab.com:55930/lampham'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/lampham'}
  }