# [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

```js
function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    
    for (let idx in participant) {
        if (participant[idx] !== completion[idx]) {
            return participant[idx];
        }
    }
    
    return answer;
    
}
```
---