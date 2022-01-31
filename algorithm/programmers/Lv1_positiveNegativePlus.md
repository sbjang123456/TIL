# [음양 더하기](https://programmers.co.kr/learn/courses/30/lessons/76501)

```js
function solution(absolutes, signs) {
    return absolutes.reduce((prev, cur, index) => {
        if (!signs[index]) {
            cur *= -1;
        }
        return prev + cur;
    }, 0);
}
```

---