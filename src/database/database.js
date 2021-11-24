import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://localhost:27017/crud-node-mongo");
    console.log("DB Connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
