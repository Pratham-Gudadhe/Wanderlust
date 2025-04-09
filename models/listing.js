const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust');
}

const listingSchema = new Schema({
    title : {
      type : String,
      required : true,
    },
    description : String,
    image : {
      type : String,
      default : "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      set : (v) => v === "" ? "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
    price : Number,
    location :  String,
    country : String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;