pipeline {
    agent any
    tools {
        // Define the 'NODEJS' tool with a correct tool name and label
        nodejs 'NODEJS'
    }
    stages {
        stage('Fetch repo') {
            steps {
                git 'https://github.com/coduori/gallery-ip1'
                echo 'Successfully cloned the repository!'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use the 'nodejs' tool to run npm install
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Use the 'nodejs' tool to run npm test
                sh 'npm test'
            }
        }
        stage('Run Application') {
            steps {
                // Use the 'nodejs' tool to run npm start
                sh 'npm start'
            }
        }
    }
}