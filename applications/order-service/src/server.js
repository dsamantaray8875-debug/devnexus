const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/orders", (req, res) => {
  res.json({
    service: "Order Service",
    message: "DevNexus Order Service is running!"
  });
});

app.get("/orders/health", (req, res) => {
  res.json({
    service: "Order Service",
    status: "UP"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`DevNexus Order Service running on port ${PORT}`);
});
