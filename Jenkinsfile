pipeline {
    agent any
    tools {
        nodejs 'Node 20.11.1'
    }
    stages {
        stage('Checkout') {
           steps {
                script {
                    git branch: 'main',
                        credentialsId: 'github-credentials',
                        url: 'https://github.com/yuri1998dark/projecttask.git'
                }
            }
        }
        stage('Build') {
            steps {
                echo "Building the proyect"
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Ejecución de pruebas...'
                // Agrega comandos para ejecutar pruebas unitarias o de integración.
                // Por ejemplo, si usas Jest:
                sh 'npm run test'
            }
        }
    }
}
