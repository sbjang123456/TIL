# data types

## Variable
변수란 - 변경될 수 있음을 뜻함.
> 변수 타입을 통해 변수를 정의하게 되면 메모리 포인터가 생성되는 개념이다.

### let
ES6 에서 추가된 변수 타입

#### Block scope
block 내부(중괄호)에서 코드를 작성하게 되면 블럭 밖에서는 더 이상 블록 안에 내용을 접근할 수 없음.

#### global 변수
글로벌 변수는 어플리케이션 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 사용해야함.   
변수선언은 가능하면 필요한 부분에서만 정의해서 사용하길 권장함

### var
이 전(ES6 이전)에 사용하던 변수 타입   
var 타입은 변수를 선언하기도 전에 사용할 수 있음. (var hoisting 때문!)
> * hoisting
>   - 어디에 선언했는지에 상관없이 가장 상위로 끌어올려버리는 것을 의미



#### var 를 사용하면 안되는 이유
* var hoisting
    > var 타입은 변수를 선언하기도 전에 변수를 사용할 수 있음.
* no block scope
    > block 을 이용해서 변수를 선언해도 어디에서든 사용할 수 있게 됨.   

## Constants(상수)
변수를 할당하면 절대 값이 바뀌지 않는다.
> 가리키고 있는 포인터가 잠겨있다.   
> 값을 선언함과 동시에 할당해야만 하고 그 뒤로는 값을 변경할 수 없다.   > 

값이 계속 변경될 수 있는 것을 _mutable_ 데이터 타입(let, var)이라고 하며,
constansts 는 _immutable_ 데이터타입(const)이라고 한다.   
가능하면 값을 할당한 다음에 값을 변경할 수 없는 immutable 데이터 타입을 사용할 것을 지향해야한다.
* 장점
    - 보안상의 이유
        > 해커들이 코드에 이상한것을 삽입해서 값을 계속 변경해나가는 것이 가능한데, 이것을 방지 할 수 있음.
    - 스레드 안전성
        > 어플리케이션이 실행되면 한가지의 프로세스가 할당되고, 그 프로세스 안에서는 다양한 스레드가 동시에 돌면서 어플리케이션을 효율적으로 빠르게 돌아갈 수 있도록 도와주는데, 다양한 스레드들이 동시에 변수에 접근해서 값을 변경할 수 있다. 이는 위험한것으로 가능하면 값이 변경되지 않는 것을 사용하는 것이 좋다.
    - 사용자 실수 방지

## Variable types
javascript 데이터 타입의 종류 
* primitive (single item)
    - number
    - string
    - boolean
    - null
    - undefined
    - symbol
* object (multiple single item)
* function (first-class function)

### number
다른 언어에 비해 javascript 는 정수, 소수 상관없이 number 하나로 통일됨.   
자바스크립에서는 타입이 다이나믹하게 결정되기 때문에 let or const 로 선언하면 된다.
> 타입스크립트에서도 number 라는 타입만 넣어주면 된다.

number 타입의 특별한 값
* Infinity
* -Infinity
* NaN - number 타입 여부

> number 의 범위 (-2<sup>53</sup> ~ 2<sup>53</sup>)   
> 최근에 big int 타입 추가됨.
> * 숫자 마지막에 n을 붙임! (아직 브라우저 지원 제약있음.)

### string
javascript 에서는 char 타입이 없고 한글자 or 여러글자 모두 string 타입이다.

문자열 합치기
* `+` 기호 사용
    ```js
    const name = 'jangsu';
    console.log('Hi, ' + name) ;
    ```
* 벡틱(`) 사용 (= ***template literal***)
    ```js
    const name = 'jangsu';
    console.log(`Hi, ${name}`) ;
    ```

### boolean
`true` or `false`
* false 로 간주되는 것들
    - 0
    - null
    - undefined
    - NaN
    - ''
* true 로 간주되는 것들
    - 이 외 다른 값들!

### null
명확하게 값을 null 로 할당

### undefined
선언은 되었지만 어떤 값도 지정되어있지 않음.

### symbol
일종의 고유한 식별자
> 자료구조 map 을 사용할 때 식별자로 사용되어짐.

## Dynamic typing: dynamically typed language
자바스크립트는 선언할 때 타입을 선언하지않고 런타임에 할당된 값에 따라 타입이 변경될 수 있음!   
이 때문에 런타임에 발생하는 에러가 많음.ㅠ.ㅠ <-- ***타입스크립트***를 써야하는 이유!