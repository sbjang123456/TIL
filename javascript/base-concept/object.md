# Object
primitive 타입은 변수 하나에 값 하나만 넣을 수 있는 것에 반해, 데이터 내의 속성으로 추가할 수 있기 때문에 간편하게 데이터를 관리할 수 있다.   
**object 는 key 와 value 의 집합체이다.**

## Object 생성 방법과 속성

* 중괄호를 이용 - ***object literal***
    ```js
    const obj1 = {};
    ```

* new 키워를 이용(클래스 이용) - ***object constructor***
    ```js
    const obj2 = new Object();
    ```

### javascript 는 object 를 생성한 뒤 속성을 추가하거나 삭제할 수 있다.
* 객체에 `.` 찍고 프로퍼티명에 할당 - *속성 생성*
    ```js
    obj1.test1 = '테스트1';
    ```

* delete 키워드를 통해 속성 삭제 - *속성 삭제*
    ```js
    delete obj1.test;
    ```

## Computed Properties (연산 프로퍼티)
객체의 속성에 접근할 때 `.` 찍고 접근할 수도 있지만, `[]` 를 이용해서 접근(*배열처럼*)할 수도 있다. 이 때, 대괄호 안에 들어가는 key값을 string 타입으로 들어간다!   
**동적으로 키와 관련된 value 를 받아와야할 때 유용하게 사용됨.**
* `.`(닷) 을 사용할 땐, 그 키에 해당하는 값을 받아올 때 사용 - 코딩하는 순간 해당 키 값을 우리가 알고 있어야 함.
* `[]`(연산 프로퍼티) 를 사용할 땐, 우리가 정확하게 어떤 키가 필요한지 모르고 런타임에서 키가 결정될 때 사용.

## Property value shorthand (단축 속성명) (>= ES6)
key 와 value 의 이름이 동일하다면 각 각 표기하지 않고 한번만 표기할 수 있다.
```js
function makeObject(title, subject) {
    return {
        title,
        subject
    }
}
```

## Constructor Function (생성자 함수)
순수하게 object 를 만들어주는 함수는 생성자 함수를 사용한다.
* 함수명의 첫글자는 대문자로!
* this 키워드 사용
* 해당 함수를 사용할 땐 new 키워드를 사용해서 객체 생성
```js
function Test(title, subject) {
    // this = {}; // 생략되어있음.
    this.title = title;
    this.subject = subject;
    // return this; // 생략되어있음!
}

const test1 = new Test('장수', '안녕');
```

## in operator
객체에 속성이 존재하는 체크하는 연산자이다.
```js
'title' in  test1; // (key: string) in object
```

## for..in 과 for..of
* `for (key in obj)` - object 의 전체 *key 를 반복*

* `for (value of iterable)` - iterator를 순차적으로 반복하며 *value 를 반환*

## 객체 복사
객체를 다른변수에 그대로 할당해주면 값이 아닌 ref 를 할당하는 것이기 때문에, 객체를 복사하여 새로운 ref 를 갖고있는 객체를 할당받아야 한다.

* `Object.assign(dest, [obj1, obj2, obj3...]);` - 여러개의 객체를 합친다면 동일한 프로퍼티가 있는 경우에 대해서 뒤에 있는 매개변수 오브젝트의 프로퍼티가 우선적으로 속성값이 적용되서 반환된다.

    ```js
    const test5 = Object.assign({}, test1);
    ```


> 참고자료 - [MDN 사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)