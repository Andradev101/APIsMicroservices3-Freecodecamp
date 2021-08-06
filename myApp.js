require('dotenv').config();
const mongoose = require('mongoose');
const mySecret = process.env['MONGO_URI']

//had to use secrets in repl, not sure it could affect the connection outside of repl enviroment, but i think it does so.
mongoose.connect(mySecret, {
  dbName : 'name', 
  useNewUrlParser: true, 
  useUnifiedTopology: true });
//lesson 1/12 done

let Person;
//creating a scheme an instancing it
//https://mongoosejs.com/docs/guide.html
const { Schema } = mongoose;
var personSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
})//Schema done

Person = mongoose.model('Person', personSchema);
//Instanced
//lesson 2/12 done

const createAndSavePerson = (done) => {
  // new person luiz henrique
  //attributes | value
  var LuizHenrique = new Person({
    name: "Luiz Henrique",
    age: 19,
    favoriteFoods: ["Pizza", "Esfiha"]
  })//struggled a bit in here

  LuizHenrique.save(function(err, data) {
    if (err) return handleError(err);
    done(null, data);
  });
};
//lesson 3/12 done

var arrayOfPeople = [
  {name: "aaaa", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "bbbb", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "cccc", age: 78, favoriteFoods: ["wine"]}
];
//the data should come outside the function

const createManyPeople = (arrayOfPeople, done) => { 
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};
//struggled in this for 3-4 days in total, and it was pretty simple
//Person.create(arrayOfPeople as param, and then calls a function that will log an error on just make its task)
//lesson 4/12 done

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};
//using personName as the name parameter
//lesson 5/12 done

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function(err, food){
    if(err) return console.log(err);
  done(null, food);
  });
};
//almost the same thing
//lesson 6/12 done

const findPersonById = (personId, done) => {
  Person.findById(personId, function(err, personId){
    if(err) console.log(err);
    done(null, personId);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err, person){
    if(err) console.log(err);
    person.favoriteFoods.push(foodToAdd);
    person.save(function(err, person) {
      if (err) return console.log(err);
      done(null, person);
    });
  });
};
//firstly i had to get the id, with the PersonId parameter (Search key)
//then, use a callback function that will return the person or the error log
//then, i pushed the foodToAdd value to the favoriteFoods array
//then i saved it as the person
//it was pretty dificult
//lesson 8/12 done

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, function(err, changedAge){
    if(err) return console.log(err)
    done(null, changedAge);
  });
};
//wouldn't had guessed in a million years or so.
//lesson 9/12 done

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
