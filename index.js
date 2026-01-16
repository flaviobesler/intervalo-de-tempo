console.log('js carregou')





const btnResultado = document.getElementById('resultado');
const spanHora = document.getElementById('spanhora');

btnResultado.addEventListener('click', () =>{
    const seg = Number(document.getElementById('int1s').value);
    const min = Number(document.getElementById('int1m').value);
    const h = Number(document.getElementById('int1h').value);

    const seg2 = Number(document.getElementById('int2s').value);
    const min2 = Number(document.getElementById('int2m').value);
    const h2 = Number(document.getElementById('int2h').value);


    //transforma em segundos

    const trans_interv_1 = seg + (min*60) +(h*3600);
    const trasn_interv_2 = seg2 +(min2*60) +(h2*3600);

    console.log(trans_interv_1)
    console.log(trasn_interv_2)
    //calculando intervalo

 
    const somaInterv = trans_interv_1 + trasn_interv_2;
    const subInterv = trans_interv_1 - trasn_interv_2;
   

    //interpretando resultado
    //soma
    const divisor = 60
    let segundoSoma = somaInterv % divisor;
    let minutoSoma = Math.trunc((somaInterv / divisor)/60);
    let horaSoma = Math.trunc( somaInterv /3600);

    console.log(segundoSoma)
    console.log(minutoSoma)
    console.log(horaSoma)


    //subtração
    let SegundoSub = subInterv % divisor;
    let minutoSub = Math.trunc((subInterv / divisor)/60);
    let horaSub = Math.trunc(subInterv /3600);
  


    spanHora.textContent = `soma dos intevalos: ${horaSoma} h: ${minutoSoma} min : ${segundoSoma} s, 
                            subtraçãp dos intervalos: ${horaSub} h: ${minutoSub} min: ${SegundoSub} s`
})




