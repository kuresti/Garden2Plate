async function fetchPartialData() {
    const response = await getGardenAPI();
    
    if (response && response.status === 206) {
        const contentRangeHeader = response.headers.get('Content-Range');
        if (contentRangeHeader) {
            const [, , , total] = contentRangeHeader.match(/\/(\d+)/);
            const totalItems = parseInt(total, 10);
            console.log("Total items in database:", totalItems);
        } else {
            console.log("Content-Range header not found in response.");
        }
    } else {
        console.log("Unexpected status code:", response.status);
    }
}

async function getGardenAPI() {
const url = 'https://garden-api.p.rapidapi.com/plants';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a280abf7efmsh09c8af167599834p1f9908jsn07c89b65bef1',
		'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	return response;
	console.log(result);
} catch (error) {
	console.error(error);
}
}

fetchPartialData();