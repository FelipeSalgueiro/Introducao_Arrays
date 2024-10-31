console.log("ARRAYS")

let aluno = ["Felipe", "Isael", "Josue", "Camila"]
console.log(aluno)

let sobreMim = ["Felipe", 21, "Chocolate"]
console.log(sobreMim)
console.log(sobreMim[1])

let series =["Chucky", "The Witcher", "Prison Break", "Peaky Blinders"]
console.log(series)

series.push("Dexter") //Acrescenta no final
console.log(series)

series.unshift("Pink: O Cérebro") //Acrescenta no ínicio
console.log(series)

series.reverse() //Inverte a ordem dos itens do Array
console.log(series)

series.sort()
console.log(series)

series.shift() //Remover o primeiro valor da lista
console.log(series)

series.pop() //Remover o último valor da lista
console.log(series)

let salaPrincipal = ["Raquel", "Hugo", "Felipe", "Alisson", "Lucas", "Isael", "Lorena", "Luises com S", "Danilo", "Mayara"]
console.log(salaPrincipal)

let salaTematica = salaPrincipal.slice(3, 8)
console.log(salaTematica)
console.log(salaPrincipal)