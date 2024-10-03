/*llamada de las secciones que vamos a mostrar u ocultar*/
document.addEventListener('DOMContentLoaded',()=>{
    const VT=document.querySelector("#ventasTotales");
    const VS=document.querySelector("#ventasXsemana");
    const VM=document.querySelector("#ventasxmes");
    const MV=document.querySelector("#productosMasVendidos");
    
    VS.classList.add("active");
    VM.classList.add("active");
    MV.classList.add("active");
    /*Botones de accion*/ 
    const btnVT=document.querySelector("#btnVT");
    const btnVS=document.querySelector("#btnVS");
    const btnVM=document.querySelector("#btnVM");
    const btnMV=document.querySelector("#btnMV");
  
    function showVT()
    { 
        VS.classList.add("active");
        VM.classList.add("active");
        MV.classList.add("active");
        VT.classList.remove("active");
    }

    function showVS()
    { 
        VT.classList.add("active");
        VM.classList.add("active");
        MV.classList.add("active");
        VS.classList.remove("active");
    }

    function showVM()
    { 
        VS.classList.add("active");
        VT.classList.add("active");
        MV.classList.add("active");
        VM.classList.remove("active");
    }

    function showMV()
    { 
        VS.classList.add("active");
        VM.classList.add("active");
        VT.classList.add("active");
        MV.classList.remove("active")
    }

    btnVT.addEventListener('click',()=>{showVT()});
    btnVS.addEventListener('click',()=>{showVS()});
    btnVM.addEventListener('click',()=>{showVM()});
    btnMV.addEventListener('click',()=>{showMV()});
    
    })
    
