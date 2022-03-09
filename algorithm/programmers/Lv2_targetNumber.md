# [타겟 넘버](https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript)

```js
function solution(numbers, target) {
    let answer = 0;
    const numbersLen = numbers.length
    const binaryLen = 2 ** numbersLen;

    for (let i = 0; i < binaryLen; i++) {
        const copyNumbers = [...numbers];
        const strBinaryNumber = i.toString(2).padStart(numbersLen, '0');

        for(let j = 0; j < strBinaryNumber.length; j++) {
            if (strBinaryNumber[j] === '0') {
                copyNumbers[j] *= -1;
            }
        }

        if (copyNumbers.reduce((prev, current) => prev + current) === target) {
            answer += 1;
        }
    }
    return answer;
}
```

---