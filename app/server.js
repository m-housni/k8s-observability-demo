
const express = require("express");
const client = require("prom-client");

require("./telemetry");

const app = express();

const counter = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP Requests"
});

app.get("/", (req, res) => {
  counter.inc();
  res.json({ message: "Hello Kubernetes Observability Lab" });
});

app.get("/cpu", (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 500) {}
  res.send("CPU spike simulated");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
