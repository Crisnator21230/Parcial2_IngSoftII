const mongoose = require('mongoose');
const clinicSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nit: {
    type: Number,
    require: true,
  },
  address: {
    type: Object,
    require: true,
    geo: {
      type: Array,
      require: true
    },
    city: {
      type: String,
      require: true
    },
    conde_zip:{
      type: Number,
      require: true
    }
  },
  pet:{
    type: Object,
    require: true,
    pet_name:{
      type: String,
      require: true,
    },
    breed:{
      type: String,
      require: true,
    },
    sex_pet:{
      type: String,
      require: true,
    },
    mediical_history:{
      type: Object,
      require: true,
      vaccine:{
        type: Object,
        require:true,

        type_vaccine:{
          type:String,
          require: true,
        },

        date_vaccine:{
          type:String,
          require:true
        }
      },
      deworming:{
        type:Array,
        require:true
      }
    },
  }
});

module.exports = mongoose.model('ClinicCollection', clinicSchema);