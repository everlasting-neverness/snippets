const output = document.getElementById('output');
const getDataBtn = document.getElementById('get_data');
let worker;

document.addEventListener('DOMContentLoaded', init);

function init(){
    worker = new Worker('webworker.js');
    worker.addEventListener('message', workerMessaged);
    worker.addEventListener('error', workerError);
    
    // worker.postMessage('Get Started');
    
    getDataBtn.addEventListener('click', e => {
    		e.preventDefault();
        //send another message to the worker
        // worker.postMessage('Other');
        worker.postMessage({'do':'fetch'});
    })
}

function workerMessaged(ev){
    let data = ev.data;
    
    output.textContent += JSON.stringify(data, null, 2) + '\n';
}

function workerError(err){
    console.log(err.message, err.filename);
}

