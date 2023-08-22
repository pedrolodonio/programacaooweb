function multi(m1, m2) {
    let matrizresultante = []

    if (m1.length != m2.length)
        console.log("operação impossivel")

    for (let len = 0; len < m1[0].length; len++) {
        let tmp_m = []

        let temp_1 = m1[len]

        for (let p = 0; p <= 1; p++) {
            let temp_2 = []
            for (const arr of m2) {
                temp_2.push(arr[p])
            }

            let soma = 0
            for (let idx = 0; idx < temp_1.length; idx++) {
                soma += temp_1[idx] * temp_2[idx] 
            }
            tmp_m.push(soma)
        }
        matrizresultante.push(tmp_m)
    }
    return matrizresultante
}


let mat_1 = [
    [1, 2],
    [3, 4]
]

let mat_2 = [
    [5, 6],
    [7, 8]
]

console.log(multi(mat_1, mat_2))