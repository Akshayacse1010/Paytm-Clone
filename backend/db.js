const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://akshayathecoder:d8b1McoLW9Xhb6re@cluster0.g0sdvgj.mongodb.net/paytm'
);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
