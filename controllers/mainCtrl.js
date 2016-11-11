var user = require('../user.js');

module.exports = {

  getName: function(req, res, next) {
    var user1 = {
      name: user.name
    };
    res.json(user1);
  },

  getLocation: function(req, res, next) {
    var location1 = {
      location: user.location
    };
    res.json(location1);
  },

  getOccupations: function(req, res, next) {
    var occupations1 = {
      occupations: user.occupations
    } ;
    res.json(occupations1);
  },

  getLatestOccupation: function(req, res, next) {
    var lastOccupation = user.occupations.pop();
    //console.log(lastOccupation);
    var latest = {
      latestOccupation: lastOccupation
    };
    res.json(latest);
  },

  getHobbies: function(req, res, next) {
    var hobbies = {
      hobbies: user.hobbies
    };
    res.json(hobbies);
  },

  getHobbiesByType: function(req, res, next) {
    var hobbiesType = [];
    var hobbyType = req.params.type;
    for (var i = 0; i < user.hobbies.length; i++) {
      if (hobbyType === user.hobbies[i].type) {
        hobbiesType.push(user.hobbies[i]);
      }
    }
    res.json(hobbiesType);
  },

  getFamily: function(req, res, next) {
    if (req.query.relation) {
      var relationArr = [];
      var queryRelation = req.query.relation;
      for (var i = 0; i < user.family.length; i++) {
        if (queryRelation === user.family[i].relation) {
          relationArr.push(user.family[i]);
        }
      }
      res.json(relationArr);
    } else {
      res.json(user.family);
    }
  },

getFamilyByGender: function(req, res, next) {
  var familyArr = [];
  var familyGender = req.params.gender;
  for (var i = 0; i < user.family.length; i++) {
    if (familyGender === user.family[i].gender) {
      familyArr.push(user.family[i]);
    }
  }
  res.json(familyArr);
},

getRestaurants: function(req, res, next) {
  if (req.query.rating) {
    var foodArr = [];
    var queryRating = parseInt(req.query.rating);
    for (var i = 0; i < user.restaurants.length; i++) {
      if (user.restaurants[i].rating === queryRating) {
      foodArr.push(user.restaurants[i]);
      }
    }
    res.json(foodArr);
  }
    res.json(user.restaurants);
},

getRestaurantsByName: function (req, res, next) {
  var foodieArr = [];
  var foodieName = req.params.name.split('+').join(' ');
  for (var i = 0; i < user.restaurants.length; i++) {
    if (foodieName === user.restaurants[i].name) {
      foodieArr.push(user.restaurants[i]);
    }
  }
  res.json(foodieArr);
}

};
