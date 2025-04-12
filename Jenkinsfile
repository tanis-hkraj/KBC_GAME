pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:\\Users\\91620\\Desktop\\Sem6\\DevOps\\DevOpsProject\\KBC_GAME'  // Update to your target directory
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                git branch: 'main', url: 'https://github.com/tanis-hkraj/KBC_GAME.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing frontend dependencies...'
                // No actual installation needed for static files
            }
        }

        stage('Lint Code') {
            steps {
                echo 'Linting HTML/CSS/JS (Optional)...'
                // Add linting logic here if needed
            }
        }

        stage('Build/Prepare') {
    steps {
        echo 'Preparing files for deployment...'
        bat 'if not exist build mkdir build'
        bat 'copy index.html build\\'
        bat 'copy styles.css build\\'
        bat 'copy script.js build\\'
        bat 'copy logo-photoaidcom-cropped.png build\\'
        bat 'if exist music xcopy music build\\music /E /I /Y'
    }
}



        stage('Deploy to Web Server') {
            steps {
                echo "Deploying to ${env.DEPLOY_DIR}"
                bat "rmdir /S /Q \"${env.DEPLOY_DIR}\""
                bat "mkdir \"${env.DEPLOY_DIR}\""
                bat "xcopy build\\* \"${env.DEPLOY_DIR}\" /E /I /Y"
            }
        }

        stage('Clean up') {
            steps {
                echo 'Cleaning temporary files...'
                bat 'rmdir /S /Q build'
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
