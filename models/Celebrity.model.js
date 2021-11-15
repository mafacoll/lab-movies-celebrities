const { Schema, model } = require("mongoose");

const CelebritySchema = new Schema(
  {
      name: String, 
      ocupation: String,
      catchPhrase: String
  },
);

const CelebrityModel = model("Celebrity", CelebritySchema);

module.exports = CelebrityModel;