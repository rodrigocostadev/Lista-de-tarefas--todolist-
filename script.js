var listatarefas = [];
var arraybotaoclicado = [];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////Carregar tarefas criadas de pagina que foi fechada com função onload///////////////////////////////////
onload = function atualizar1 (){
    //Local storage para carregar da memoria a pagina fechada e adicionar atributos de acordo com o indice do array//
    var getlista = localStorage.getItem("buscarlista")
    var listaLS = JSON.parse(getlista)
    let lista = document.getElementById("listaelementos")
    // console.log(getlista)
    console.log(listaLS)
    // console.log(listaLS.length)

    /////Adicionando atributos com For/////
    for ( let i = 0; i < listaLS.length; i++){
        // console.log(listaLS[i])
        var div = document.createElement("div")
        let apagar = document.createElement("button")
        let editar = document.createElement("button")
        let tarefainput = document.createElement("input")

        // div.textContent = listaLS[i]
        div.setAttribute("id", [i])
        div.setAttribute("class", "elementos")
        lista.append(div)

        tarefainput.value = listaLS[i]
        tarefainput.setAttribute("id", [i])
        tarefainput.setAttribute("class", "tarefainput")
        div.append(tarefainput)

        editar.textContent = "Editar"
        editar.setAttribute("class", "editar")
        editar.setAttribute("id", [i])
        div.append(editar)

        apagar.textContent = "Apagar"
        apagar.setAttribute("class", "apagar")
        apagar.setAttribute("id", [i])
        div.append(apagar)                
    }

    var getbotaoclicado = localStorage.getItem("buscarbotaoclicado")
    var botaoclicadoLS = JSON.parse(getbotaoclicado) 
    let botaoclicadocarregado = botaoclicadoLS       

    // console.log(listaindex)
    // console.log(botaoclicadocarregado)

    // faz com que as divs que foram apagadas anteriormente não apareçam
    for ( let i = 0; i < botaoclicadocarregado.length; i++){                //PROBLEMA COM O 0. ESTA APAGANDO A 1 DIV CARREGADA
        let divapagada = document.getElementById(botaoclicadocarregado[i])         
        lista.removeChild(divapagada)
    }

    let classapagar = document.querySelectorAll(".apagar")
    classapagar.forEach(function(ev){
        ev.addEventListener("click", fuctionapagar2)
    })


    /////////////////////////////////////////////////////////////////////////////////////////////
    function fuctionapagar2 (evento2) {

        let botaoclicado2 = evento2.target.id
        let listaindex2 = listaLS.indexOf(listaLS[botaoclicado2])
        // console.log(listaindex2)
        // console.log(botaoclicado2)
        // console.log(listaLS)        

    if ( listaindex2 == botaoclicado2 ){
        let divapagada2 = document.getElementById(listaindex2)
        let lista = document.querySelector("#listaelementos")

        lista.removeChild(divapagada2)
        listaLS.splice(listaindex2, 1 , null)
        // console.log(listaLS)

        let salvalista2 = JSON.stringify(listaLS)
        localStorage.setItem("buscarlista", salvalista2)

        var getbotaoclicado = localStorage.getItem("buscarbotaoclicado")
        var botaoclicadoLS = JSON.parse(getbotaoclicado) 
        botaoclicadoLS.push(botaoclicado2)
        let salvabotaoclicado2 = JSON.stringify(botaoclicadoLS)
        localStorage.setItem("buscarbotaoclicado", salvabotaoclicado2)

        // console.log(listaLS)
        // console.log(salvabotaoclicado2)

        }

         // faz com que as divs que foram apagadas anteriormente não apareçam
         for ( let i = 0; i < botaoclicadocarregado.length; i++){                //PROBLEMA COM O 0. ESTA APAGANDO A 1 DIV CARREGADA
            let divapagada = document.getElementById(botaoclicadocarregado[i])         
            lista.removeChild(divapagada)
        }
        

    }

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Botão criar + Adicionar atributos de acordo com o indice de cada array
document.getElementById("botaocriar").addEventListener("click", function(){
    let textoinp = document.getElementById("input")
    let lista = document.getElementById("listaelementos")
    var div = document.createElement("div")

    let apagar = document.createElement("button")
    let editar = document.createElement("button")
    let tarefainput = document.createElement("input")
    
        // div.textContent = textoinp.value

    if(textoinp.value != ""){

        lista.append(div)

        tarefainput.value = textoinp.value
        tarefainput.setAttribute("class", "tarefainput")
        tarefainput.setAttribute("readonly","readonly")
        div.append(tarefainput)

        editar.textContent = "Editar"
        editar.setAttribute("class", "editar")
        div.append(editar)

        apagar.textContent = "Apagar"
        apagar.setAttribute("class", "apagar")
        div.append(apagar)  
        
        listatarefas.push(textoinp.value)

        for( let i = 0; i < listatarefas.length; i++){           
            div.setAttribute("id", [i])
            div.setAttribute("class", "elementos")
            tarefainput.setAttribute("id",[i])
            apagar.setAttribute("id", [i])
            editar.setAttribute("id", [i])
        }

        let classeditar = document.querySelectorAll(".editar") //pega todos os botões apagar
        classeditar.forEach(function(e){ // faz um for em todos os botoes apagar
            e.addEventListener("click", functioneditar ) // adiciona o evento click em todos os botoes apagar
        })

        function functioneditar(evento){
            let botaoclicado = evento.target.id

            // console.log(listatarefas[botaoclicado]) // pega a string clicada
            let listaindex = listatarefas.indexOf(listatarefas[botaoclicado]) // pega o index da string
            // let diveditada = document.getElementById(listaindex)
            let classtarefainput = document.querySelectorAll(".tarefainput")
            // let classtarefainputselecionada = classtarefainput.id[listaindex]

            console.log(classtarefainput.id[listaindex])    ///////CONTINUA DAQUI

            // console.log(botaoclicado)

            // if( listaindex == botaoclicado){

            //     // let diveditada = document.getElementById(listaindex)
            //     let inputeditado = document.get                
            // }

            // if (botaoclicado == diveditada ){
                // let classtarefainput = document.querySelectorAll(".tarefainput")
                // let classtarefainput = document.getElementById(listaindex)
                
                // classtarefainput = id[listaindex]
                // let tarefainputselecionada = classtarefainput
                // console.log(classtarefainputselecionada)

                // let tarefainputselecionada = classtarefainput.id[listaindex]
                // console.log(tarefainputselecionada)
                // console.log(classtarefainput)
                // tarefainputselecionada.innerHTMl = ""

                // let classtarefainput 

            // }
        }

        
        let classapagar = document.querySelectorAll(".apagar") //pega todos os botões apagar
        classapagar.forEach(function(e){ // faz um for em todos os botoes apagar
            e.addEventListener("click", functionapagar ) // adiciona o evento click em todos os botoes apagar
        })

        function functionapagar (evento){
            var botaoclicado = evento.target.id

            // console.log(listatarefas[botaoclicado]) // pega a string clicada
            var listaindex = listatarefas.indexOf(listatarefas[botaoclicado]) // pega o index da string clicada            

            // console.log(listaindex)
            console.log(botaoclicado)

            if(listaindex == botaoclicado){

                let divapagada = document.getElementById(listaindex)                
                let lista = document.querySelector("#listaelementos")
                lista.removeChild(divapagada)
                
                // remove a string do array, 
                //remove 1 elemento do índice da variavel listaindex, e adiciona null para nao perder a ordem do array
                listatarefas.splice(listaindex, 1, null) 
                
                //atualiza o array de acordo com as divs apagadas
                var salvalista = JSON.stringify(listatarefas)
                localStorage.setItem("buscarlista", salvalista)

                // salva botões clicados para excluir as divs que foram clicadas na função onload                
                arraybotaoclicado.push(botaoclicado)
                // console.log(arraybotaoclicado)
                var salvabotaoclicado = JSON.stringify(arraybotaoclicado)
                localStorage.setItem("buscarbotaoclicado", salvabotaoclicado)

                // console.log(listatarefas)
                // console.log(listaindex)
                
            }
            
        }

        

        console.log(listatarefas)
        var salvalista = JSON.stringify(listatarefas)
        localStorage.setItem("buscarlista", salvalista)

        textoinp.value = ""  
        textoinp.focus()
    }

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("limpartudo").addEventListener("click",function(){
    let lista = document.getElementById("listaelementos")
    localStorage.removeItem("buscarlista")
    lista.textContent = ''
    document.location.reload(true) // atualiza a pagina para nao misturar novos arrays com antigos
})

