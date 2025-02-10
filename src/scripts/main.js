AOS.init();

const dataDoEvento = new Date("Oct 25, 2025 20:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 *24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;


    

    const diasAteOEvento =  Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs)
    const MinutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEVento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);



    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${MinutosAteOEvento}m ${segundosAteOEVento}s`;

    if (distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento espirado'
    }
}, 1000);