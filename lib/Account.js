var Model = require('./Model');
var User = require('./User');

var AccountSchema = {
  user: User,
  accountNumber: Number,
  address: String,
  balance: Number
};

function Account() {
  Model.call(this, AccountSchema);
}
Model.extend(Account);

module.exports= Account;

