const Workout = require("../models/model.js");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (err) {
            console.log("error occurred creating a workout: ", err)
        }
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });


}