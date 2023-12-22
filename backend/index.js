const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
// const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const coarseRoute = require("./routes/coarseRoute");
// const donorRoute = require("./routes/donorRoute");
// const awarenessRoutes = require("./routes/awarenessRoutes");
// const vidoeRoutes = require("./routes/videoRoutes");
dotenv.config();

const app = express();
connectDB();

const port = process.env.PORT || 4000




// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/uploads', express.static('uploads'));

// Allow cross-domain requests
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.use('/', coarseRoute);
// app.use('/donor', donorRoute);
// app.use('/', awarenessRoutes);
// app.use('/', vidoeRoutes);
// app.use(notFound);
// app.use(errorHandler);

// Server port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
