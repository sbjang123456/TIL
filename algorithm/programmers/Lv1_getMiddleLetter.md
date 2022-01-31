# [가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript)

```js
function solution(s) {
    var answer = '';
    const divide = s.length / 2;
    if (s.length % 2 === 1) {
        answer = s.charAt(Math.floor(divide));
    } else {
        answer = s.charAt(divide - 1) + s.charAt(divide);
    }
    return answer;
}
```

---