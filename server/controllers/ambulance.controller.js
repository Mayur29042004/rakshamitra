const AmbulanceRequest = require('../models/ambulance.model');

exports.createRequest = async (req, res) => {
  try {
    const { name, location } = req.body;
    const file = req.file;
    const newRequest = new AmbulanceRequest({
      name,
      location,
      fileUrl: file ? file.path : '',
      userId: req.user.id,
    });
    await newRequest.save();
    res.status(200).json({ message: "Ambulance requested", requestId: newRequest._id });
  } catch (err) {
    res.status(500).json({ error: "Request failed", err });
  }
};

exports.confirmDispatch = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await AmbulanceRequest.findByIdAndUpdate(id, { status: 'Dispatched' }, { new: true });
    res.status(200).json({ message: "Ambulance dispatched", updated });
  } catch (err) {
    res.status(500).json({ error: "Confirmation failed", err });
  }
};