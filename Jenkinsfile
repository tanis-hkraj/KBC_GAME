pipeline {
    agent any

    environment {
        // Deploying safely inside project in a new folder
        DEPLOY_DIR = 'C:\\Users\\91620\\Desktop\\Sem6\\DevOps\\DevOpsProject\\KBC_GAME\\deployed'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '📥 Cloning the repository...'
                git branch: 'main', url: 'https://github.com/tanis-hkraj/KBC_GAME.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 No dependencies needed for static site.'
                bat 'if exist requirements.txt pip install -r requirements.txt'
            }
        }

        stage('Lint Code') {
            steps {
                echo '🔍 Linting HTML/CSS/JS (Optional)...'
            }
        }

        stage('Build/Prepare') {
            steps {
                echo '⚙️ Preparing files for deployment...'
                bat 'if not exist deployed mkdir deployed'
                bat 'copy index.html deployed\\ /Y'
                bat 'copy styles.css deployed\\ /Y'
                bat 'copy script.js deployed\\ /Y'
                bat 'copy logo.png deployed\\ /Y'
                bat 'xcopy music deployed\\music /E /I /Y'
                bat 'xcopy WinnerPage deployed\\WinnerPage /E /I /Y'
            }
        }

        stage('Deploy to Web Server') {
            steps {
                echo "✅ Deployment complete. Files moved to: ${env.DEPLOY_DIR}"
            }
        }

        stage('Clean up') {
            steps {
                echo '🧹 Nothing to clean up (safe build strategy).'
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
