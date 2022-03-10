# [카펫](https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript)

```js
function solution(brown, yellow) {
    var answer = [];
    
    for (let i = yellow; i > 0; i--) {
        if (yellow % i === 0)  {
            let row = yellow / i + 2;
            let col = i + 2;
            if ((row * col - yellow) === brown && row >= col) {
                answer = [row, col];
                break;
            }
        }
    }
    return answer;
}
```

---