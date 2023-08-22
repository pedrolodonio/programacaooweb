function transpor(matriz) {
    let transmatr = []
    for (let len = 0; len < matriz[0].length; len++) {
        let a = []
        for (const linha of matriz) a.push(linha[len]) 
        transmatr.push(a)
    }
    return transmatr
}

let mat = [
    [13, 12 ],
    [19, 89 ],
    [27, 10 ]
]

console.log(transpor(mat))