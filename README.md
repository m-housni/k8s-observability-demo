### Project Description — **k8s-observability-lab**

**k8s-observability-lab** is a hands-on Kubernetes project that demonstrates how to implement **modern observability for a Node.js Express API** using industry-standard cloud-native tools.

The project integrates **Prometheus for metrics, Loki for logs, OpenTelemetry for tracing, and Grafana for visualization**, providing full insight into application behavior inside a Kubernetes cluster. It also includes **Horizontal Pod Autoscaling (HPA)** to automatically scale the API under load and **Alertmanager with Slack notifications** to simulate real production alerting.

The goal of this lab is to showcase **end-to-end observability in Kubernetes**, from instrumentation to monitoring, logging, tracing, autoscaling, and alerting.

✅ **Key highlights**

* Express API instrumented with **OpenTelemetry**
* **Prometheus** metrics collection (`/metrics`)
* **Loki** centralized log aggregation
* **Grafana** dashboards for metrics and logs
* **Horizontal Pod Autoscaler** for dynamic scaling
* **Alertmanager → Slack alerts**
* Realistic **DevOps / SRE observability stack**

**Stack**

- Express API
- Prometheus (metrics)
- Grafana (dashboards)
- Loki (logs)
- OpenTelemetry (traces)
- HPA autoscaling
- Slack alerts via Alertmanager

## Architecture

User -> Service -> Pods -> Express API

Observability:

API -> Prometheus (metrics)
API -> Loki (logs)
API -> OpenTelemetry (traces)

Grafana visualizes everything.

## Run

Build image:

docker build -t username/k8s-observability-api ./app

Deploy:

kubectl apply -f k8s/

Install observability stack:

kubectl apply -f observability/
