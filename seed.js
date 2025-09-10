require("dotenv").config();
const mongoose = require("mongoose");
const Quote = require("../models/Quote");

mongoose.connect(process.env.MONGODB_URI);

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", owner: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", owner: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", owner: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", owner: "Steve Jobs" },
  { text: "Success is not in what you have, but who you are.", owner: "Bo Bennett" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", owner: "Unknown" },
  { text: "Dream bigger. Do bigger.", owner: "Unknown" },
  { text: "Don’t watch the clock; do what it does. Keep going.", owner: "Sam Levenson" },
  { text: "Great things never come from comfort zones.", owner: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", owner: "Unknown" },
  { text: "Sometimes later becomes never. Do it now.", owner: "Unknown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", owner: "Unknown" },
  { text: "The key to success is to focus on goals, not obstacles.", owner: "Unknown" },
  { text: "Hard times don’t create heroes. It is during the hard times that the ‘hero’ within us is revealed.", owner: "Bob Riley" },
  { text: "Opportunities don’t happen. You create them.", owner: "Chris Grosser" },
  { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", owner: "Roy T. Bennett" },
  { text: "Work hard in silence, let success be your noise.", owner: "Frank Ocean" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", owner: "Dalai Lama" },
  { text: "Believe you can and you’re halfway there.", owner: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", owner: "William James" }
];

Quote.insertMany(quotes)
  .then(() => {
    console.log("Quotes added successfully!");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
