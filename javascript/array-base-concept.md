# Array (배열) 의 기본 개념
## 자료구조
프로그래밍 언어에서 비슷한 종류의 데이터를 묶어서 한 곳에 보관해놓는 것
* *방식*
* *형식* 

## 배열
index 를 가지고 있는 자료구조   
> javascript 에서는 배열 자료구조 내부에 다른 타입에 데이터를 넣을 수 있지만, 되도록이면 피할 것!!

### 배열 선언
* *new 키워드 사용*
    ```js
    const arr = new Array();
    ```

* *초기화 및 할당*
    ```js
    const arr2 = ['a', 'b'];
    ```

### 인덱스 위치
배열에서 대괄호(`[]`)를 이용해서 인덱스로 해당 위치에 있는 데이터를 가져올 수 있다.

### 배열 루프
* *for loop*
    ```js
    for (let i = 0; i < arr.length; i++) {
        ...
    }
    ```

* *for of*
    ```js
    for (let item of arr) {
        ...
    }
    ```

* *forEach*
    ```js
    arr.forEach((item, index, array) => {
        ...
    });
    ```

### Add(추가), Delete(삭제), Copy(복사)
* *push* - 맨 뒤에 요소 추가

* *pop* - 맨 뒤에 요소 삭제

* *unshift* - 맨 앞에 요소 추가

* *shift* - 맨 앞 요소 삭제
    > **중요!!** - shift or unshift 는 pop, push 보다 속도가 *매우매우매우* 느리다.

* [*splice*](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - 특정 index 의 item 요소 삭제
    ```js
    // 특정 index 부터 지울 개수(deleteCount) 를 입력 받는다.
    arr.splice(index, deleteCount);

    // 특정 index 부터 deleteCount 만큼 지우고, 그 뒤로 넘겨받은 매개변수를 index 이후로 추가한다.
    arr.splice(index, deleteCount, item1, item2);
    ```

* [*concat*](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - 두 배열을 합쳐서 새로운 배열을 반환
    ```js
    const arr1 = ['a', 'b'];
    const arr2 = ['c', 'd'];
    const newArr = arr1.concnat(arr2);
    ```

### 배열 검색
* *indexof* - 특정 요소의 인덱스를 리턴(처음부터 가장 먼저 있는..)
* *includes* - 특정 요소가 배열 내부에 존재하는지 체크(`return boolean`)
* *lastIndexOf* - 특정 요소가 맨 마지막 부터 검색하여 인덱스를 반환



 