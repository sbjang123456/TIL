# [오픈채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888)

## 실패..
데이터를 json 형태로 배열에 밀어넣으면서 Change 혹은 Enter 가 나왔을 때만 밀어넣고 있는 배열 내부 json 에 key(userID) 에 해당하는 닉네임을 변경하려고 하였다.   
후에 다차원(3차원) 배열을 array.map 을 통해 재가공하여 원하는 값을 얻으려고 하였으나, 실패실패실패실패..

```js
function solution(record) {
    const answer = [];
    
    for (const r of record) {
        const sepData = r.split(' ');

        if (sepData[0] === 'Enter' || sepData[0] === 'Leave') {
            answer.push(sepData);
        }
        
        if (sepData[0] === 'Change' || sepData[0] === 'Enter') {
            answer.forEach(sep => {
                if (sep[1] === sepData[1]) {
                    sep[2] = sepData[2];
                }
                return sep;
            });
        } 
    }
    
    return answer.map(([action, , nickname]) => `${nickname}님이 ${action === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`);
}
```
지난번 카카오 문제도 비슷헀던 것 같다.   
사실상 O(n) 문제인데, O(n<sup>2</sup>) 로 하고 있었다.   
같은 실수를 반복했지만, 그래도 바로 생각났다.....다행..!!

## 성공
처음 반복을 통해 마지막 닉네임 값을 json 의 키값이 중복되지 않음을 이용하여 구하였고,   
두번째 반복 때 (array.map) 위에서 가공한 json 의 키(userId)를 통해 닉네임을 매핑해서 배열을 반환하였다.   

```js
function solution(record) {
    const nicknamesById = {};
    
    for (const r of record) {
        const [action, id, nickname] = r.split(' ');
        
        if (action === 'Enter' || action === 'Change') {
            nicknamesById[id] = nickname;
        }
    }
    
    return record.map(e => {
        const [action, id, nickname] = e.split(' ');
        
        let actionText = '';
        if (action === 'Enter') {
            actionText = '님이 들어왔습니다.';
        } else if (action === 'Leave') {
            actionText = '님이 나갔습니다.';
        } else {
            return;
        }
        
        return `${nicknamesById[id]}${actionText}`
    }).filter(e => e);
}
```

---