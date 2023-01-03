var listatarefas = [];
var arraybotaoclicado = [];
let checkbotaoclicado = null

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////// BOTÃO CRIAR ///////////////////////////////////////////////////////////

//Botão criar + Adicionar atributos de acordo com o indice de cada array
document.getElementById("botaocriar").addEventListener("click", function(){
    let textoinp = document.getElementById("input")
    let lista = document.getElementById("listaelementos")
    var div = document.createElement("div")

    let apagar = document.createElement("button")
    let editar = document.createElement("button")
    let tarefainput = document.createElement("input")
    // let imageeditar = document.createElement("img")
    // imageeditar.src = "assets/editar.png"
    // imageeditar.style.width = "20px"
    // imageeditar.style.height = "20px"
    // imageeditar.style.backgroundColor = "red"
    
        // div.textContent = textoinp.value

    if(textoinp.value != ""){

        lista.append(div)

        tarefainput.value = textoinp.value
        tarefainput.setAttribute("class", "tarefainput")
        tarefainput.setAttribute("readonly","readonly")
        div.append(tarefainput)

        editar.textContent = "Editar"
        // editar.value = imageeditar.value
        editar.setAttribute("class", "editar")
        div.append(editar)
        // editar.append(imageeditar)

        apagar.textContent = "Apagar"
        apagar.setAttribute("class", "apagar")
        div.append(apagar)  
        
        listatarefas.push(textoinp.value)


        for( let i = 0; i < listatarefas.length; i++){           
            div.setAttribute("id", [i])
            div.setAttribute("class", "elementos")
            tarefainput.setAttribute("id",[i])
            tarefainput.setAttribute("data", [i])
            // tarefainput.value = ([i])
            apagar.setAttribute("id", [i])
            editar.setAttribute("id", [i])
        }
        
        console.log(listatarefas)
        var salvalista = JSON.stringify(listatarefas)
        localStorage.setItem("buscarlista", salvalista)

        ///////////////////////////////////////////////// EDITAR //////////////////////////////////////////////////////////

        let classeditar = document.querySelectorAll(".editar") //pega todos os botões apagar
        classeditar.forEach(function(e){ // faz um for em todos os botoes apagar
            e.addEventListener("click", functioneditar ) // adiciona o evento click em todos os botoes apagar
        })

        function functioneditar(evento){
            let botaoclicado = evento.target.id

            // console.log(listatarefas[botaoclicado]) // pega a string clicada
            let listaindex = listatarefas.indexOf(listatarefas[botaoclicado]) // pega o index da string
            // let diveditada = document.getElementById(listaindex)
            // let diveditada = document.getElementById(botaoclicado)
            // let classtarefainput = document.getAttribute("data")[botaoclicado]
            var classtarefainput = document.getElementsByClassName("tarefainput")[botaoclicado] 
            // let classtarefainput = document.getElementsByClassName("tarefainput")  
            let aa = classtarefainput.getAttribute("id", botaoclicado)
            // let classtarefainput = document.querySelectorAll(".tarefainput")[botaoclicado]
            // classtarefainput.getElementById(botaoclicado)
            // classtarefainput = botaoclicado
            console.log(aa + "pp")      
            // console.log(diveditada.id)
            // console.log(classtarefainput.id[botaoclicado])
            // console.log(botaoclicado)

            if( classtarefainput.id == botaoclicado){

                classtarefainput.removeAttribute("readonly")
                    // classtarefainput.onfocus = function() {
                    //     classtarefainput.style.backgroundColor = "gold"
                    // } 
                // classtarefainput.value = ""
                classtarefainput.focus()
                classtarefainput.style.color = 'red'

                    

                //onblur para adicionar tarefa quando clicar fora do input
                classtarefainput.onblur = function (){
                    classtarefainput.style.color = 'green'
                    // classtarefainput.style.backgroundColor = "none"
                    listatarefas.splice(listaindex, 1, classtarefainput.value)
                    var salvalista = JSON.stringify(listatarefas)
                    localStorage.setItem("buscarlista", salvalista)
                    classtarefainput.setAttribute("readonly", "readonly")
                    // console.log(classtarefainput.value) 
                    console.log(listatarefas)                         
                }

                //onchange para adicionar tarefa quando mudar o valor do input, ou apertar enter ou tab
                classtarefainput.onchange = function (){
                    classtarefainput.style.color = 'green'
                    // classtarefainput.style.backgroundColor = "none"
                    listatarefas.splice(listaindex, 1, classtarefainput.value)
                    var salvalista = JSON.stringify(listatarefas)
                    localStorage.setItem("buscarlista", salvalista)
                    classtarefainput.setAttribute("readonly", "readonly")
                    // console.log(classtarefainput.value) 
                    console.log(listatarefas)                         
                }                  
                    
            }                 
        }

        
        ////////////////////////////////////////////////////// APAGAR /////////////////////////////////////////////////////

        
        let classapagar = document.querySelectorAll(".apagar") //pega todos os botões apagar
        classapagar.forEach(function(e){ // faz um for em todos os botoes apagar
            e.addEventListener("click", functionapagar ) // adiciona o evento click em todos os botoes apagar
        })

        function functionapagar (evento){
            var botaoclicado = evento.target.id
            // let divapagada = document.getElementById(listaindex)
            // console.log(botaoclicado)
            // console.log(divapagada)

            // console.log(listatarefas[botaoclicado]) // pega a string clicada
            var listaindex = listatarefas.indexOf(listatarefas[botaoclicado]) // pega o index da string clicada            
            // let divapagada = document.getElementById(listaindex)
            let divapagada = document.getElementById(botaoclicado)

            // console.log(divapagada.id)
            // console.log(listaindex)
            console.log(botaoclicado)

            if(divapagada.id == botaoclicado){

                // let divapagada = document.getElementById(listaindex)                
                let lista = document.querySelector("#listaelementos")
                lista.removeChild(divapagada)
                
                // remove a string do array, 
                //remove 1 elemento do índice da variavel listaindex, e adiciona null para nao perder a ordem do array
                // listatarefas.splice(listaindex, 1, null) 
                listatarefas.splice(botaoclicado, 1, null) 
                
                //atualiza o array de acordo com as divs apagadas
                var salvalista = JSON.stringify(listatarefas)
                localStorage.setItem("buscarlista", salvalista)

                // salva botões clicados para excluir as divs que foram clicadas na função onload                
                arraybotaoclicado.push(botaoclicado)
                // console.log(arraybotaoclicado)
                var salvabotaoclicado = JSON.stringify(arraybotaoclicado)
                localStorage.setItem("buscarbotaoclicado", salvabotaoclicado)

                // essa variavel vai fazer com que as divs que foram apagadas anteriormente não apareçam
                let checkbotaoclicado = 1
                localStorage.setItem("check", checkbotaoclicado)

                console.log(listatarefas)
                
            }
            
        }        

        textoinp.value = ""  
        textoinp.focus()
    }

})


//////////////////////////////////////////////// BOTÃO LIMPAR TUDO //////////////////////////////////////////////////////////////

document.getElementById("limpartudo").addEventListener("click",function(){
    let lista = document.getElementById("listaelementos")
    localStorage.removeItem("buscarlista")
    lista.textContent = ''
    document.location.reload(true) // atualiza a pagina para nao misturar novos arrays com antigos
    localStorage.removeItem("buscarbotaoclicado")
})








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// ATUALIZAR PAGINA ///////////////////////////////////////////////////////
////////////// Com função onload, recarregar tarefas criadas ( da pagina que foi fechada anteriormente ) /////////////////
onload = function atualizar (){
    //Local storage para carregar da memoria a pagina fechada e adicionar atributos de acordo com o indice do array//
    var getlista = localStorage.getItem("buscarlista")
    var listaLS = JSON.parse(getlista)
    let lista = document.getElementById("listaelementos")
    // console.log(getlista)
    console.log(listaLS)

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
        tarefainput.setAttribute("readonly","readonly")
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
    let checkbotaoclicado = localStorage.getItem("check")     
    let check = JSON.parse(checkbotaoclicado)

    // console.log(listaindex)
    // console.log(botaoclicadocarregado)
    // console.log(check + " teste variavel check ")

    // const nullmapeado = listaLS.filter( null => )

    let array = ["0", null , "10", "8", null, null]
    // let arrayDeNull = []
    let uniquearray = array.filter(checkarray)

    function checkarray(element){
        return element ==(null)
    }

    console.log(uniquearray + " esse é o uniquearray")

    // array.forEach(( element) => {
    //     if (element === null){
    //         arrayDeNull.push(element)
    //     }
    // })

    // let listaindex = listaLS.indexOf(listaLS[botaoclicado]) //// CONTINUA DAQUIIIIII

    // for( let i = 0; i < array.length; i++){
    //     if (array.length == null){
    //         return array.indexOf[i]
    //     }
    // }

    // console.log( arrayDeNull + " esse é array de null")

    // function pegarArrayNull (){
    //     return array.indexof(null)
    // }

    // var roots = array.map(pegarArrayNull)
    // console.log(roots + " esse é o roots")

    // let arrayIgualaNull = listaLS.filter(pegarArrayNull)
    // console.log(arrayIgualaNull)

    // console.log(botaoclicadocarregado + " esse é o botao clicado carregado")

    // if (check == 1 && botaoclicadocarregado != null){

    //     // if (botaoclicadocarregado != null){
    //         // faz com que as divs que foram apagadas anteriormente não apareçam
    //         for ( let i = 0; i < botaoclicadocarregado.length; i++){                
    //             let divapagada = document.getElementById(botaoclicadocarregado[i]) 
                    
    //                 // if ( divapagada == null){        
    //                         lista.removeChild(divapagada)
    //                 // }
    //         }
    //         check = null
    //         localStorage.setItem("check", checkbotaoclicado)
    //     // }
    // }

    if (check == 1){

        // faz com que as divs que foram apagadas anteriormente não apareçam
        for ( let i = 0; i < botaoclicadocarregado.length; i++){                
            let divapagada = document.getElementById(botaoclicadocarregado[i]) 

            // console.log(botaoclicadocarregado)

                // if ( listaLS.length[i] == null){        
                        lista.removeChild(divapagada)
                        // divapagada.style.display = "none"
                // }
        }
        check = null
    }

    ///////////////////////////////////////////////// BOTÃO EDITAR  //////////////////////////////////////////////////////

    let classeditar = document.querySelectorAll(".editar") //pega todos os botões apagar
        classeditar.forEach(function(e){ // faz um for em todos os botoes apagar
            e.addEventListener("click", functioneditar ) // adiciona o evento click em todos os botoes apagar
        })

        function functioneditar(evento){
            let botaoclicado = evento.target.id
            console.log(botaoclicado)
            // var listaLS = JSON.parse(getlista)
            // console.log(listaLS[botaoclicado]) // pega a string clicada
            let listaindex = listaLS.indexOf(listaLS[botaoclicado]) // pega o index da string
            // let diveditada = document.getElementById(listaindex)
            var classtarefainput = document.getElementsByClassName("tarefainput")[botaoclicado]            
            console.log(classtarefainput)

            if( listaindex == botaoclicado){
                
                classtarefainput.removeAttribute("readonly")
                // classtarefainput.value = ""
                classtarefainput.focus()
                classtarefainput.style.color = 'red'
                

                    //onblur para adicionar tarefa quando clicar fora do input
                    classtarefainput.onblur = function (){
                        classtarefainput.style.color = 'green'
                        listaLS.splice(listaindex, 1, classtarefainput.value)
                        var salvalista = JSON.stringify(listaLS)
                        localStorage.setItem("buscarlista", salvalista)
                        classtarefainput.setAttribute("readonly", "readonly")
                        // console.log(classtarefainput.value) 
                        console.log(listaLS)                         
                    }

                    //onchange para adicionar tarefa quando mudar o valor do input, ou apertar enter ou tab
                    classtarefainput.onchange = function (){
                        classtarefainput.style.color = 'green'
                        listaLS.splice(listaindex, 1, classtarefainput.value)
                        var salvalista = JSON.stringify(listaLS)
                        localStorage.setItem("buscarlista", salvalista)
                        classtarefainput.setAttribute("readonly", "readonly")
                        // console.log(classtarefainput.value) 
                        console.log(listaLS)                         
                    }
                }                   
        }


    ///////////////////////////////////////////////// BOTÃO APAGAR  //////////////////////////////////////////////////////

    let classapagar = document.querySelectorAll(".apagar")
    classapagar.forEach(function(e){
        e.addEventListener("click", fuctionapagar2)
    })

    function fuctionapagar2 (evento) {

        let botaoclicado = evento.target.id
        let listaindex = listaLS.indexOf(listaLS[botaoclicado])
        // console.log(listaindex)
        // console.log(botaoclicado)
        // console.log(listaLS)        

    if ( listaindex == botaoclicado ){
        let divapagada = document.getElementById(listaindex)
        let lista = document.querySelector("#listaelementos")

        lista.removeChild(divapagada)
        listaLS.splice(listaindex, 1 , null)
        // console.log(listaLS)

        let salvalista = JSON.stringify(listaLS)
        localStorage.setItem("buscarlista", salvalista)

        var getbotaoclicado = localStorage.getItem("buscarbotaoclicado")
        var botaoclicadoLS = JSON.parse(getbotaoclicado) 
        botaoclicadoLS.push(botaoclicado)
        let salvabotaoclicado = JSON.stringify(botaoclicadoLS)
        localStorage.setItem("buscarbotaoclicado", salvabotaoclicado)

        // let check = 1
        // localStorage.setItem("check", check)        

        // console.log(listaLS)
        // console.log(salvabotaoclicado)

        }

        // if( check == 1){

            // faz com que as divs que foram apagadas anteriormente não apareçam
            // for ( let i = 0; i < botaoclicadocarregado.length; i++){                
            //     let divapagada = document.getElementById(botaoclicadocarregado[i])         
            //     lista.removeChild(divapagada)
            // }

        //     check = null
        // }

        
        

    }

    // var getbotaoclicado = localStorage.getItem("buscarbotaoclicado")
    // var botaoclicadoLS = JSON.parse(getbotaoclicado) 
    // let botaoclicadocarregado = botaoclicadoLS  
    // let checkbotaoclicado = localStorage.getItem("check")     
    // let check = JSON.parse(checkbotaoclicado)


    // if (check == 1){

    //     // faz com que as divs que foram apagadas anteriormente não apareçam
    //         for ( let i = 0; i < botaoclicadocarregado.length; i++){                
    //         let divapagada = document.getElementById(botaoclicadocarregado[i])         
    //         lista.removeChild(divapagada)
    //     }
    //     check = null
    // }

    // console.log(botaoclicadocarregado + " esse é o botao clicado carregado")

    // if (check == 1 && botaoclicadocarregado != null){

    //     // if (botaoclicadocarregado != null){
    //         // faz com que as divs que foram apagadas anteriormente não apareçam
    //         for ( let i = 0; i < botaoclicadocarregado.length; i++){                
    //             let divapagada = document.getElementById(botaoclicadocarregado[i]) 
                    
    //                 // if ( divapagada == null){        
    //                         lista.removeChild(divapagada)
    //                 // }
    //         }
    //         check = null
    //         localStorage.setItem("check", checkbotaoclicado)
    //     // }
    // }

}








