import * as mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({

  name: String,
  scoreDay1: Number,
  projectDay1: String,
  status1: String,
  scoreDay2: Number,
  projectDay2: String,
  status2: String,
  scoreDay3: Number,
  projectDay3: String,
  status3: String,
});
const scoreModel = mongoose.model('score', scoreSchema);

export default scoreModel;
