let express = require("express");
let cors = require("cors");
const authRouter = require("./routes/authRouter");
const parkingRouter = require("./routes/parkingRouter");
const cookieParser = require("cookie-parser");
let bookingRouter = require("./routes/bookingRouter");
let dashboardRouter = require("./routes/dashboardRouter");

let app = express();

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  exposedHeaders: ["set-cookie"],
  optionsSuccessStatus: 200,
};

app.options(/.*/, cors(corsOptions));

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", 1);

app.use("/api", authRouter);
app.use("/api", parkingRouter);
app.use("/api", bookingRouter);
app.use("/api", dashboardRouter);

app.use("/api", (req, res) => {
  res.json({ message: "Api is Running" });
});

let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
