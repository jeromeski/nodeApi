exports.getPosts = (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(200, 'Hello World!');
}

module.exports = {
  getPosts
};