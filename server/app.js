const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models/expense");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/expenses", expenseRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully!");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log("Error syncing database:", err));
