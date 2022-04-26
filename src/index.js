//Elementos HTML
const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
const img = document.querySelector('#img');
const url = 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

//AbortController
let abortController;

/**
 * async: Inicia la carga
 */
const startLoading = async () => {
    img.src = '';
    btnStart.disabled = true;
    btnStart.innerText = 'Cargando...';
    btnStop.disabled = false;
}

/**
 * async: Detiene la carga
 */
const stopLoading = async () => {
    btnStart.disabled = false;
    btnStart.innerText = 'Cargar imágen';
    btnStop.disabled = true;
}

/**
 * async: OnClick btnStart
 */
btnStart.onclick = async () => {
    startLoading();

    //Inicializa AbortController
    abortController = new AbortController()
    try {

        //Fetch de URL, y se pasa como objeto signal
        const response = await fetch(url, { signal: abortController.signal });

        //Se obtiene imágen en blob
        const blob = await response.blob();

        //Crear url del blob y asigna al source del img
        img.src = URL.createObjectURL(blob);

        stopLoading();
    } catch (err) {
        console.log('Error:', err);
    }
}

/**
 * async: OnClick btnStart
 */
btnStop.onclick = async () => {
    
    //Aborta el control
    abortController.abort();
    stopLoading();
}