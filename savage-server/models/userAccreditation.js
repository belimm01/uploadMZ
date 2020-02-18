const mongoose = require('../config/mongodb/mongoConfig');
mongoose.set('debug', true);

const userAccreditationSchema = mongoose.Schema({
    userId: String,
    info: [],
    form: [],
    state: []
});

let UserAccreditation = mongoose.model('Accreditation', userAccreditationSchema);

module.exports = UserAccreditation;