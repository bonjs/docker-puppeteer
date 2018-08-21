const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async() => {

  
  //await puppeteer.launch({headless: true,args: ['--no-sandbox', '--disable-setuid-sandbox']});
  
  const browser = await puppeteer.launch({
           args: ['--no-sandbox', '--disable-setuid-sandbox'],
            ignoreHTTPSErrors: true,
            headless:true
        });
        const page = await browser.newPage();
      
		let content = `<html>

			<body>
			
			<div id=container style="width: 800px; height: 500px">testaaaaa aaa</div>
			
			
			</body>
			</html>`

            //读取模板
            await page.setContent(content);
			console.log(path.resolve(__dirname, './echarts.js'));
			
			await page.addScriptTag({
                path: path.resolve(__dirname, './echarts.js')
            });
			await page.addScriptTag({
                path: path.resolve(__dirname, './main.js')
            });
			await page.waitFor(11);
			
			let $el = await page.$('#container');
            let buffer = await $el.screenshot({
                type: 'png'
            });

		
			console.log(buffer);
			
			var d = 'test';
			
			fs.writeFile(path.resolve(__dirname, './' + d + '.png'), buffer, (err) => {
				console.log('ok')
				
			})
})();
