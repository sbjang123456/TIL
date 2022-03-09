# [네트워크](https://programmers.co.kr/learn/courses/30/lessons/43162)

```js
function solution(n, computers) {
    const dfs = (idx, arr, cts) => {
      arr[idx] = true;
      for (let i = 0; i < cts.length; i++) {
        if (cts[idx][i] && !arr[i]) {
          dfs(i, arr, cts);
        }
      }
    };

    let answer = 0;
    const arr = new Array(n).fill(false);
    while (arr.includes(false)) {
        dfs(
          arr.indexOf(false),
          arr,
          computers
        );
        answer++;
    }
    
    return answer;
}
```
깊이/너비 우선 탐색 접근방법을 몰라서 답을 찾아보았다...ㅜ.ㅜ

깊이/너비 우선 탐색 적응할 필요가 있어보임!

---