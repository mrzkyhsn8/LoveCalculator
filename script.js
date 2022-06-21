// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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
	const resultNama = document.getElementById("result-nama");
    const persentasi = document.getElementById("result-persentasi");
    const message = document.getElementById("result-pesan");
	let data = []
	let result = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${namaPertama}&fname=${namaKedua}`, options)
		.then(response => response.json())
		.then(result => {

			const persen = result.percentage;
			const pesan = result.result;
			
			// tampil nama
			resultNama.innerHTML = `<div>${namaPertama} & ${namaKedua}</div>`;
			
			// tampil hasil persen dan
			let c=0;
			function viewResult() {
				setTimeout( () => {
					persentasi.innerHTML = `
						<div>${c} %</div>
					`
					c++;
					if ( c <= persen ) {
						viewResult();
					} else {
						message.innerHTML = `<div>${pesan}</div>`;
					}
				}, 100);
				clearForm();
			}

			// kosongkan form input
			function clearForm() {
				document.getElementById("couple-nama-pertama").value = '';
				document.getElementById("couple-nama-kedua").value = '';
			}

			viewResult();
        })
		.catch(err => {return data = [...data, err]});
	return result;
};

