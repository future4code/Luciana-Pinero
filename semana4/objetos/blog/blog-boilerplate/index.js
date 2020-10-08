arrayDoBlog=[]

function criarPost(){

const titulo = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudo = document.getElementById("conteudo-post")

console.log(titulo.value)
console.log(autor.value)
console.log(conteudo.value)

const post = {
    titulo: titulo.value,
    autor: autor.value,
    conteúdo: conteudo.value
 }

arrayDoBlog.push(post)
console.log (arrayDoBlog)

}
