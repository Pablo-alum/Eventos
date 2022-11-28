
let contendor = document.querySelector(".contendor")



let MayorPrcentaje=()=>{
datosArrays=[]
datos.forEach(dato=> {
	if (dato.assistance==undefined){}
	else{datosArrays.push(Number(dato.assistance))}}
	
);
elmayor=Math.max(...datosArrays)

mayos=[]
datos.forEach(dato=>{
	if (dato.assistance==elmayor) {
		mayos.push(dato)
	}

})
return mayos[0];
}




let menorPrcentaje=()=>{
datosArrays=[]
datos.forEach(dato=> {
	if (dato.assistance==undefined){}
	else{datosArrays.push(Number(dato.assistance))}}
	
);
elmenor=Math.min(...datosArrays)

menor=[]
datos.forEach(dato=>{
	if (dato.assistance==elmenor) {
		menor.push(dato)
	}

})
return menor[0];
}






let mayorCapacidad =()=>{
datosArrays=[]
datos.forEach(dato=> {
	if (dato.capacity==undefined){}
	else{datosArrays.push(Number(dato.capacity))}}
);
elmayor=Math.max(...datosArrays)

mayos=[]
datos.forEach(dato=>{
	if (dato.capacity==elmayor) {
		mayos.push(dato)
	}

})
return mayos[0];
}

tablaDos=()=>{
let aux = ''
datosFiltrados = datos.filter(dato => dato.estimate)
	datosFiltrados.forEach(dato=>{
	let porcentaje = Number(dato.estimate)*100
	porcentaje = porcentaje/Number(dato.capacity)
	porcentaje = Math.round(porcentaje)
	let datasos=`
	
				<tr>
					<td>${dato.name}
					<td>${porcentaje}</td>
					<td>${dato.category}</td>
				</tr>
	
	`
aux += datasos
return aux
})

tabla = `       <table class="table table-dark">

			<caption>Tabla Dos</caption>
			<thead >
				<tr>

					<th>eventos futuros</th>
					<th>porcentaje de asitencia</th>
					<th>categoria</th>
				</tr>
				
				<tbody class>
					${aux}
				</tbody>
			</thead>`

return tabla
}


tablaTres=()=>{
let aux = ''
datosFiltrados = datos.filter(dato => dato.assistance)
	datosFiltrados.forEach(dato=>{
	let porcentaje = Number(dato.assistance)*100
	porcentaje = porcentaje/Number(dato.capacity)
	porcentaje = Math.round(porcentaje)
	let datasos=`
	
				<tr>
					<td>${dato.name}
					<td>${porcentaje}</td>
					<td>${dato.category}</td>
				</tr>
	
	`
aux += datasos
return aux
})

tabla = `       <table class="table table-dark">

			<caption>Tabla Tres</caption>
			<thead >
				<tr>

					<th>Evnetos pasados</th>
					<th>asitencias</th>
					<th>categoria</th>
				</tr>
				
				<tbody class>
					${aux}
				</tbody>
			</thead>`
return tabla

}


dibujoTablas=(nombre ,lineaUno , lineaDos, lineaTres)=>{
tabla = ` 


					<table class="table table-dark">

						<caption>${nombre}</caption>
					<thead >
						<tr>

							<th>Mayor porcentaje de asitencia </th>
							<th>Menor porcentaje de asitencia</th>
							<th>evento con mayor capacidad</th>
						</tr>
					</thead>
					<tbody class>
						<tr>
							<td>${lineaUno}</td>
							<td>${lineaDos}</td>
							<td>${lineaTres}</td>
						</tr>
					</tbody>

				</table>
`

return tabla

}


fetch("https://amazing-events.herokuapp.com/api/events").then(responde =>responde.json()
.then(data=>{
datos = data.events
let tabla1 = dibujoTablas("Tabla Uno" ,MayorPrcentaje().name + ": " + MayorPrcentaje().assistance, menorPrcentaje().name +": " + menorPrcentaje().assistance, mayorCapacidad().name +": " +mayorCapacidad().capacity );
tablaTres()
tablas = tabla1+tablaDos()+tablaTres()
contendor.innerHTML = tablas



}))
