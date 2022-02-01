# Function
* 프로그램을 구성하는 빌딩 블럭
* sub-program. 재사용 가능!
* 한가지의 태스크나 값을 계산하기 위해 사용됨.
* 프로시저 언어에서 함수는 굉장히 중요!!
* 함수는 input + output 이 기본.
* 함수는 ***First-class*** 이다.
    - 변수에 할당할 수 있다.
    - function 에 파라미터로 전달할 수 있다.
    - function return 값이 될 수 있다.

## 1. 함수 선언식 (Function declaration)
### 1-1. Function declaration
* `function name(param1, param2) { body... return; }`
* 함수는 한번에 한가지 일만 하도록 만들어야 함!   
* 함수 이름은 커맨드, 동사 형태로 네이밍 하는 것을 추천!   
* 자바스크립트에서 함수는 **object** 의 일종

### 1-2. Parameters
* premitive - passed by value
* object - passed by ref

### 1-3. Default parameters (>=ES6)
* `function name(param1, param2 = 'default`) {}
* 매개변수에 기본 값을 할당해주면 함수 호출 시 파라미터를 입력하지 않으면 기본값으로 사용됨!

### 1-4. Rest parameters (>=ES6)
* `function name(...params) {}`
* `...` 으로 사용가능. 파라미터 타입은 배열형태로 들어가고, 호출할 때는 `name(a, b, c, ...);` 형태로 호출!

### 1-5. Local scope
*함수 내부에서는 외부에 접근할 수 있지만, 함수 외부에서는 내부를 접근할 수 없다.*
> 중첩된 함수에서 자식함수가 부모함수에 정의된 변수들을 접근 가능한 것이 ***closure*** 이다.

### 1-6. Return
함수는 전부 return 을 갖고 있다. 설령 리턴이 없는 함수이더라도 내부적으로는 *return undefiend*(생략 가능) 를 갖고 있다.   
함수 가독성을 위해 *Early return* 이 가능하다. 조건이 맞다면 조기에 함수를 종료시킬 수 있다.

## 2. 함수 표현식 (Function Expression)

* `const name = function() {};`
* 함수 표현식은 할당된 다음부터 호출이 가능하다.
* 함수 선언식과 가장 중요한 차이점은 hoisting 에 있다.
    - 선언식 - *hoisting* 됨!
    - 표현식 - *hoisting* 되지않음!
> * **익명함수(anonymous function)** 는 함수의 이름이 없는 것
>   ```js
>   const name = function() {};
>   ```
> * **유명함수(named function)** 는 함수의 이름이 있는 것
>   ```js
>   const name = function named() {};
>   ```


## 3. Callback function
콜백함수는 함수표현식으로 사용되어짐!

## 4. Arrow function
* `const name = () => {};`
* 항상 이름이 없는 익명함수이다.
* 한줄인 경우에는 블럭을 생략할 수 있다. (_이 때, 그 한줄이 라인이 리턴_)

## 5. IIFE (Immediately Invoked Function Expression)
즉시실행함수로 선언함과 동시에 호출
```js
(function () {
    
})();
```   





