//console.log(process.env.NODE_ENV === "development" ? "ESTOU EM DESENVOLVIMENTO" : "CUIDADO! ESTOU EM PRODUCAO")

if(process.env.NODE_ENV !== "development"){
    throw new Error("CUIDADO! ESTOU EM PRODUCAO")
}



