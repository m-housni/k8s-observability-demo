
# k8s-observability-lab

Demo project showing Kubernetes observability with:

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
