# DevNexus — Enterprise Cloud DevOps Platform on AWS

## Project Status

DevNexus is a full-stack cloud-native DevOps project deployed on AWS.

- AWS VPC & IAM — Complete
- Terraform — Complete
- Amazon EKS — Complete
- Java Spring Boot User Service — Complete
- Python FastAPI Product Service — Complete
- Node.js Express Order Service — Complete
- React Frontend — Complete
- Docker & Amazon ECR — Complete
- Kubernetes — Complete
- Helm — Complete
- Argo CD / GitOps — Synced & Healthy
- Metrics Server — Working
- Prometheus — Running
- Grafana — Running
- Kubernetes HPA — Working
- Kubernetes RBAC — Complete
- GitHub — Complete

## Architecture

Users
  |
  v
AWS Application Load Balancer
  |
  v
Amazon EKS
  |
  +--> React Frontend
  |
  +--> Java Spring Boot User Service
  |
  +--> Python FastAPI Product Service
  |
  +--> Node.js Express Order Service
  |
  +--> Prometheus + Grafana

## DevOps Flow

Developer
  |
  v
GitHub
  |
  v
CI/CD
  |
  v
Docker
  |
  v
Amazon ECR
  |
  v
Helm
  |
  v
Argo CD / GitOps
  |
  v
Amazon EKS

## AWS Infrastructure

- Amazon VPC
- Public and Private Subnets
- IAM
- Amazon EKS
- EC2 Worker Nodes
- Application Load Balancer
- Amazon ECR
- Amazon RDS
- Amazon ElastiCache

## Microservices

### User Service

Java 17 + Spring Boot

Endpoints:

- /users
- /users/health

### Product Service

Python + FastAPI

Endpoints:

- /products
- /products/health

### Order Service

Node.js + Express

Endpoints:

- /orders
- /orders/health

### Frontend

React + Vite + Nginx

The frontend communicates with backend microservices through Kubernetes services.

## Docker

Applications are containerized using Docker.

Images:

- devnexus/frontend
- devnexus/user-service
- devnexus/product-service
- devnexus/order-service

Images are stored in Amazon ECR.

## Kubernetes

The application runs on Amazon EKS using:

- Deployments
- Services
- ConfigMaps
- Secrets
- HPA
- RBAC
- Health checks
- CPU and memory requests/limits

Application namespace:

devnexus

## Helm

The application is packaged as a Helm chart.

Path:

helm/devnexus

Helm manages:

- Frontend
- User Service
- Product Service
- Order Service
- HPA
- Kubernetes configuration

## GitOps

Argo CD continuously monitors the GitHub repository and deploys the Helm application to Amazon EKS.

GitHub
  |
  v
Argo CD
  |
  v
Helm
  |
  v
Amazon EKS

Argo CD status:

Synced
Healthy

## Monitoring

Monitoring stack:

- Prometheus
- Grafana
- Metrics Server
- Node Exporter
- kube-state-metrics
- Alertmanager

Prometheus collects Kubernetes metrics and Grafana provides visualization.

## Autoscaling

Frontend HPA:

- Minimum replicas: 2
- Maximum replicas: 4
- CPU target: 70%

## Security

Security implementation includes:

- IAM
- Kubernetes RBAC
- Kubernetes ServiceAccounts
- Security Groups
- Kubernetes Secrets
- Container security structure

## Repository Structure

devnexus/
├── applications/
├── docker/
├── terraform/
├── kubernetes/
├── helm/
├── gitops/
├── jenkins/
├── monitoring/
├── logging/
├── security/
├── docs/
├── scripts/
└── tests/

## Technology Stack

AWS
Terraform
Linux
Git
GitHub
Docker
Amazon ECR
Kubernetes
Amazon EKS
Helm
Argo CD
Jenkins
GitHub Actions
Java
Spring Boot
Python
FastAPI
Node.js
Express
React
Prometheus
Grafana
RBAC
DevSecOps
Microservices

## Validation

Application workloads:

frontend          2/2
user-service      2/2
product-service   2/2
order-service     2/2

Argo CD:

Synced
Healthy

HPA:

Minimum replicas: 2
Maximum replicas: 4
CPU target: 70%

## Interview Explanation

DevNexus demonstrates an end-to-end DevOps workflow on AWS.

Infrastructure is provisioned using Terraform. Applications are containerized using Docker and stored in Amazon ECR. Kubernetes workloads run on Amazon EKS and are packaged using Helm.

Argo CD implements GitOps by continuously synchronizing the Kubernetes environment with the GitHub repository.

Prometheus and Grafana provide monitoring, while Kubernetes HPA provides application autoscaling.

The project demonstrates practical knowledge of AWS, Terraform, Docker, Kubernetes, EKS, Helm, GitOps, CI/CD, monitoring, security and microservices.

## Author

Deepak Kumar Samantaray

GitHub:
https://github.com/dsamantaray8875-debug

## Project

DevNexus — Enterprise Cloud DevOps Platform on AWS
