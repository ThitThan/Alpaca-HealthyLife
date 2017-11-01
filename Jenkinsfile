pipeline{
  agent any
  stages {
	stage('build'){
	  steps{
	  sh 'echo "========================================================"'
		sh 'echo "============= [ Step : Build [1/4] ] ==================="'
		sh 'echo "============= [ Build [1/4] - Installing ] ============="'
    sh 'echo "============= [ Build [1/4] - Building ] ==============="'
    sh 'yarn'
		sh 'echo "========================================================"'
	  }
    }
   	stage('test'){
	  steps{
    sh 'echo "============= [ Testing [2/4] ] ============="'
		sh 'echo "============= [ Test passed [2/4] ] ============="'
		sh 'echo "================================================="'
	  }
    }
   	stage('development'){
	  steps{
		sh 'echo "=================== [ Step : Development. [3/4] ] ====================="'
		//Start Dev
		sh 'echo "============== [ Development [3/4] - Starting Service ] ==============="'
		sh 'pm2 start yarn --name healthy_dev -- start'
		input "ผ่านมั้ย ?"
		sh 'echo "============= [ Development [3/4] - Deleting Service ] ================"'
		sh 'pm2 delete healthy_dev'
		sh 'echo "======================================================================="'
	  }
    }
   	stage('production'){
	  steps{
		sh 'echo "============= [ Step : Production. [4/4] ] ===================================="'
		//Delete Service
		sh 'echo "============= [ Production [4/4] - Deleteing & Stoping Old Production ] ==================="'
    sh 'sudo -u id60058 -s "/var/www/stop.sh"'
		sh 'sh /var/www/del.sh'
		sh 'echo "============= [ Production [4/4] - copy to Production Server ] ================"'
		sh 'sh /var/www/copy.sh'
		sh 'echo "============= [ Production [4/4] - Starting Server ] =========================="'
		sh 'sudo -u id60058 -s "/var/www/start.sh"'
		sh 'echo "==============================================================================="'
	  }
    }
  }
}
