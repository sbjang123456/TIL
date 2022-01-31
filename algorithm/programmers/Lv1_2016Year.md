# [2016년](https://programmers.co.kr/learn/courses/30/lessons/12901)알고리즘으로 풀라는 말 이었겠지만, 쿨하게 Date 객체 사용해서 풀었음..! 내장객체 짱!

```js
function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    return days[new Date(`2016-${a}-${b}`).getDay()];
}
```
> 알고리즘으로 풀라는 말 이었겠지만, 쿨하게 Date 객체 사용해서 풀었음..! 내장객체 짱!

---