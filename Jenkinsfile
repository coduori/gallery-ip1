pipeline{
    agent any
    stages{
        stage('Fetch repo'){
            steps{
                git 'https://github.com/coduori/gallery-ip1'
                echo 'Successfully clonned the repository!'
            }
        }
        stage('Install Dependencies'){
            steps{
                sh 'npm install'
                echo 'Successfully installed application dependencies!'
            }
        }
        stage('Test'){
            steps{
                sh 'npm run test'
                echo 'All good to go! Tests passed with flying colors!'
            }
        }
        stage('Run Application'){
            steps{
                sh 'npm start'
                echo 'Application started successfully!'
            }
        }
    }
}