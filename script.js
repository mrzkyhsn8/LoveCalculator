function getResult() {
    const namaPertama = document.getElementById("couple-nama-pertama").value;
    const namaKedua = document.getElementById("couple-nama-kedua").value;
    fetchData(namaPertama, namaKedua);
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5d9b0c9a47msh79b8c2d26e39314p19c3e2jsne094293021ef',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

async function fetchData() {
	let result = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John`, options)
		.then(response => response.json())
		.then(result => {
            console.log(result.fname)
            // console.log(`nama pertama: ${namaPertama}`);
            // console.log(`nama kedua: ${namaKedua}`);

            const namaPertama = document.getElementById("couple-nama-pertama").value;
            const namaKedua = document.getElementById("couple-nama-kedua").value;
            console.log(namaPertama);
            console.log(namaKedua);
            
        })
		.catch(err => console.error(err))
};