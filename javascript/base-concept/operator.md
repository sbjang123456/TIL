# operator

## 1. String concatenation
`+` 기호를 이용해서 문자열을 더하는 연산자

## 2. Numeric operators
* `+` - 더하기
* `-` - 빼기
* `*` - 곱하기
* `/` - 나누기
* `%` - 나머지
* `**` - 거듭제곱

## 3. Increment & decrement operators
증감연산자
* `++` - 1 증가
    - preIncrement - 증가 후 할당(`const nPre = ++i;`)
    - postIncrement - 할당 후 증가(`const nPre = i++;`)
* `--` - 1 감소
    - preDecrement - 감소 후 할당(`const nPre = --i;`)
    - postDecrement - 할당 후 감소(`const nPre = i--;`)

## 4. Assignment operators
할당연산자. `=` 기호를 이용해서 할당을 가능하게 하는 연산자
* `=`
* `+=`
    ```js
    a += b; // a = a + b;
    ```
* `-=`
    ```js
    a -= b; // a = a - b;
    ```
* `*=`
    ```js
     a *= b; // a = a * b;
    ```
* `/=`
    ```js
     a /= b; // a = a / b;
    ```

## 5. Comparison Operators
비교 연산자
* `<`
* `<=`
* `>`
* `>=`

## 6. Logical operators
논리 연산자
* `||` - *or*
    > or 연산자는 좌측부터 체크하고 true 가 나오면 멈춘다!
* `&&` - *and*
    > and 연산자는 좌측부터 체크하고 true 가 나오면 멈춘다!
* `!` - *not*

## 7. Equality operators
동등 연산자
* `==`, `!=` - loose equality (동등연산자)
    > 타입 비교 x   
    > 타입을 알아서 변경해서 비교함!!
* `===`, `!==` - strict equality (완전동등연산자)
    > 타입까지 체크

## 8. [Conditional operators](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)
if 연산자
* `if`
* `else if`
* `else`

## 9. [Ternary operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
삼항 연산자 `condition ? valueTrue: valueFalse;`

## 10. [Switch statement](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch)
switch case 문

## 11. Loop
반복문

### 11-1. [while](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while)
조건이 false 가 될 때 까지 반복

### 11-2. [do while](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/do...while)
do block 먼저 실행 후 while 문 실행

### 11-3. [for loop](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)
`for(begin; condition; step)`

### 11-4. nested loops
중첩 for 문 - O(n<sup>2</sup>)

### 11-5. [break](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/break), [continue](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/continue)
* break - 반복 종료
* continue - 다음 스텝으로 이동