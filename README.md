# crud-app
Node express server app to provide basic CRUD functions using Mongodb via MongoLab

Requires you setup a mLab / MongoLab account, set a DB_ENV environment
variable with the MongoDB URI value.  A free "snadbox" setup works for this.

Run the node app as follows - for example from an unbuntu shell prompt:

    $ git clone https://github.com/kenerbe/crud-app.git
    $ cd crud-app
    $ npm install
    $ DB_ENV="mongodb://UserID:Password@ds93454.mlab.com:94567/databasename" node server.js

Fill in your specific mLab MongoDB URI values as appropriate.
