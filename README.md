# 3-Tier MERN DevOps Project

## This repository contains a 3-tier architecture implementation of a MERN (MongoDB, Express, React, Node.js) stack application, deployed using Docker and Kubernetes. The application is designed for scalability, high availability, and ease of deployment.&#x20;

```
3-tier-MERN-DevOps/
├── backend/               # Backend service (Node.js + Express)
│   ├── Dockerfile         # Dockerfile for the backend
│   ├── deployment.yaml    # Kubernetes manifests for backend
│   └── service.yaml       # Kubernetes service for backend
├── database/              # MongoDB database setup
│   ├── deployment.yaml    # Kubernetes manifests for MongoDB
│   ├── pvc.yaml           # Persistent Volume Claim for MongoDB
│   ├── pv.yaml            # Persistent Volume for MongoDB
│   └── svc.yaml           # Kubernetes service for MongoDB
├── frontend/              # Frontend service (React)
│   ├── Dockerfile         # Dockerfile for the frontend
│   ├── deployment.yaml    # Kubernetes manifests for frontend
│   └── svc.yaml           # Kubernetes service for frontend
├── kustomization.yaml     # Kustomize configuration file
├── Jenkinsfile            # Jenkins pipeline for CI/CD
└── README.md              # Project documentation
```

## Features

- **Frontend**: React-based single-page application served via NGINX.
- **Backend**: Node.js + Express API server for handling business logic.
- **Database**: MongoDB for data storage, with persistent volume support.
- **Reverse Proxy**: NGINX as a reverse proxy to route API and frontend requests.
- **Containerization**: All components are containerized using Docker.
- **Orchestration**: Kubernetes manages the deployment of all services.
- **CI/CD Pipeline**: Jenkins pipeline automates building, scanning, and deployment.
- **Security Scans**: Integrated Trivy and OWASP Dependency-Check for security scanning.
- **High Availability**: Configured for scalability using Kubernetes replicas.

## How to Run the Project

### Prerequisites

- **Docker**: Ensure Docker is installed on your system.
- **Kubernetes Cluster**: Use minikube, kind, or any cloud provider (AWS EKS, GCP GKE, Azure AKS).
- **kubectl**: CLI tool to manage Kubernetes.
- **Kustomize**: (Optional) To customize and deploy Kubernetes manifests.
- **Jenkins**: Installed and configured with necessary plugins.
- **SonarQube & Trivy**: For security scanning.

### Step 1: Clone the Repository

```bash
    git clone https://github.com/mushahid2120/3-tier-MERN-DevOps.git
    cd 3-tier-MERN-DevOps
```

### Step 2: Build Docker Images

Navigate to each component's directory (frontend, backend, and database) and build Docker images.

#### Backend

```bash
        cd backend
        docker build -t backend-image -f Docker/Dockerfile .
```

#### Frontend

```bash
    cd frontend
    docker build -t frontend-image  -f Docker/Dockerfile .
```

### Step 3: Deploy to Kubernetes

Ensure your Kubernetes cluster is running, and use the manifests provided and kustomization file to apply all manifests files.

#### Kustomize

Use kustomization.yaml to manage resources:

```bash
    cd k8s/
    kubectl create -k .
```

### Jenkins Pipeline

A Jenkins pipeline is integrated into the project to automate security scans, build Docker images, and deploy to Kubernetes.

#### Stages in Jenkins Pipeline:

1. **Git Checkout** - Pulls the latest code from the repository.
2. **Trivy Scan** - Scans the repository for vulnerabilities.
3. **OWASP Dependency Check** - Scans for security vulnerabilities in dependencies.
4. **Docker Build** - Builds Docker images for frontend and backend.
5. **Kubernetes Deployment** (Optional) - Deploys the application to a Kubernetes cluster.

To trigger the pipeline, configure Jenkins with:

- Maven, JDK 17, Node.js
- SonarQube Scanner
- Trivy security scanner
- OWASP Dependency-Check
- Docker with credentials configured

### Improvements and Future Enhancements

- Implement CI/CD pipelines using **ArgoCD** for automated and declarative GitOps workflows.
- Use **Ansible** for configuration management and automated provisioning of infrastructure.
- Leverage **Terraform** for Infrastructure as Code (IaC) to provision and manage resources across multiple environments.
- Integrate with **AWS** and **Azure** cloud platforms for scalable and highly available infrastructure deployments.
- Enhance security using **SAST/DAST** tools like SonarQube, Trivy, and OWASP ZAP.

---
