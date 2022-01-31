# [위장](https://programmers.co.kr/learn/courses/30/lessons/42578)

```js
function solution(clothes) {
    let answer = clothes.map(([name, kind]) => kind)
        .filter((item, index, self) => self.indexOf(item) === index)
        .map(item => clothes.filter(([name, kind]) => kind === item).length + 1)
        .reduce((acc, cur) => acc * cur) - 1;
    
    return answer;
}
```

---