
module.exports = {
   tokenValidator: (token) => {
    if (token === 1) {
      return 1;
    }
    if (token === 2) {
      return 2;
    }
    return null;
  }
}