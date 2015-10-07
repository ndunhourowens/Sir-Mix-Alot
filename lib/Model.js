/*

Model Class
  SHOULD NOT BE USED DIRECTLY
  instead, extend this class for each model/collection
ex; if User extends Modeus


schema: an object that defines the properties/fields of the model

ex: {
      name: String,
      pass: String,
      age: Number,
    }
*/

var DataStore = require('./DataStore');


function Model(schema){
  this.schema = schema;

  // null id means instance is NOT saved to datastore yet
  this.id = null;

  // create properties for each field defined in schema
    // then set to null
  for(var key in schema){
    this[key] = null;

  }

  // create a new "collection" in DS
    // using the name of the current model
  if(!DataStore.store.hasOwnProperty(this.constructor.name)){
    DataStore.store[this.constructor.name] = [];
  }

}

Model.prototype.save = function(){
  if(this.id === null){
    this.id = this.constructor.getNextId();
    DataStore.store[this.constructor.name].push( this );
  }
};

// remove the document from the store
Model.prototype.destroy = function(){
  var data = DataStore.store[this.constructor.name];
  console.log('data',data);

  var currentIndex = this.constructor.find(this.id);
  console.log('currentIndex',currentIndex);

  var index = data.indexOf(currentIndex);
  console.log("index",index);


  if(this.id !== null){
    data.splice(index,1);
  }
};


Model.find = function(id){

  var data = DataStore.store[this.name];
  for(var i =0; i < data.length; i++){
    if( data[i].id === id ){
      return data[i];
    }
  }
  return null;
};

Model.extend = function(klass){
  var extendMethods;

  // static method
  for(extendMethods in Model){
    klass[extendMethods] = Model[extendMethods];
  }
  // prototype method
  for(extendMethods in Model.prototype){
    klass.prototype[extendMethods] = Model.prototype[extendMethods];
  }
};

Model.getNextId = function(){
  var data = DataStore.store[this.name];
  var counter = 0;
  for(var i = 0; i < data.length; i++){
    if(data[i].id>counter){
      counter = data[i].id;
    }
  }
  return counter + 1;
};

module.exports = Model;