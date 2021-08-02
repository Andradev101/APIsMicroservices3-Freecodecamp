require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env['MONGO_URI']
//had to use secrets in repl, not sure it could affect the connection outside of repl enviroment, but i think it does so.
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//lesson 1/12 done

let Person;
//creating a scheme an instancing it
//https://mongoosejs.com/docs/guide.html
const {Schema} = mongoose;
const personSchema = new Schema ({
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

  LuizHenrique.save(function(err,data){
    if (err) return handleError(err);
    done(null,data);
  });
};
//lesson 3/12 done

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
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
