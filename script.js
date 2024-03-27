//your JS code here. If required.
function createPromise(condition,delay,resState,rejectState){
	return new Promise((resolve,reject)=>{
		let startTime = Date.now();
		setTimeout(()=>{
			let endTime = Date.now();
			let timeTaken = (endTime-startTime)/1000
			if(condition){
				resolve({resState,timeTaken});
			}else{
				reject(rejectState);
			}
		},delay);
	});     
}

let p1 = createPromise(true,1000,"Promise 1","rejected");
let p2 = createPromise(true,2000,"Promise 2","rejected");
let p3 = createPromise(true,2300,"Promise 3","rejected");

let comb = Promise.all([p1,p2,p3]);
comb.then((values)=>{
	let loading = document.getElementById("loading");
	loading.remove();

	let tablee = document.getElementById("output").parentNode; 
	let totalTime = 0;
	let a = 0;
	for(let i=0;i<values.length;i++){
		let row = tablee.insertRow();
		let col1 = row.insertCell(0);
		let col2 = row.insertCell(1);
		col1.innerHTML = values[i].resState;
		col2.innerHTML = values[i].timeTaken;
		totalTime+=values[i].timeTaken;
		a++;
	} 
	let row = tablee.insertRow(a+1);
	let col1 = row.insertCell(0);
	let col2 = row.insertCell(1);
	col1.innerHTML = "Total";
	col2.innerHTML = totalTime; 
	
}).catch((err)=>console.log(err));