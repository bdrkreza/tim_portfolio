const firebase = require("../../db");
const firestore = firebase.firestore();

const addProject = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.collection("project").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { addProject };
