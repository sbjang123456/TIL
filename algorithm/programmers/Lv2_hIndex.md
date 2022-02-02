# [H-Index](https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript)

```js
function solution(citations) {
    let answer = 0;
    
    for (let i = Math.max(...citations); i > 0; i-- ) {
        if (i <= citations.filter(e => e >= i).length) {
            answer = i;
            break;
        }
    }
    
    return answer;
}
```

---