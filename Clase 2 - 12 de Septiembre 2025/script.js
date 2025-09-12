console.log("go")

//MOOK - datos de ejemplo - modelo - boceto

const mensajes_del_servidor = [
    {
        name:"juan",
        content: "Hola!",
        time: '16:01',
        id: 1
    },
    {
        name:"María",
        content: "Hola, que tal Juan!",
        time: '16:02',
        id: 2
    },
    {
        name:"juan",
        content: "Todo bien",
        time: '16:03',
        id: 3
    }
]

//Renderizar mis mensajes en la página: 
const message_form_HTML = document.querySelector('message-form')

// Diccionario
const CHAT_COMPONENT = {
    ELEMENTS: {
        LIST: document.querySelector('#messages-list'),
        FORM: document.querySelector('#message-form')
    }
}



function renderMensagges(){
    // Quiero acumular todos los mensajes en la variable messages_string_HTML
let messages_string_HTML = ""

for(const messages of mensajes_del_servidor){
    const message_string_HTML =
        `
        <div>
            <span>${messages.name}</span>
            <p>${messages.content}</p>
            <span>${messages.time}</span>
            <hr>
        </div>
        `
        //Acumulamos cada mensaje generado en la lista de mensajes 
    messages_string_HTML = messages_string_HTML + message_string_HTML
    console.log(messages_string_HTML)

    //Ahroa que tenemos todo el string generado, vamos a mostrarlo en la pagina
    //.innerHTML es una propiedad de los elementos que interpretan HTML de un string
    
    CHAT_COMPONENT.ELEMENTS.LIST.innerHTML= messages_string_HTML
}
}

//Si la persona entra a la página le renderizo los mensajes
renderMensagges()

function handleSubmitNewMessage (event){

    //El formulario por defecto recarga la pagina, con preventDefault lo evitamos
    event.preventDefault()

    //event.target -> es el elemento que desencadeno el evento submit, en este caso el event.target seria el <form></form> 
    }

    const new_message = event.target.message.value 
    if(!new_message){
        CHAT_COMPONENT.ELEMENTS.FORM_ERROR_STATUS.innerText
        console.log("Debees escribir algo en el mensaje...")
    }


CHAT_COMPONENT.ELEMENTS.FORM.addEventListener(
    'submit',
    handleSubmitNewMessage
)