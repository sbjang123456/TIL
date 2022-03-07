# [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript)

```js
function solution(answers) {
    var answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const all = [first, second, third];
    const scores = [0, 0, 0];
    for (let j in all) {
        answers.forEach((a, i) => {
            if (a === all[j][i % all[j].length]) {
                scores[j]++;
            }
        });
    }

    const max = Math.max(...scores);

    for (let i in scores) {
        if (scores[i] === max) {
            answer.push(Number(i) + 1);
        }
    }
    return answer;
}
```

---