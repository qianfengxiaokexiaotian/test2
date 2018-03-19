	
	const devConfig = require('./webpack.de.conf')
	
	moudel.exports = (evn='dev') {
		
		if(evn==='dev'){
			
			return devConfigt
			
		}else {
			
			return devConfig
			
		}
		
	}
