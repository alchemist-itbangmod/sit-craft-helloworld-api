pipeline {
  environment {
    DEV_USERNAME = "deployment"
    DEV_HOSTNAME = "helloworld.itbangmod.in.th"
    DEV_REMOTE_ARTIFACT_PATH = "/jenkins-artifact/sit-craft-helloworld-api"
    DEV_REMOTE_DEPLOY_PATH = "/jenkins-app/sit-craft-helloworld-api"
    ARCHIVE_ARTIFACT_PATH = "/jenkins-artifact/sit-craft-helloworld-api"
  }
  agent any
  stages {
    stage('build') {
      steps {
        slackSend channel: '#devops', color: '#439FE0', message: '[sit-craft-helloworld-api] เริ่มต้นการ Build #$BUILD_NUMBER', teamDomain: 'alchemist-itbangmod'
        sh 'yarn install'
        // sh 'yarn run build'
      }
    }
    stage('unit-test') {
      steps {
        sh 'echo unit-test'
        // sh 'yarn run test'
      }
    }
    stage('zipfile') {
      steps {
        sh 'tar cvzf "${ARCHIVE_ARTIFACT_PATH}/${JOB_NAME}-${BUILD_NUMBER}.tar.gz" *'
      }
    }
    stage('development') {
      steps {
        sh 'echo "Deploy To Development"'
        sh 'scp "${ARCHIVE_ARTIFACT_PATH}/${JOB_NAME}-${BUILD_NUMBER}.tar.gz" ${DEV_USERNAME}@${DEV_HOSTNAME}:${DEV_REMOTE_ARTIFACT_PATH}'
        sh 'ssh ${DEV_USERNAME}@${DEV_HOSTNAME} "tar -xf ${DEV_REMOTE_ARTIFACT_PATH}/"${JOB_NAME}-${BUILD_NUMBER}.tar.gz" -C ${DEV_REMOTE_DEPLOY_PATH}"'
        sh 'ssh ${DEV_USERNAME}@${DEV_HOSTNAME} "sudo pm2 restart sit-craft-helloworld-api"'
      }
    }
    stage('staging') {
      steps {
        sh 'echo "Deploy To Stagging"'
      }
    }
    stage('production') {
      steps {
        sh 'echo "Deploy To Production"'
      }
    }
  }
  post {
    always {
      echo 'This job was ended'
    }
    success {
      echo 'Success XD'
    }
    failure {
      echo 'Failure :('
    }
    unstable {
      echo 'Not OK Dude'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}