## emquery
[![Build Status](https://travis-ci.org/lestoni/emquery.svg)](https://travis-ci.org/lestoni/emquery)
[![NPM](https://nodei.co/npm/emquery.png?downloads=true&stars=true)](https://nodei.co/npm/emquery/)

Construct a mongodb query update for embedded documents.

Works great with mongoose.

## install

```sh
  $ npm install emquery
```

## example

```sh
  $ node example.js
```

```javascript
  var emquery = require('emquery');

  var UserModel = require('../models/user');

  app.put('/users/:id', function updateUser(req, res, next) {
    var updates = {
      $set: emquery(req.body);
    };

    User.findByIdAndUpdate(user._id, updates, function(err, user) {
      if(err) return next(err);
      res.json(user);
    });
  });
```

## API

### emquery({}#object} = require('emquery')

Pass in the object to parsed to a query.

## license

MIT
