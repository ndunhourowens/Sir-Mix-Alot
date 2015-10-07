/*
*store = {

  "ModelName" : {},
  "OtherModel": []
  {
    id: 1.
    name: "value"
  }
  ]
}
*
*/


function DataStore(store) {

  // reserve space for new intanse of models to be save snd retrived later
  this.store = {};
}

module.exports = new DataStore();