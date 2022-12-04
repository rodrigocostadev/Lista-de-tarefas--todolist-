var listatarefas = [];
var check = false

onload = function atualizar1 (){
    var b = localStorage.getItem("buscarlista")
    console.log(b)
    var c = JSON.parse(b)
    let lista = document.getElementById("listaelementos")
    // let listacompleta = document.getElementById("listacompleta")
    // var div = document.createElement("div")

    console.log(c)
    console.log(c.length)

    for ( var i = 0; i < c.length; i++){
        // console.log(c[i])
        var div = document.createElement("div")
        let apagar = document.createElement("button")
        let editar = document.createElement("button")

        div.textContent = c[i]
        div.setAttribute("id", [i])
        lista.append(div)

        editar.textContent = "Editar"
        editar.setAttribute("id", "editar")
        div.append(editar)

        apagar.textContent = "Apagar"
        apagar.setAttribute("id", "apagar")
        div.append(apagar) 
        
    }
}

document.getElementById("botaocriar").addEventListener("click", function(){
    let textoinp = document.getElementById("input")
    let lista = document.getElementById("listaelementos")
    var div = document.createElement("div")


    let apagar = document.createElement("button")
    let editar = document.createElement("button")

    
        div.textContent = textoinp.value

    if(textoinp.value != "" ){

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

        // let elementos = document.querySelectorAll(".elementos")

        // elementos.forEach(function(element){

        // })

        let classapagar = document.querySelectorAll(".apagar") //pega todos os botões apagar
        classapagar.forEach(function(e){ // faz um for em todos os botoes apagar
            e.addEventListener("click", functionapagar ) // adiciona o evento click em todos os botoes apagar
        })

        function functionapagar (evento){
            let botaoclicado = evento.target
            // let position = listatarefas
            let position = null
            // position = listatarefas[botaoclicado.id]
            // position = listatarefas.lastIndexOf([botaoclicado.id])

            for ( let i = 0; i < botaoclicado.id; i ++ ){
                // return position.lastIndexOf()
                position = listatarefas[botaoclicado.id[i]]
            }

            console.log(botaoclicado.id)
            // console.log(listatarefas[botaoclicado.id])
            console.log(position)
            if(botaoclicado.id == position){
                // position.remove()
                // evento.innerHTMl = ""
            }
        }

        // document.getElementById("apagar").addEventListener("click", function(e){
            
        //     let divclicada = e.target
        //     // var div = document.createElement("div")
        //     let position = listatarefas[i]
        
        //     // console.log(divclicada)
        //     console.log(position)
        
        //     if(divclicada == position){
        //         position.remove()
        //     }
        
        // })

        var salvalista = JSON.stringify(listatarefas)
        localStorage.setItem("buscarlista", salvalista)

        textoinp.value = ""   

        textoinp.focus()
    }
    else {
        check = true
    }
    

    


})

document.getElementById("limpartudo").addEventListener("click",function(){
    let lista = document.getElementById("listaelementos")
    localStorage.removeItem("buscarlista")
    lista.textContent = ''
})

