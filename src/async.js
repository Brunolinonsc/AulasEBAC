/**
 * Async O JavaScript é uma linguagem de programação singlethread, ou seja, não trabalha em mais de um processador, executando tarefas de forma paralela. Apesar disso, no ES6 tivemos a inclusão das **Promises**, o que nos permite ter um paralelismo no JavaScript. Para lidar com código assíncrono em JavaScript, facilitando o desenvolvimento de operações que dependem da conclusão de Promises antes de prosseguir com a execução, usamos o await que é uma ferramenta poderosa utilizada antes de uma expressão Promise, ela pausa a execução da função assíncrona até que a Promise seja resolvida ou rejeitada. Enquanto aguarda a conclusão da Promise, a execução da função é suspensa, permitindo que outras tarefas sejam executadas. 
 */



const funcaoMuitoPesadaPromise = new Promise((resolve, reject ) => {
    try {
            let execucoes = 0;
            for (let i = 0; i < 100000000; i ++){
                execucoess++;
            }
            resolve(execucoes);
        } catch(e) {
            reject("Deu erro no codigo")
        }
    
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`Logado com o usuario : ${login}`)
        }, 5000)

    })
} 

console.log("Inicio");
// console.log(funcaoMuitoPesada());

funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

console.log("fim")

// thread principal a b 
// Promise c ----->

async function execucaoPrincipal(){
    console.log("Inicio");

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

    // const resultado = await funcaoMuitoPesadaPromise;
    // console.log(resultado)

    promiseComParametros("bruno@gmail.com", 123456).then(resultado => {
        console.log(resultado)
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }

    console.log("Fim")
}
execucaoPrincipal()