# [체육복](https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript)

```js
function solution(n, lost, reserve) {
    const lostLength = lost.length;
    let answer = n - lostLength;
    lost.sort();
    reserve.sort();
    
    let i = lostLength;
    while(i--) {
        if (reserve.includes(lost[i])) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1);
            answer++;
        }
    }
    lost.forEach(l => {
        if (reserve.includes(l - 1)) {
            reserve.splice(reserve.indexOf(l - 1), 1);            
            answer++;
        } else if (reserve.includes(l + 1)) {
            reserve.splice(reserve.indexOf(l + 1), 1);            
            answer++;
        }
    });
    
    return answer;
}
```

---