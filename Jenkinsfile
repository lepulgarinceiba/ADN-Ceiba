pipeline {

  //Donde se va a ejecutar el Pipeline

  agent {

    label 'Slave_Induccion'

  }










   //Aquí comienzan los “items” del Pipeline

  stages{

    stage('Checkout') {

      steps{

        echo '------------>Checkout<------------'

        checkout([

            $class: 'GitSCM',

            branches: [[name: '*/master']],

            doGenerateSubmoduleConfigurations: false,

            extensions: [],

            gitTool: 'Default',

            submoduleCfg: [],

            userRemoteConfigs: [[

                credentialsId: 'GitHub_lepulgarinceiba',

                url:'https://github.com/lepulgarinceiba/ADN-Ceiba.git'

            ]],

        ])




      }

    }




    stage('Install') {

      steps{

        echo '------------>Install<------------'

        sh 'npm install'

      }

    }

    stage('Test') {

      steps{

        echo '------------>Test<------------'

        sh 'npm run test -- --watch=false --browsers ChromeHeadless'

      }

    }

    stage('Static Code Analysis') {

      steps{

        echo '------------>Análisis de código estático<------------'

        withSonarQubeEnv('Sonar') {

            sh '${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties'

        }

      }

    }




    stage('Build') {

      steps {

        echo '------------>Build<------------'

        sh 'npm run build'

      }

    }

  }




  post {

    always {

      echo 'This will always run'

    }

    success {

      echo 'This will run only if successful'

    }

    failure {

      echo 'This will run only if failed'

    }

    unstable {

      echo 'This will run only if the run was marked as unstable'

    }

    changed {

      echo 'This will run only if the state of the Pipeline has changed'

      echo 'For example, if the Pipeline was previously failing but is now successful'

    }

  }

}
