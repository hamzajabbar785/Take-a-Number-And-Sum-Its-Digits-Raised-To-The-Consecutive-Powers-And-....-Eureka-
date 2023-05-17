// The number 89 is the first integer with more than one digit that fulfills the property partially introduced 
// in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89 = 8*1 + 9*9

// The next number in having this property is 135:
// See this property again: 135 = 1*1 + 3*3 + 5*5*5

// Task
// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b]
// (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples

// Let's see some cases (input -> output):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a,b] the function should output an empty list.
// 90, 100 --> []

const sumDigPow = (a,b) => {
    let arr = []

    for(let i = a; i < b; i++){
        if(i >= 10){
            let str = i.toString()
            let total = 0

            for(let j = 0; j < str.length; j++){
                total += Math.pow(str[j], j+1)
            }

            if(total === Number(str)){
                arr.push(total)
            }
        }else{
            arr.push(i)
        }
    }

    return arr
}

sumDigPow(1,100)

//Solution 2 

const sumDigPow = (a,b) => {
    let arr = []

    for(let i = a; i <= b; i++){
        let str = i.toString()
        let total = 0

        for(let j = 0; j < str.length; j++){
            total += Math.pow(str[j], j+1)
        }

        if(total === Number(str)){
            arr.push(total)
        }
    }

    return arr
}

sumDigPow(1,100)