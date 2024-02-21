class Waterworks{
	static getSites(){
		return ['Agnesberg', 'Arketjarn', 'Eriksberg', 'Garda', 'Harsjo', 'Kalleredsbacken', 'Landvetter', 'Levgrensvagen', 'Larjean', 'MolndalCentrum', 'Nedsjon', 'Rada', 'Skars led', 'Slussen', 'Stensjon', 'Tingstad', 'Torshamnen'];
	}

	static getSitesSE(){
		return ['Agnesberg', 'Arketjärn', 'Eriksberg', 'Gårda dämme', 'Härsjo dämme', 'Kålleredsbäcken', 'Landvettersjöns dämme', 'Levgrensvägen', 'Lärjeholm', 'Mölndal C', 'Nedsjöns dämme', 'Rådasjön', 'Skårs led', 'Slussen', 'Stensjö dämme', 'Tingstad', 'Torshamnen'];
	}

	static async createChart(cont, type, site, stDate, edDate){
		if (!this.getSites().includes(site)){
			console.log('Site not found');
			return;
		}

		let response = await fetch(`https://data.goteborg.se/RiverService/v1.1/Measurements/0f254316-99ab-4a86-90d4-25438b6822cc/${site}/Level/${stDate}/${edDate}?format=json`);
		let fetchData = await response.json();

		let values = [];
	
		fetchData.forEach((index) =>{
			values.push(index['Value']);
		});

		switch (type){
		case "test":
			this.chartGen(cont, values);
			break;
		case "line":
			this.chartJS(cont, 'line', values, stDate, edDate);
			break;
		case "bar":
			this.chartJS(cont, 'bar', values, stDate, edDate);
			break;
		default:
			console.log('Not a valid chart');
		}
	}

	static chartGen(cont, values){
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
		cont.appendChild(svg);
	}

	static chartJS(cont, type, values, stDate, edDate){
		let canvas = document.createElement('canvas');

		new Chart(canvas, {
			type: type,
			data: {
				labels: this.getDateLabels(values.length, stDate, edDate),
				datasets: [{
    				label: this.getSitesSE()[this.getSites().indexOf(mSite.value)]+" - Water Level",
    				data: values,
    				fill: false,
    				tension: 0
				}],
			}
		});
		cont.textContent = '';
		cont.appendChild(canvas);
	}

	static getDateLabels(count, stDate, edDate){
		const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		let labels = [];

		let day = +stDate.split('-')[2];
		let month = +stDate.split('-')[1];
		let year = +stDate.split('-')[0];

		for (let i = 0; i < count; i++){
			if (day > monthDays[month-1] + (month == 2) * (year % 4 == 0)){
				month++;
				day = 1;
			}
			if (month > 12){
				year++;
				month = 1;
			}
			labels.push(day+"/"+month+" - "+year);
			day++;
		}
		return labels;
	}

	static async chartToday(cont){
		let date = new Date();
		const offset = date.getTimezoneOffset();
		date = new Date(date.getTime() - (offset*60*1000));
		let today = date.toISOString().split('T')[0];
		date = new Date(date.getTime() - 24*60*60*1000);
		let yesterday = date.toISOString().split('T')[0];

		let values = [];

		for (let i = 0; i < this.getSites().length; i++){
			let response = await fetch(`https://data.goteborg.se/RiverService/v1.1/Measurements/0f254316-99ab-4a86-90d4-25438b6822cc/${this.getSites()[i]}/Level/${yesterday}/${today}?format=json`);
			let fetchData = await response.json();
	
			fetchData.forEach((index) =>{
				values.push(index['Value']);
			});
		}

		let canvas = document.createElement('canvas');

		new Chart(canvas, {
			type: 'bar',
			data: {
				labels: this.getSitesSE(),
				datasets: [{
				    label: "Today's Water Level",
				    data: values,
				    fill: false,
				    tension: 0
				}]
			}
		});
		cont.appendChild(canvas);
	}
}