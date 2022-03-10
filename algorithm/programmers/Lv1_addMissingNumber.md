# [없는 숫자 더하기](https://programmers.co.kr/learn/courses/30/lessons/86051)

```js
function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers.filter(n => n === i).length === 0) {
            answer += i;
        }
    }
    return answer;
}
```
filter 를 includes 를 대체해도 됐을듯!!!


---