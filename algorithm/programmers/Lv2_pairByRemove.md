# [짝지어 제거하기](https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript)

```js
function solution(s)
{
    let bStop = false;
    while (!bStop) {
        if (!s.length) bStop = true;
        
        for (let i = 1; i < s.length; i++) {
            if (s.length - 1 === i) bStop = true;
            if (s[i - 1] === s[i]) {
                s = s.replace(`${s[i]}${s[i]}`, '');                
                break;
            } 
        }
    }
    
    return s.length ? 0 : 1;
}
```
테스트 시나리오 정확성 9,10,11 실패 및 효율성 테스트 실패 ...   
안타깝게도 문제의 방향성을 찾지 못해 약간의 구글링을 참고한 결과 스택문제라는것을 깨닫고 다시 코딩..

```js
function solution(s)
{
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] !== stack[stack.length -1]) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
        
    return stack.length ? 0 : 1;
}
```
이상없이 통과하였다.   
문자열을 반복할 때 첫번째 값은 스택에 넣고, 또한 i번째 문자열과 stack의 마지막에 문자열을 비교하여 같으면 pop을 통해 제거하고 같지 않으면 push 하도록 하여 이후 최종적으로 stack에 값이 담겨있는지 체크하여 처리하였다.

---