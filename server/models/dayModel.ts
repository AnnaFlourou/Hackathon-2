import * as mongoose from 'mongoose';

const daySchema = new mongoose.Schema({

  day: Number,
});
const dayModel = mongoose.model('day', daySchema);

export default dayModel;
