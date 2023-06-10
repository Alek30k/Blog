import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alejandrodev:alejandrodev@cluster0.tilx2mw.mongodb.net/blog?retryWrites=true&w=majority"
    );
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
