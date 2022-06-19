const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5d9b0c9a47msh79b8c2d26e39314p19c3e2jsne094293021ef',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};


async function fetchData() {
	let result = await fetch('https://love-calculator.p.rapidapi.com/getPercentage', options)
		.then(response => response.json())
		.then(response => {
			
			const json = await response.json();
			console.log("console log " + json);

			// simpan nama pertama ke variabel
			const namaPertama = document.getElementById("namaPertama").value;
			tampilNama1 = document.getElementById("tampilNama1");

			// simpan nama kedua ke variabel
			const namaKedua = document.getElementById("namaKedua").value;
			tampilNama2 = document.getElementById("tampilNama2");

			console.log(namaPertama);
			console.log(namaKedua);
			
			// tampilkan nama
			tampilNama1.innerHTML = `${namaPertama}`;
			tampilNama2.innerHTML = `${namaKedua}`;

			
		})
		.catch(err => console.error(err));
	
	
}
