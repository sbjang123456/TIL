# [K번째수](https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript)

```js
function solution(array, commands) {
    const answer = [];
    
    for (const [i, j, k] of commands) {
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    
    return answer;
}
```
---