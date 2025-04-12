pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:/Users/91620/Desktop/Sem6/DevOps/DevOpsProject/KBC_GAME'  // Change this to your deployment directory
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/tanis-hkraj/KBC_GAME.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing frontend dependencies...'
                // No dependencies for basic static site. Add if using npm/yarn.
            }
        }

        stage('Lint Code') {
            steps {
                echo 'Linting HTML/CSS/JS (Optional)...'
                // You can use htmlhint, stylelint, eslint if desired
            }
        }

        stage('Build/Prepare') {
            steps {
                echo 'Preparing files for deployment...'
                sh 'mkdir -p build'
                sh 'cp -r *.html *.css *.js logo-photoaidcom-cropped.png build/'
                // Include media/music folder if present
                sh 'cp -r music build/'
            }
        }

        stage('Deploy to Web Server') {
            steps {
                echo "Deploying to $DEPLOY_DIR"
                sh "rm -rf $DEPLOY_DIR/*"
                sh "cp -r build/* $DEPLOY_DIR/"
            }
        }

        stage('Clean up') {
            steps {
                echo 'Cleaning temporary files...'
                sh 'rm -rf build'
            }
        }
    }

    post {
        success {
            echo '🎉 Deployment Successful!'
        }
        failure {
            echo '❌ Deployment Failed.'
        }
    }
}
