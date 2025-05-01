pipeline {
  agent any

  environment {
    BACKEND_DIR =  "backend"
    FRONTEND_DIR =  "frontend"

    JWT_SECRET = credentials('jwt_secret')
    VITE_AUTHORIZATION_TOKEN = credentials('vite_auth_token')
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Pawan-kumar47129/docker.git'
      }
    }

    stage('Create Backend .env') {
      steps {
        dir("${BACKEND_DIR}") {
          writeFile file: '.env', text: """\
PORT=5000
MONGODB_URI=mongodb://mongo:27017/moviedb
JWT_SECRET=${JWT_SECRET}
CORS_ORIGIN=http://localhost:3000
"""
        }
      }
    }

    stage('Create Frontend .env') {
      steps {
        dir("${FRONTEND_DIR}") {
          writeFile file: '.env', text: """\
VITE_API_END_POINT=http://localhost:5000/api/v1/user
VITE_AUTHORIZATION_TOKEN=${VITE_AUTHORIZATION_TOKEN}
"""
        }
      }
    }

    stage('Install Backend Dependencies') {
      steps {
        dir("${BACKEND_DIR}") {
          bat 'npm install'
        }
      }
    }

    stage('Install Frontend Dependencies') {
      steps {
        dir("${FRONTEND_DIR}") {
          bat 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir("${FRONTEND_DIR}") {
          bat 'set "CI=false" && npm run build'
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        bat 'docker-compose build'
      }
    }

    stage('Run Containers') {
      steps {
        bat 'docker-compose up -d'
      }
    }

    stage('Verify') {
      steps {
        bat 'docker ps'
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
      bat 'docker-compose down'
    }
    success {
      echo 'Pipeline succeeded!'
    }
    failure {
      echo 'Pipeline failed!'
    }
  }
}
