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
			
			<script>
				

				let option = {
					animation: false,
						title: {
							left: 'center',
							text: function() {
								// 超过16位部分显示...
								
								return 'aaaaaaaa'
							}(),
							subtext: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
							top:22,
							textStyle: {
								color: '#444',
								fontSize: 15,
							},
							subtextStyle: {
								color: '#666',
								fontSize: 12,
							}
						},
						grid: {
							top: 90  
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: [1,3,5,4,45,5,4,4,5,6,6],
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
						},
						yAxis: {
							type: 'value',
							boundaryGap: [0, '10%'],
							axisLine: {
								show: false
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								formatter: function(v) {
									return 'cccc';
								},
								

							}
						},
						series: [{
							type: 'line',
							smooth: true,
							symbol: 'none',
							sampling: 'average',
							itemStyle: {
								normal: {
									color: '#B2CF07'
								}
							},
							
							data: [1,2,3,44,5,5,,23,1,12]
						}]
					}
				var myChart = window.echarts.init(document.getElementById('container'), null, {
					renderer: 'svg'
				});
				myChart.setOption(option);
			</script>
			</body>
			</html>`

            //读取模板
            await page.setContent(content);
			console.log(path.resolve(__dirname, './echarts.js'));
			
			await page.addScriptTag({
                path: path.resolve(__dirname, './echarts.js')
				//'http://t.bonjs.com/echarts.min.js'

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
