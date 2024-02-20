class Waterworks{
	static getSites(){
		return ['Agnesberg', 'Arketjarn', 'Eriksberg', 'Garda', 'Harsjo', 'Kalleredsbacken', 'Landvetter', 'Levgrensvagen', 'Larjean', 'MolndalCentrum', 'Nedsjon', 'Rada', 'Skars led', 'Slussen', 'Stensjon', 'Tingstad', 'Torshamnen'];
	}

	static async createChart(type, site, param, stDate, edDate){
		if (!this.getSites().includes(site)){
			console.log('Site not found');
			return;
		}

		let response = await fetch(`https://data.goteborg.se/RiverService/v1.1/Measurements/0f254316-99ab-4a86-90d4-25438b6822cc/${site}/${param}/${stDate}/${edDate}?format=json`);
		let fetchData = await response.json();

		let values = [];
	
		fetchData.forEach((index) =>{
			values.push(index['Value']);
		});

		switch (type){
		case "test":
			this.chartGen(values);
			break;
		case "line":
			this.chartJS('line', values);
			break;
		case "bar":
			this.chartJS('bar', values);
			break;
		default:
			console.log('Not a valid chart');
		}
	}

	static chartGen(values){
		let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		let line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');

		line.style = 'fill:none;stroke:blue;stroke-width:1;';

		let xCounter = 0;

		console.log(values);

		const max = Math.max.apply(null, values);
		const min = Math.min.apply(null, values);
		console.log("min:", min, "max:", max);

		const margin = 5;
		const gain = (-100+margin)/(max-min);
		const bias = min*gain-100+margin/2;
		const spacing = 300/(values.length-1);
		console.log("gain:", -gain, "bias:", bias);

		values.forEach((value) =>{
			let point = svg.createSVGPoint();
			point.x = xCounter;
			point.y = value*gain-bias;
			line.points.appendItem(point);
			xCounter += spacing;
		});

		svg.appendChild(line);
		chartCont.appendChild(svg);
	}

	static chartJS(type, values){
		const canvas = document.createElement('canvas');

		new Chart(canvas, {
			type: type,
			data: {
				labels: this.months({count: values.length}),
				datasets: [{
    				label: mSite.value+" - Vattennivå",
    				data: values,
    				fill: false,
    				borderColor: 'rgb(75, 192, 192)',
    				tension: 0.1
				}]
			}
		});

		chartCont.appendChild(canvas);
	}

	static months(config){
		let count = config.count;
		let values = [];

		for (let i = 0; i < count; ++i) {
			values.push("No Label");
		}

		return values;
	}
}

// Waterworks.createChart('Agnesberg', 'Level', '2022-10-14', '2023-10-20');

chartBtn.addEventListener('click', () =>{
	Waterworks.createChart(chartType.value, mSite.value, 'Level', stDate.value, edDate.value);
});