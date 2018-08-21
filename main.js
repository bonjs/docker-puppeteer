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