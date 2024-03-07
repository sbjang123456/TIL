# async & await
* promise 를 조금 더 간결하고 간편하게 동기적으로 실행되는 것처럼 보이게 만들어주는 api
* promise 의 문법적 설탕

## async
promise 를 이용하지 않고도 조금 더 간편하게 비동기를 작성할 수 있는 방법.   
* 함수앞에 ***async*** 라는 키워드를 넣어주면 된다.   
* async 로 감싸진 함수의 리턴결과는 **promise** 이다.

```js
async function callUser() {
    // request server api...
    // 서버에서 user 를 응답받아서 리턴
    return user;
}
```

## await
* ***await*** 키워드는 async 함수 내부에서만 사용할 수 있다.
* 딜레이가 생기는 (서버에 요청하는 부분) 라인에 *await* 를 써서 호출하면 딜레이를 기다려준다. (자바스크립트 특성상 원래 기다리지 않고 아래줄이 실행된다.)
```js
async function callUser() {
    // 서버 api 에 요청한 결과를 기다리고 user 라는 결과를 아래에서 사용할 수 있도록 한다.
    const user = await fetch(url, ......);
    console.log(user.name); // await 가 없다면 값을 가져올 수 없을 것이다.
    return user;
}
```

## Promise 의 유용한 APIs
* [Promise.all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
    - 그런데 만약 ***서로 연관없는 서버요청***이 두가지가 있다면?
        ```js
        async function callAll() {
            const user = await fetch(......);
            const group = await fetch(......);
            return { user, group }
        }
        ```
        + user 와 group 은 관계가 없지만 fetch 요청 때 await 때문에 user 데이터가 가져와질때까지 기다려야하고 또한 group 또한 데이터가 가져와질때까지 기다려야만 한다.
        + 위와 같은 상황이 생긴다면 promise 를 미리 만든 후 Promise.all 을 통해 처리하는게 효과적이다.
        ```js
        function callAll() {
            const userPromise = fetch(......);
            const groupPromise = fetch(......);
            
            return Promise.all([userPromise, groupPromise]).then(responses => {
                return { user, group }
            });
        }
        ```
* [Promise.race](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
    - 넘겨받은 매개변수 인 배열 요소 중 가장 빨리 처리완료되는 결과만을 처리 한다.
