const mongoose = require("mongoose");
const url =
  "mongodb+srv://kunjalpande6651:vaishnavi123@cluster0.6f77j2h.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url).then(() => {
      console.log("Conncted");
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = connect;
