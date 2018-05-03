import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({

  name: String,
  country: String,
  school: String,
  members: [],
  scoreDay1: Number,
  scoreDay2: Number,
  scoreDay3: Number,
  status: Boolean,
  projectDay1: String,
  projectDay2: String,
  projectDay3: String,
});
const teamModel = mongoose.model('team', teamSchema);

export default teamModel;
