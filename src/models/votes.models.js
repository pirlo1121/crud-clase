import mongoose, { Schema } from "mongoose";

const voteSchema = new mongoose.Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    producto: {
      type: Schema.Types.ObjectId,
      ref: "product",   
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

voteSchema.index({ usuario: 1 }, { unique: true });

export const voteModel = mongoose.model("vote", voteSchema);
