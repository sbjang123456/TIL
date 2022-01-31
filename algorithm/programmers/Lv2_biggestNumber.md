# [가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript)

```js
function solution(numbers) {
    let answer = numbers.map(number => number.toString())
        .sort((a, b) => Number(a + b) > Number(b + a) ? -1 : 1);

    return answer.every(e => e === '0') ? '0' : answer.join('');
}
```

---