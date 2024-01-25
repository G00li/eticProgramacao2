window.onload = async () => {

//     const test = new AppTest ();

//     test.addEventListener('test_data_loaded', (event) =>{
//         console.log(event.detail)
//     })

// test.loadData();

const test2 = new AppTest2(); 

test2.subscribe('test_data_loaded', data => {
    console.log("sub1", data)
})
test2.subscribe('test_data_loaded', data => {
    console.log("sub2", data)
})

console.log(`************************* After two subscriptions *************** `)

test2.publish('test_data_loaded'); 

}


// class AppTest extends HTMLElement {


//     constructor(){
//         super();
//     }

//     async loadData (){
//         const req = await fetch ("data.json"); 
//         const res = await req.json();


//         this.dispatchEvent(new CustomEvent ("test_data_loaded", {detail:res}));
//     }
// }

// customElements.define('app-test', AppTest); 

class AppTest2 {
    events = [];

    constructor(){

    }

    subscribe(eventName, handler){

        //se nesta lista de eventos nao existir o evento "test_data_loaded"
        if(!this.events[eventName]){
            //criar o tipo "test_data_loaded"
            this.events[eventName] = []; 
        }

        //e adicionar a lista 
        this.events[eventName].push(handler);

    }

    unsubscribe (event, handler){
        if(this.events[events]){
            const index = this.events[event].findIndex(item => item === handler); 
            this.events[event].splice(index,1); //splice remove o item do array. o index é o ponteiro que equivale o array e o 1 é para nao deixar o espaço do array vazio após a remoção 

            //                                      V
            // ["test_data_loaded"] = [handler1, handler2, handler3]
            // ["test_data_loaded"] = [handler1, , handler3]
            // ["test_data_loaded"] = [handler1, handler3]
        }

    } 

    publish(event, data) {
        if(this.events[event]) {
            this.events[event].forEach(async handler => {
                const req = await fetch("data.json");
                const res = await req.json();
                handler(res);
            });
        }
    }
}

// Handler = callback 
