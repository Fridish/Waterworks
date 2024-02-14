async function fetchData(site, param, stDate, edDate){
	const sites = ['Agnesberg', 'Arketjarn', 'Eriksberg', 'Garda', 'Harsjo', 'Kalleredsbacken', 'Landvetter', 'Levgrensvagen', 'Larjean', 'MolndalCentrum', 'Nedsjon', 'Rada', 'Skars led', 'Slussen', 'Stensjon', 'Tingstad', 'Torshamnen'];

	if (!sites.includes(site)){
		console.log('Site not found');
		return;
	}

	let response = await fetch(`https://data.goteborg.se/RiverService/v1.1/Measurements/0f254316-99ab-4a86-90d4-25438b6822cc/${site}/${param}/${stDate}/${edDate}?format=json`);
	let fetchData = await response.json();

	fetchData.forEach((index) =>{
		console.log(index['Value']);
	});

	chartGen(fetchData);
}fetchData('Agnesberg', 'Level', '2020-01-14', '2020-01-17');