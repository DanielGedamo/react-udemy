const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  compony: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    require: true,
  },
  skills: {
    type: [String],
    require: true,
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
  exsperience: [
    {
      title: {
        type: String,
        require: true,
      },
      company: {
        type: String,
        require: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        require: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],

  education: [
    {
      school: {
        type: String,
        require: true,
      },
      degree: {
        type: String,
        require: true,
      },
      filedofstudy: {
        type: String,
        require: true,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
        require: true,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instegram: {
      type: String,
    },
    date:{
        type:Date,
        default: Date.now
    }
  }
});

module.exports = Profile = mongoose.model('pofile',ProfileSchema)
