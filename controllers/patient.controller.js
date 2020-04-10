import PatientSchema from "../models/patient.model";

export const getAllPatients = async (req, res) => {
    PatientSchema.find({}).populate('doctorId').exec(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const getPatientsByDoctorId = async (req, res) => {
    console.log(req.params.id)
    PatientSchema.find({doctorId: req.params.id}, function (err, result) {
        console.log(result)
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const createPatient = async (req, res) => {
    const newPatient = new PatientSchema(
        {name: req.body.name}
    );
    newPatient.save();
    res.status(200).json('Success');
};

export const deletePatient = async (req, res) => {
    PatientSchema.findByIdAndDelete(req.params.id, (err, result) => {
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};

export const assignDoctor = async (req, res) => {
    PatientSchema.updateOne({_id: req.body.selectedPatient}, {doctorId: req.body.selectedDoctor._id}, (err, result) => {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    })
};
