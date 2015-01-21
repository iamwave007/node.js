// var express    = require('express');        
// var app        = express();                 

// var mongoose   = require('mongoose');
// //mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); 
// mongoose.connect('localhost:27017/bear')
// // same as mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   console.log("open")
// });


// var Bear= require('./app/models/bear');


       
// // var bear = new Bear();      // create a new instance of the Bear model
// // bear.name = "Tommy";  // set the bears name (comes from the request)
// // bear.roar();



// // // save the bear and check for errors
// // bear.save(function(err,bear) {
// //     if (err) return console.log(err);
// //     console.log("new bear saved");
// //     bear.roar();
// //   });

// var bear = new Bear();
// bear.name = "Gao";
// bear.roar();

// bear.save(function(err,bear){
//   if(err) return console.log(err);
//   console.log("new bear saved");
//   bear.roar();
//   })


//====++++++++++++++++ population

var mongoose   = require('mongoose');
mongoose.connect('localhost:27017/ppl')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("open")
});

var Schema = mongoose.Schema
  
var personSchema = Schema({
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  _creator : { type: Schema.Types.ObjectId, ref: 'Person' },
  title    : String,
  body     : String,
  fans     : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);

//========== game begins here


// var aaron = new Person({name:"Aaron", age:100});
// // what if _id is not assigned. can it be returned and used?

// aaron.save(function(err,data){
//   if(err) return console.log(err);
//   console.log(data)
//   console.log(data._id)

//   var story1 = new Story({
//     title:"Once upon a timex.",
//     _creator:data._id
//   });

//   story1.save(function(err,data){
//     if(err) return console.log(err);
//     console.log(data)
//     console.log(data._id)
//   })
// })


Story
.find({ title: /timex/i})
// .populate('fans')
.exec(function(err,story){
  if(err) return console.log(err);
  // console.log('The creator is %s', story._creator.name);
  console.log(story);
})

// var devin = new Person({name:"Devin", age:19});

// devin.save(function(err,devin){
//   if(err) return console.log(err);
//   Story
//   .findOne({title:/timex/i})
//   .exec(function(err,story){
//     if(err) return console.log(err);
//     console.log(story);
//     console.log("from second call");
//     story.fans.push(devin._id);
//     story.save(function(err,after){
//       if(!err)console.log('devin saved');
//       console.log(after);
//     })
//   })
// })
















