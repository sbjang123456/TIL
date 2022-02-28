# [문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript)


```js
function solution(n) {
    var answer = '';
    
    const rule = [1, 2, 4];
    let nLimit = 3;
    let nPow = 0;
    while(n > nLimit ** nPow) {
        nPow++;
    }
    
    const start = Math.ceil(nLimit ** (nPow-1));
    const end = start + (nLimit ** nPow);

    
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]);

        arr.forEach((fixed, index, origin) => {
          const combinations = getCombinations(arr, selectNumber - 1);
          const attached = combinations.map((combination) => [fixed, ...combination]);
          results.push(...attached);
        });

        return results; // 결과 담긴 results return
    }
    
    if (nPow === 0) {
        return "1";
    } else {
        const rs = getCombinations(rule, nPow);
        return rs.map(e => e.join(''))[nPow === 1 ? n - start : n - start - 1];
    }

}
```
뭔가 잘 될줄 알았는데, 정확성 테스트도 통과하지 못했다 ㅠ.ㅠ   
의도는 순서대로 조합해서 n의 해당하는 값을 가져오려고 하였는데, 런타임에러 발생..   
이후 인터넷의 도움을 약간 받아서,,,,, 10진법을 3진법으로 바꾸는 문제라는 힌트를 받았다...ㅠㅠ.ㅠ.ㅠ.ㅠ

### 정답
처음에 나머지가 0 일 때의 값들이 밀리는 것 같아서 확인해보니, n진수는 0 부터 시작한다는 사실을 깨닫고 나머지가 0일 때는 몫에서 -1을 해주었더니 정상 작동하였다..!
```js
function solution(n) {
    let answer = "";
    const numbers = [4, 1, 2];

    while (n) {
        answer = numbers[n % 3] + answer;
        n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3); 
    }
    return answer;
}
```

---