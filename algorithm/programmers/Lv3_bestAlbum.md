# [베스트앨범](https://programmers.co.kr/learn/courses/30/lessons/42579)

```js
function solution(genres, plays) {
    var answer = [];
        
    const classficationGeres  = genres.reduce((a, b, i) => {
        return {
            ...a,
            [i]: [b, plays[i]]
        };
    } , {});
    
    const totalGeres  = genres.reduce((a, b, i) => {
        a[b] = (a[b] || 0) + plays[i]
        return a;
    } , {});
    
    const classificationPlays = Object.entries(totalGeres).sort((a, b) => b[1] - a[1]);
    
    for (let [kind] of classificationPlays) {
        const orderGenres = Object.entries(classficationGeres).filter(e => e[1][0] === kind)
        .sort((a, b) => a[1][1] > b[1][1] ? -1 : a[1][1] < b[1][1] ? 1 : 0);
        
        for (let i = 0; i < (orderGenres.length === 1 ? 1 : 2); i++) {
             answer.push(Number(orderGenres[i][0]));
        }
    }

    return answer;
}
```
---