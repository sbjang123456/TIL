# [프린터](https://programmers.co.kr/learn/courses/30/lessons/42587)

```js
function solution(priorities, location) {
    let answer = 0;

    const mappingPriorities = priorities.map((a, i) => ({loc: i, lvl: a}));
    
    while(true) {
        const wating = mappingPriorities.shift();
        if (mappingPriorities.filter(e => e.lvl > wating.lvl).length > 0) {
            mappingPriorities.push(wating);
        } else {
            answer++;
            if (wating.loc === location) {
                break;
            }
        }
    }
    return answer;
}
```

---