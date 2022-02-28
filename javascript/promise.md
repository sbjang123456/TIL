# Promise
* javascript 에서 제공하는 비동기를 간편하게 처리할 수 있도록 도오주는 오브젝트
* promise 는 자바스크립트 비동기 동작을 위한 내장 객체

## State
상태의 변화.   
프로세스가 *수행 중인지* 수행 후 *성공했는지 실패했는지* 확인
* `pendidng` : 수행 중
* `fulfilled` : 동작 완료
* `rejected` : 동작 실패

## Producer(정보제공) and Consumer(정보소비)
1. Producer
    - **promise 객체가 생성될 때, executor 가 자동으로 실행된다.**
    ```js
    const promise = new Promise((resolve, reject) => {
        // 네트워크 통신이나 파일을 읽거나 하는 등의 작업이 무거운 일들을 실행해야 할 때 비동기적으로 처리하기 위해 프로미스를 사용한다!
        console.log('promise~~');
    });
    ```

2. Consumers
    - `then` - 성공
        ```js
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hi JangSu!');
            }, 3000);
        });
        promise.then((value) => {
            console.log(value); // log: Hi JangSu!
        });
        ```

    - `catch` - 실패
        ```js
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Not Jangsu!!'));
            }, 3000);
        });
        promise
            .then((value) => {
                ...
            })
            .catch((error) => {
                console.log(error); // log: Error: Not Jangsu!!
            });
        ```

    - `finally` - 성공 실패 여부와 상관없이 어떤 기능을 마지막으로 실행 시키고 싶을 때 사용한다.
        ```js
            promise
            .then((value) => {
                ...
            })
            .catch((error) => {
                ...
            });
            .finally(() => {
                console.log('finally'); // 성공 실패 실행 후 로그 출력됨.
            });
        ```

3. Promise chaining
    - `then`, `catch` 는 전부 promise 자신을 리턴하기 때문에 chaining 으로 작성이 가능하다.
    - 여러 비동기나 promise 객체를 묶어서 사용할 수 있다!
    ```js
    new Promise((resolve, reject) => {
        ...
    }).then(v => {
        ...
    }).then(v => {
        ...
    }).then(v => {
        return new Promise((resolve, reject) => {
            ...
        });
    }).then(v => {
        ...
    });
    ```

4. Error Handling  
    - then 을 통해 다음 체인으로 값을 전달할 때 catch 를 통해 예외처리를 해주도록 하자!