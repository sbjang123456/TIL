# Array APIs
배열 WebAPIs 정리

## join
배열을 string 으로 변환할 수 있는 API   
구분자(옵션) 를 넘겨받아 배열요소를 합친다. (*배열요소 + 구분자 의 형태*)   
```js
const arr = ['a', 'b', 'c'];
const result = arr.join(','); // result : "a, b, c"
```

## split
string 을 특정 구분자를 통해 배열로 변환   
구분자와 리턴받을 배열의 사이즈를 넘겨받는다.
```js
const ids = '10,11,12';
const result = ids.split(','); // result : ['10', '11', '12']
```

## reverse
배열내부의 아이템의 순서를 거꾸로 만들어준다.   
***배열 자체를 변경하고 배열을 리턴한다.***
```js
const arr = ['a', 'b', 'c'];
const result = arr.reverse(); // result : ['c', 'b', 'a']
```

## slice
배열의 start 와 end 의 인덱스를 넘겨받아서 인덱스 사이에 있는 배열을 새로 만든다. (end의 인덱스 요소는 포함하지 않음!)   
즉, 배열 요소 중 원하는 부분만 가져올 수 있다.   
***배열 자체는 변경하지 않고 새로운 배열을 리턴한다.***
> `splice` 는 기존 배열 자체를 삭제한다

## find
배열 내에서 넘겨받은 콜백함수가 true 조건을 만족하는 첫번째로 검색된 요소를 리턴한다. (찾지 못하면 `undefined` 리턴)
***새로운 객체를 리턴한다.***
```js
const people = [
    {name: 'jang', age: 33},
    {name: 'song', age: 32},
    {name: 'lee', age: 31}
];
const result = people.find((person) => item.age === 33); // result : {name: 'jang', age: 33}
```

## filter
콜백함수가 true 인 배열 요소들을 리턴한다.   
***새로운 배열을 리턴한다.***
```js
const people = [
    {name: 'jang', age: 33},
    {name: 'song', age: 32},
    {name: 'lee', age: 31}
];
const result = people.filter((person) => item.age > 31); // result : [{name: 'jang', age: 33}, {name: 'song', age: 32}]
```

## map
배열안에 들어있는 요소를 다른 값으로 변환(매핑)되서 리턴된다.   
즉, 배열안의 요소들을 우리가 원하는 함수를 이용해서 다른방식의 데이터를 만드는 것이다.
***새로운 배열을 리턴한다.***
```js
const people = [
    {name: 'jang', age: 33},
    {name: 'song', age: 32},
    {name: 'lee', age: 31}
];
const result = people.map((person) => item.age); // result : [33, 32, 31]
```

## some
배열의 요소 중에서 콜백함수의 리턴이 true 가 되는 요소를 체크하고, boolean 형을 리턴한다.   
즉, 하나라도 true 가 있으면 true 를 리턴
```js
const people = [
    {name: 'jang', age: 33},
    {name: 'song', age: 32},
    {name: 'lee', age: 31}
];
const result = people.some((person) => person.age > 32); // result : true
```

## every
배열의 요소 중에서 콜백함수의 리턴이 ***모두*** true 가 되는지 체크하고, boolean 형을 리턴한다.   
즉, 모두 true 일 때만 true 를 리턴한다. (하나라도 false 가 있다면 false 리턴)
```js
const people = [
    {name: 'jang', age: 33},
    {name: 'song', age: 32},
    {name: 'lee', age: 31}
];
const result = people.every((person) => person.age > 32); // result : false
```

## reduce
콜백과 초기값(옵션)을 전달받아서 콜백함수에서 리턴되는 값이 결과에 누적되며, 누적된 값을 리턴한다.   
* **callback** : `function(prev, curr) {}`
    - *prev* : 직전에 callback 함수를 통해 리턴받은 값
    - *curr* : 현재 배열의 요소

즉, 배열 내의 모든 요소들의 값을 누적
```js
const people = [
    {name: 'jang', age: 33},
    {name: 'song', age: 32},
    {name: 'lee', age: 31}
];
const result = people.reduce((prev, curr) => prev + curr.age, 0); // result : 96
```

> `redueRight` : 배열의 제일 뒤에서 부터 시작

## sort
콜백 함수를 넘겨받아서 마이너스 값일 땐, 첫번째요소가 두번째 요소보다 작다고 간주하여 정렬이 된다.   
* **callback** : `function(a, b) {}`
    - return 이 0 보다 작은 경우 : ***a 가 먼저 정렬***
    - return 이 0 인 경우 : ***a 와 b 를 서로 변경하지 않음***
    - return 이 0 보다 큰 경우 : ***b 가 먼저 정렬***

즉, 콜백함수의 리턴 값에 따라 배열 요소들이 정렬된다.   


