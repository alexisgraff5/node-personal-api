var user = {
  name: 'Ashton',
  location: 'Utah',
  occupations: ['Holister Model', 'Apartment Complex Management', 'Lawyer', 'Mother'],
  hobbies: [
    {
      name: 'Sleeping',
      type: 'current'
    },
    {
      name: 'Shopping',
      type: 'current'
    },
    {
      name: 'Cheering',
      type: 'past'
    }
  ],
  family: [
    {
      name: 'Mitch',
      relation: 'husband',
      gender: 'male'
    },
    {
      name: 'Alice',
      relation: 'daughter',
      gender: 'female'
    },{
      name: 'Alexis',
      relation: 'sister',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Zupas',
      type: 'Sandwich, Soup, & Salad',
      rating: 7
    },
    {
      name: 'Cafe Rio',
      type: 'Mexican',
      rating: 8
    },
    {
      name: 'Outback Steakhouse',
      type: 'Steakhouse',
      rating: 8
    }
  ]
};

jsonUser = JSON.stringify(user);
module.exports = user;
