var axios = require("axios");

module.exports = {
  fetchAllBoards: function(userId) {
    return axios
      .get(
        `https://api.trello.com/1/members/me/boards?key=${
          process.env.REACT_APP_TRELLO_API
        }&token=${process.env.REACT_APP_TRELLO_TOKEN}`
      )
      .then(function(response) {
        return response.data;
      });
  }
};
