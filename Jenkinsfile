pipeline {
    agent {
        docker {
            image 'mhart/alpine-node:slim-14.4.0'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn'
            }
        }
    }
}
