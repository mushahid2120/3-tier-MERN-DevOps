pipeline{
    agent none
stages{
    stage('docker-build'){
        agent { label 'docker' }
        steps{
        git branch: 'main', url: 'https://github.com/mushahid2120/3-tier-MERN-DevOps.git'
        sh 'ls'
        dir("backend"){
            sh 'sudo docker build --rm -t mushahid144/my-node:v1 -f Docker/Dockerfile . '
            sh 'sudo docker push mushahid144/my-node:v1'
        }
        dir("frontend"){
            sh 'sudo docker build --rm -t mushahid144/my-react:v1 -f Docker/Dockerfile . '
            sh 'sudo docker push mushahid144/my-react:v1'
        }
        
        
    }
    }
    stage('k8s'){
        agent { label 'k8s' }
        steps{
        git branch: 'main', url: 'https://github.com/mushahid2120/3-tier-MERN-DevOps.git'
        dir("k8s") {
                        sh 'sudo kubectl create -k .'
                        sh 'sleep 10s'
                        sh 'sudo kubectl get all'
                    }
    }
    }
}
}