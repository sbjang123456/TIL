# [숫자 문자열과 영단어](https://programmers.co.kr/learn/courses/30/lessons/81301)

```js
function solution(s) {
    const numbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    const combs = [];
    let engNumber = '';
    const arrStr = s.split('');
    while(arrStr.length !== 0) {
        const character = arrStr.splice(0, 1)[0];
        if (!isNaN(Number(character))) {
            combs.push(character);
        } else {
            engNumber += character.toString();
        }
        
        if (typeof numbers[engNumber] !== 'undefined') {
            combs.push(numbers[engNumber]);
            engNumber = '';
        }
    }
    return Number(combs.join(''));
}
```

---