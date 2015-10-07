var Model = require('./Model');
var User = require('./User');

var MessageSchema = {
  from: User,
  to: User,
  message: String,
  sent: Date
};

function Message(){
  Model.call(this, MessageSchema);
}
Model.extend(Message);

module.exports = Message;