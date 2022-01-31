# [신고 결과 받기](https://programmers.co.kr/learn/courses/30/lessons/92334)

```js
function solution(id_list, report, k) {
    let answer = [];

    const sets = new Set(report);
    const alarms = new Array(id_list.length).fill(0);

    const arrReportedCount = [...alarms];
    for (const set of sets) {
        const [, reported] = set.split(' ');
        arrReportedCount[id_list.indexOf(reported)]++;
    }

    for (const set of sets) {
        const [reporter, reported] = set.split(' ');
        if (arrReportedCount[id_list.indexOf(reported)] >= k) {
            alarms[id_list.indexOf(reporter)]++;
        }
    }
    return alarms;
}
```

---