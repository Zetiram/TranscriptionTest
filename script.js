// document.addEventListener('DOMContentLoaded', () => {
//     const transcriptionDiv = document.getElementById('transcription');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const texxt = document.getElementById('text')
    const trans = document.getElementById('trans')
    const btn = document.getElementById('btn')
    const selector = document.getElementById('langSelector')
    const vselector = document.getElementById('langVSelector')

let xml = false



const url = 'https://text-translator2.p.rapidapi.com/translate';

const a = new webkitSpeechRecognition();
a.interimResults = true;
a.lang = 'es-ES'
a.continuous = true;
console.log(a)



startButton.addEventListener('click', () => {
	a.start();
	console.log('activo')
	console.log(a)
	startButton.setAttribute('disabled', "")
	stopButton.removeAttribute('disabled', "")



stopButton.addEventListener('click', () => {
	a.stop();
	console.log('inactivo')
	stopButton.setAttribute('disabled', "")
	startButton.removeAttribute('disabled', "")

})

})

	a.onerror = (e) => {
		console.log(e.error)
	}
		a.onresult = (event) => {
	let final = event.results[0][0].transcript;
	let transs = "";
	transs = final


	const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '314833e91bmsh781cc4fc3b205cep11b599jsnaae3d3525f3e',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: 'es',
		target_language: 'en',
		text: transs
	})
};

async function blue() {
	try {
	const response = await fetch(url, options);
	const result = await response.json();
	texxt.innerText = result.data.translatedText
} catch (error) {
	console.error(error);
}
}
blue()
}

// Translation




