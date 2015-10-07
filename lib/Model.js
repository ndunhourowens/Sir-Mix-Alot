var DataStore = require('./DataStore');


function Model(schema){
  this.schema = schema;
  this.id = null;

  for(var key in schema){
    this[key] = null;

  }

  DataStore.store[this.constructor.name] = [];

}

Model.prototype.save = function(){
  DataStore.store[this.constructor.name].push(this);
};

Model.prototype.destroy = function(){

};

Model.find = function(id){

};


Model.getNextId = function(){
  var counter = 0;
  for(var i = 0; i < DataStore.store[this.name].length; i++){
    if(DataStore.store[this.name][i].id>0){
      counter = DataStore.store[this.name].id;
    }
  }
  return counter + 1;
};

module.exports = Model;