pipeline {
    agent any
    tools{
        maven "mymaven"
        jdk "jdk17"
        nodejs "mynodejs"
    }
    environment{
        SCANNER_HOME= tool "sonar-scanner"
    }
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/mushahid2120/3-tier-MERN-DevOps.git'
            }
        }
        stage('trivy fs scan') {
            steps {
                sh "trivy fs ."
            }
        }
        stage('OWASP scan') {
            steps {
                dependencyCheck additionalArguments: "--scan . --disableYarnAudit  --disableNodeAudit", odcInstallation: 'myDC'
                dependencyCheckPublisher pattern: "**/dependency-check-report.xml"
            }
        }
        stage('Docker Build') {
            
            steps {
                script{
                    withDockerRegistry(credentialsId: 'docker-cred', toolName: 'mydocker') {
                        dir('backend') {
                        sh "docker build -t backend-image -f Docker/Dockerfile ."
                        }
                    dir('frontend') {
                        sh "docker build -t frontend-image  -f Docker/Dockerfile ."
                        }
                        
                    }
                }
            }
        }
        
        stage('Docker Compose') {
            steps {
                script{
                    withDockerRegistry(credentialsId: 'docker-cred', toolName: 'mydocker') {
                        dir('docker-files') {
                            sh "docker-compose up -d"
                        }
                    }
                }
            }
        }
    }
    
}
