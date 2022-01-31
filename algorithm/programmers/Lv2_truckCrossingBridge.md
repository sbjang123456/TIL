# [다리를지나는트럭](https://programmers.co.kr/learn/courses/30/lessons/42583)

```js
function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    
    const bridgeTruck = Array.from({length: bridge_length}, (v) => 0);
    // const bridgeTruck = new Array(bridge_length).fill(0);

    while(bridgeTruck.length !== 0) {
        bridgeTruck.shift();
	
        if(truck_weights.length !== 0) {

            if((bridgeTruck.reduce((a,b) => a + b, 0) + truck_weights[0]) <= weight) {
                bridgeTruck.push(truck_weights.shift());
            } else {
                bridgeTruck.push(0);
            }    
        }
        answer++;
    }

    return answer;
}
```

---