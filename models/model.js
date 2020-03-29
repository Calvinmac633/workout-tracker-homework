const mongoose = require("mongoose"),
    { Schema } = mongoose,

    workoutSchema = new Schema({
        day: {
            type: Date,
            default: new Date(Date.now())
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "TYPE IS REQUIRED"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "NAME IS REQUIRED"
                },
                duration: {
                    type: Number,
                    required: "DURATION IS REQUIRED."
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number
                }
            }
        ]
    });

    const Workout = mongoose.model("Workout", workoutSchema);
  
    module.exports = Workout;