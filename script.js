//your JS code here. If required.
function createPromise(delay,resState){
	return new Promise((resolve,reject)=>{
		let startTime = Date.now();
		setTimeout(()=>{
			let endTime = Date.now();
			let timeTaken = (endTime-startTime)/1000
				resolve({resState,timeTaken});
		},delay);
	});     
}

let p1 = createPromise(1000,"Promise 1");
let p2 = createPromise(2000,"Promise 2");
let p3 = createPromise(2300,"Promise 3");

let comb = Promise.all([p1,p2,p3]);
comb.then((values)=>{
	let loading = document.getElementById("loading");
	loading.remove();

	let tablee = document.getElementById("output");  
	let totalTime = 0;
	for(let i=0;i<values.length;i++){
		let row = tablee.insertRow();
		let col1 = row.insertCell(0);
		let col2 = row.insertCell(1);
		col1.innerHTML = values[i].resState;
		col2.innerHTML = values[i].timeTaken;
		if(totalTime<values[i].timeTaken){
			totalTime = values[i].timeTaken; 
		}
	} 
	let row = tablee.insertRow();
	let col1 = row.insertCell(0);
	let col2 = row.insertCell(1);
	col1.innerHTML = "Total";
	col2.innerHTML = totalTime; 
}).catch((err)=>console.log(err));