const uri = "mongodb://localhost:27017/social-network";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
module.exports = { uri, options };
