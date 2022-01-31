# [신규 아이디 추천](https://programmers.co.kr/learn/courses/30/lessons/72410)

```js
function solution(new_id) {
    let answer = new_id;
    
    // 1단계
    answer = answer.toLowerCase();
    
    // 2단계
    const regExp = /[~!@#$%^&*\(\)\=+\[\{\]\}:?,<>\/]/gi;
    answer = regExp.test(answer) ? answer.replace(regExp, '') : answer;
        
    // 3단계
    answer = answer.replace(/(\.)\1+/g, '.');
    
    // 4단계
    answer = answer.replace(/^(\.)|(\.)$/g, '');
    
    // 5단계
    answer = answer || 'a'
    
    // 6단계
    if (answer.length > 15) {
        answer = answer.substr(0, 15);
        answer = answer.replace(/(\.)$/g, '');
    }
    
    // 7단계
    while (answer.length <= 2) {
        answer += answer.charAt(answer.length - 1)
    }
    
    return answer;
}
```
---