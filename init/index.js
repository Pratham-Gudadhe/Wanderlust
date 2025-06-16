const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const ownerId = "6806531af3f70c9bc29fed66"; // You can replace this with a real user ID if needed
  const listingsWithOwner = initData.data.map((listing) => ({
    ...listing,
    owner: ownerId,
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("data was initialized");
};

initDB();