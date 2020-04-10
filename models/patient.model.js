import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PatientSchema.plugin(uniqueValidator);

export default mongoose.model('Patient', PatientSchema);
