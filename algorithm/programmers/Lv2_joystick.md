# [조이스틱](https://programmers.co.kr/learn/courses/30/lessons/42860?language=javascript)

```js
function solution(name) {//fromCharCode
    let answer = 0;
    // let initCode = 'A'.charCodeAt(0); 65
    let firstCode = 'A'.charCodeAt(0);
    let lastCode = 'Z'.charCodeAt(0);
    const arrChar = name.split('');
    arrChar.forEach((char, idx) => {
        const charCode = char.charCodeAt(0);
        const joystickCnt = (charCode - firstCode) > (lastCode - charCode + 1) ? lastCode - charCode + 1 : charCode - firstCode;
        
        answer += joystickCnt;
        
        // if (arrChar.length !== idx + 1) {
        //     answer++;
        // }
    });
    return answer;
}
```
좌우방향에 대한 알고리즘을 못찾음..!

---