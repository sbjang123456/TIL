# [나머지가 1이 되는 수 찾기](https://programmers.co.kr/learn/courses/30/lessons/87389?language=javascript)

```js
function solution(n) {
    var answer = 0;
    let i = 1;
    while(true) {
        if (n % i === 1) {
            answer = i;
            break;
        }
        i++;
    }
    return answer;
}
```

---