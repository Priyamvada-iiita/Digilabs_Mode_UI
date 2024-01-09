import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    password: {
      type: String,
      required: true,
    },
    
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    
  },
  { timestamps: true }
);

const submissionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
  
);

// mongoose.models = {};
export const AdminUser = mongoose.models && mongoose.models.adminuser
  ? mongoose.models.adminuser
  : mongoose.model("adminuser", userSchema);

export const Submission = mongoose.models && mongoose.models.submission
  ? mongoose.models.submission
  : mongoose.model("submission", submissionSchema);