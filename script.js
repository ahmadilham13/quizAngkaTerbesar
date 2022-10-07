const number = [5, 4, 9, 10, 60]
let min = Number.POSITIVE_INFINITY, max = 0

for (let i = 0; i < number.length; i += 1) {
    if(number[i] > max) max = number[i]
    if(number[i] < min) min = number[i]
}

console.log(`Terbesar adalah ${max}, sedangkan Terkecil adalah ${min}`)