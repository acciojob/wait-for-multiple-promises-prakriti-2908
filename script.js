//your JS code here. If required.
function createPromise(condition,delay,resState,rejectState){
	return new Promise(resolve,reject){
		setTimeout(()=>{
			if(condition){
				resolve(resState);
			}else{
				reject(rejectState);
			}
		},delay);
	}
}

let p1 = createPromise(true,1000,"Promise 1","rejected");
let p2 = createPromise(true,2000,"Promise 2","rejected");
let p3 = createPromise(true,2300,"Promise 3","rejected");

let comb = Promise.all([p1,p2.p3]);
let loading = document.getElementById("load");
loading.classList.add("hide");

let tablee = document.getElementByClass("operation");
let row1 = tablee.insertRow(1);
let col10 = row1.insertCell(0);
let col11 = row1.insertCell(1);
col10.innerHTML = p1.then((data)=>return data);
col11.innerHTML = "1";

let row2 = tablee.insertRow(2);
let col20 = row1.insertCell(0);
let col21 = row1.insertCell(1);
col20.innerHTML = p2.then((data)=>return data);
col21.innerHTML = "2";

let row3 = tablee.insertRow(3);
let col30 = row1.insertCell(0);
let col31 = row1.insertCell(1);
col30.innerHTML = p3.then((data)=>return data);
col31.innerHTML = "2.3";
