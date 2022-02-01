# [문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)

```js
function solution(s) { 
    var answer = 0;
    const sLen = s.length,
          archiveLen = Math.ceil(sLen / 2);
    
    for (let i = 1; i < archiveLen + 1; i++) {
        let archiveCnt = 1;
        let tempStr = '';

        for (let j = 0; j < sLen; j++) { 
            const currentStr = s.substr(j * i, i);
            const compareStr = s.substr(j * i + i, i);

            if (currentStr === compareStr) {
                archiveCnt++;
            } else {
                if (archiveCnt !== 1) {
                    tempStr += `${archiveCnt}${currentStr}`;
                } else {
                    tempStr += `${currentStr}`;
                }
                archiveCnt = 1;
            }
            
        }
        if (i === 1) answer = tempStr.length;
        answer = Math.min(answer, tempStr.length);
    }
    
    return answer;
}
```

---