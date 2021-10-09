require('dotenv').config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person',personSchema);


const createAndSavePerson = (done) => {
  var dara = new Person ({
    name: "Dara",
    age: 25,
    favoriteFoods: ['water','noodle']
  });

  dara.save((err,data)=>{
    if (err) return console.log(err);

    done(null,data);
  });
};

// Array of People
let arrayOfPeople=[
  {name:'Matthew', age:35, favoriteFoods:['bread','water']},
  {name:'Markus', age:34, favoriteFoods:['honey', 'chicken']},
  {name: 'Paul', age: 40, favoriteFoods:['bread','grapes']}
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,function(err, people){
    if (err) return console.log(err);
    done(null,people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name:personName},function(err,personFound){
    if (err) return console.log(err);
    done(null,personFound);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
