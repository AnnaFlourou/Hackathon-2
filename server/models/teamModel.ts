import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({

  name: String,
  country: String,
  school: String,
  members: [],
  scoreDay1: Number,
  projectDay1: String,
  scoreDay2: Number,
  projectDay2: String,
  scoreDay3: Number,
  projectDay3: String,
  status: Boolean,
});
const teamModel = mongoose.model('team', teamSchema);

export default teamModel;
