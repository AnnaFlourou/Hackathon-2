import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({

  name: String,
  country: String,
  school: String,
  members: [],
});
const teamModel = mongoose.model('team', teamSchema);

export default teamModel;
