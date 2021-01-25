const operationsMath = process.argv [2]

const firstValue= process.argv[3] 
const secondValue= process.argv[4] 

switch(operationsMath){
	case "soma":
		result = Number(firstValue)+ Number(secondValue)
		break;
	case "subt":
		result = Number(firstValue)- Number(secondValue)
        break;
    case "mult":
        result = Number(firstValue)* Number(secondValue)
        break;
    case "div":
        result = Number(firstValue)/ Number(secondValue)
        break;
}

console.log(`Resultado: ${result}`)
