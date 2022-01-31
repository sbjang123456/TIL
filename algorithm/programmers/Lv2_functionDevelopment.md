# [기능 개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

```js
function solution(progresses, speeds) {
    var answer = [];
    
    const remainsDays = progresses.map((item, index) => {
        return Math.ceil((100 - item) / speeds[index])
    });
    
    let funcCnt = 1;
    remainsDays.reduce((a, b) => {
        if (a / b >= 1) {
            funcCnt++;
            return a;
        } else {
            answer.push(funcCnt);
            funcCnt = 1;
            return b;
        }
    });
    answer.push(funcCnt);
    
    return answer;
}
```
---