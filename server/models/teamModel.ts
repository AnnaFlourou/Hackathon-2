import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({

  name: String,
  country: String,
  school: String,
  members: [],
  flag: String,
});
const teamModel = mongoose.model('team', teamSchema);

export default teamModel;
