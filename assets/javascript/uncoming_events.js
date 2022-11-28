

//const datosObject = data.events
//let datos = [...datosObject]
//
contendorTarjetas = document.getElementById("tarjetasContendor");
let categoryArray = []
let actualCategory = []
let actualInput = ''
let nav = document.querySelector(".container")
//crea las trjetas



let displayData = (item) => {
	let aux = ''
	contendorTarjetas.innerHTML = ''

	item.forEach(dato => {
	let template = `
				<div class="card d-flex flex-wrap gap-5 p-5 justify-content-center bg-dark ${dato.category.replace(/ /g, "")}" style="width: 18rem;">
				  <img class="card-img-top" src="${dato.image}" alt="Card image cap">
				  <div class="card-body">
				    <h5 class="card-title text-white">${dato.name}</h5>
				    <p class="card-text text-white">${dato.date}</p>
				    <p class="card-text text-white">${dato.description}</p>
				    <a href="#" class="btn btn-primary infomación" id="${dato.name.replace(/ /g, "")}" >infomación</a>
				    
				  </div>
				</div>


	`
	 aux += template
	})

	return aux
}



const cards = document.querySelectorAll(".card")
let filtrador  = document.querySelector(".ContendorChek")



let search = document.querySelector(".search-input")


search.addEventListener("input", (evento) => {
	actualInput = evento.target.value
	checkbox()
})

const cardsArr = Array.from(cards);



function checkbox(){
	let events = []

	events.push(...datos.filter(evento => {
		return evento.name.toLowerCase().split('').join('').startsWith(actualInput)
	}))

	if (categoryArray.length >= 1){
		events = events.filter(evento => {
			return categoryArray.includes(evento.category)
		})
	}
	if(actualInput.length >= 1 || categoryArray.length >= 1){
		if (displayData(events).length === 0) { contendorTarjetas.innerHTML = `<h2 class="display-1 d-flex justify-content-center">No encontrado</h2>`
		}
		else{contendorTarjetas.innerHTML = displayData(events)}
	}
	else {
		contendorTarjetas.innerHTML = displayData(datos)
	}
}

function categorias(){
	let auxDos = ''
	let arry = []
		for (let dato of datos) {
		arry.push(dato.category)
		}

	let nombres =  (arry.filter((e,i,a) => a.indexOf(e) === i));
		for (let nombre of nombres) {
			let categorias = `
		<div class="form-check form-check-inline">
				  <input class="form-check-input " type="checkbox" id="${nombre}" value="${nombre.replace(/ /g, "")}">
				  <label class="form-check-label " for="inlineCheckbox1">${nombre}</label>
		</div>
			`
		auxDos +=  categorias

		}
		//auxDos += `<form class="form-inline">
				    //<input class=" mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				    //<button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="bi bi-search"></i></button>
				  //</form>`
	return auxDos

}





// CREA Y MUESTRA EL BOTON Y LA INCFOMACION
let infomaciónes = document.querySelectorAll(".infomación")
infomaciónes.forEach(info =>{
info.addEventListener("click", (e)=>{
e.preventDefault()
	datos.forEach(dato =>{
		
		if (dato.name.replace(/ /g, "") === e.target.id) {
			let dataso = `
			<div class="d-flex flex-wrap  flex-column "id="tarjetasContendor">
		 
				<div class="card d-flex flex-wrap  flex-column    bg-dark ${dato.category.replace(/ /g, "")} ">
				  
				  <img class="card-img-top" src="./assets/imagenes//Cine7.jpg " alt="Card image cap">
				  <div class="card-body   justify-content-center">

				    <h5 class="card-title text-white "   >${dato.name}</h5>
				    <p class="card-text text-white "> felcha: ${dato.date}</p>
				    <p class="card-text text-white ">${dato.description}</p>
				    <p class="card-text text-white ">category: ${dato.category}</p>
				    <p class="card-text text-white ">place: ${dato.place}</p>
				    <p class="card-text text-white ">capacity: ${dato.capacity}</p>
				    
				  </div>
			</div>`
			contendorTarjetas.innerHTML = dataso
		}
})})})





contendorTarjetas = document.getElementById("tarjetasContendor");
//const contndeor = contendorTarjetas;











fetch("https://amazing-events.herokuapp.com/api/events").then(responde =>responde.json()
.then(data=>{
datos = data.events


filtrador.innerHTML = categorias() 

let checkboxElements = document.querySelectorAll('.form-check-input')
checkboxElements.forEach(element => {
	element.addEventListener('click',(evento) => {
		actualCategory = evento.target.id

		if (!categoryArray.includes(actualCategory)){
			categoryArray.push(actualCategory)
		} else {
			let indexCategory = categoryArray.indexOf(actualCategory)
			categoryArray.pop(indexCategory)
		}

		checkbox()
	})
	
})






let infomaciónes = document.querySelectorAll(".infomación")
infomaciónes.forEach(info =>{
info.addEventListener("click", (e)=>{
e.preventDefault()
	datos.forEach(dato =>{
		
		if (dato.name.replace(/ /g, "") === e.target.id) {
			let dataso = `
			<div class="d-flex flex-wrap  flex-column "id="tarjetasContendor">
		 
				<div class="card d-flex flex-wrap  flex-column    bg-dark ${dato.category.replace(/ /g, "")} ">
				  
				  <img class="card-img-top" src="${dato.image}" alt="Card image cap">
				  <div class="card-body   justify-content-center">

				    <h5 class="card-title text-white "   >${dato.name}</h5>
				    <p class="card-text text-white "> felcha: ${dato.date}</p>
				    <p class="card-text text-white ">${dato.description}</p>
				    <p class="card-text text-white ">category: ${dato.category}</p>
				    <p class="card-text text-white ">place: ${dato.place}</p>
				    <p class="card-text text-white ">capacity: ${dato.capacity}</p>
				    
				  </div>
			</div>`
			contendorTarjetas.innerHTML = dataso
		}
})})})





contendorTarjetas = document.getElementById("tarjetasContendor");
//const contndeor = contendorTarjetas;





datosFiltrados =[]

for (const dato of datos) {
	if (dato.assistance === undefined) {
	 datosFiltrados.push(dato)
		console.log(datosFiltrados);
	}

contendorTarjetas.innerHTML = displayData(datosFiltrados)

}
})

).catch(error => console.log(error))
