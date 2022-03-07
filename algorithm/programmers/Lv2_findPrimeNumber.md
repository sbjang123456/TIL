# [소수 찾기](https://programmers.co.kr/learn/courses/30/lessons/42839?language=javascript)

```js
function solution(numbers) {
    var answer = 0;
    
    const getPermutations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]); 

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
            const permutations = getPermutations(rest, selectNumber - 1); 
            const attached = permutations.map((el) => [fixed, ...el]); 
            results.push(...attached); 
        });

        return results; 
    }
    
    const isPrime = (num) => {
        for(let i = 2; num > i; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    
    const primeNumbers = new Set();
    for (let i = 0; i < numbers.length; i++) {
        getPermutations(numbers.split(''), i + 1).forEach(v => {
            const joinNumber = Number(v.join(''));
            if (isPrime(joinNumber)) {
                primeNumbers.add(joinNumber);
            }
        })
    }
    return [...primeNumbers].length;
}
```

---