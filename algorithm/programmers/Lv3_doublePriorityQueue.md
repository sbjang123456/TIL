# [이중우선순위큐](https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript)

```js
function solution(operations) {
    const queue = [];
    for (const operation of operations) {
        let [command, number] = operation.split(' ');
        number = Number(number);
        
        if (command === 'I') {
            queue.push(number);
        } else {
            let index = number === 1 ? queue.indexOf(Math.max(...queue)) : queue.indexOf(Math.min(...queue));
            
            if (index > -1) {
                queue.splice(index, 1);
            }
        }
    }
    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
```

---