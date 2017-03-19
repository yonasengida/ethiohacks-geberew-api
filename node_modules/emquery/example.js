var emquery = require('./');

var data = {
  contacts: {
    email: 'user@email.com',
    phone: '+00 000 000 000'
  },
  quantity: 5,
  types: ['white', 'green']
};
var obj = {
  credentials: {
    username: "lestoni",
    gender: "male",
    contacts: {
      email: 'tonimut7@gmail',
      phone: '0700898989'
    }
  },
  id: "7gq35tf6132r"
};

console.log(emquery(obj));
