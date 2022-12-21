var listatarefas = [];
var arraybotaoclicado = [];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Local storage para carregar da memoria e adicionar atributos de acordo com o indice do array
onload = function atualizar1 (){
    var getlista = localStorage.getItem("buscarlista")
    // console.log(getlista)
    var listaLS = JSON.parse(getlista)
    let lista = document.getElementById("listaelementos")

    // console.log(listaLS)
    // console.log(listaLS.length)

    for ( let i = 0; i < listaLS.length; i++){
        // console.log(listaLS[i])
        var div = document.createElement("div")
        let apagar = document.createElement("button")
        let editar = document.createElement("button")

        div.textContent = listaLS[i]
        div.setAttribute("id", [i])
        div.setAttribute("class", "elementos")
        lista.append(div)

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
    // console.log(botaoclicadoLS)    
    let botaoclicado = botaoclicadoLS       

    // console.log(listaindex)
    // console.log(botaoclicado)

    // faz com que as divs que foram apagadas anteriormente não apareçam
    for ( let i = 0; i < botaoclicado.length; i++){
        let divapagada = document.getElementById(botaoclicado[i])         
        lista.removeChild(divapagada)
    }
                 //////////////////////FAZER BOTAO DE APAGAR FUNCIONAR///////////////////////////////////
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Botão criar + Adicionar atributos de acordo com o indice de cada array
document.getElementById("botaocriar").addEventListener("click", function(){
    let textoinp = document.getElementById("input")
    let lista = document.getElementById("listaelementos")
    var div = document.createElement("div")

    let apagar = document.createElement("button")
    let editar = document.createElement("button")
    
        div.textContent = textoinp.value

    if(textoinp.value != ""){

        lista.append(div)

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
            apagar.setAttribute("id", [i])
            editar.setAttribute("id", [i])
        }

        
        let classapagar = document.querySelectorAll(".apagar") //pega todos os botões apagar
        classapagar.forEach(function(e){ // faz um for em todos os botoes apagar
            e.addEventListener("click", functionapagar ) // adiciona o evento click em todos os botoes apagar
        })

        function functionapagar (evento){
            var botaoclicado = evento.target.id

            // console.log(listatarefas[botaoclicado]) // pega a string clicada
            var listaindex = listatarefas.indexOf(listatarefas[botaoclicado]) // pega o index da string clicada            

            console.log(listaindex)
            // console.log(botaoclicado)

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
            

            
            
            // criar função de atualizar index de arrays para null
            
        }

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
})

