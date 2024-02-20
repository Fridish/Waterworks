class Waterworks{
	static getSites(){
		return ['Agnesberg', 'Arketjarn', 'Eriksberg', 'Garda', 'Harsjo', 'Kalleredsbacken', 'Landvetter', 'Levgrensvagen', 'Larjean', 'MolndalCentrum', 'Nedsjon', 'Rada', 'Skars led', 'Slussen', 'Stensjon', 'Tingstad', 'Torshamnen'];
	}

	static async createChart(site, param, stDate, edDate){
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

		this.chartGen(values);
	}

	static chartGen(data){
		let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		let line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');

		line.style = 'fill:none;stroke:blue;stroke-width:1;';

		let xCounter = 0;

		console.log(data);

		const max = Math.max.apply(null, data);
		const min = Math.min.apply(null, data);
		console.log("min:", min, "max:", max);

		const margin = 5;
		const gain = (-100+margin)/(max-min);
		const bias = min*gain-100+margin/2;
		const spacing = 300/(data.length-1);
		console.log("gain:", -gain, "bias:", bias);

		data.forEach((value) =>{
			let point = svg.createSVGPoint();
			point.x = xCounter;
			point.y = value*gain-bias;
			line.points.appendItem(point);
			xCounter += spacing;
		});

		svg.appendChild(line);
		chartCont.appendChild(svg);

	}
}

// Waterworks.createChart('Agnesberg', 'Level', '2022-10-14', '2023-10-20');

chartBtn.addEventListener('click', () =>{
	Waterworks.createChart(mSite.value, 'Level', stDate.value, edDate.value);
});