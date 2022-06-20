const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5d9b0c9a47msh79b8c2d26e39314p19c3e2jsne094293021ef',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

async function fetchData() {
	const namaPertama = document.getElementById("couple-nama-pertama").value;
    const namaKedua = document.getElementById("couple-nama-kedua").value;
    const persentase = document.getElementById("result-persentasi");
    const message = document.getElementById("result-pesan");
	let data = []
	let result = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${namaPertama}&fname=${namaKedua}`, options)
		.then(response => response.json())
		.then(result => {
				persentase.innerHTML = result.percentage;
				message.innerHTML = result.result;
        })
		.catch(err => {return data = [...data, err]});
	return result;
};