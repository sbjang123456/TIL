# callback
비동기프로그래밍의 시작! (꼭 비동기가 아니더라도 많이 쓰임!!)   
전달받은 인자를 나중에 실행시키는 것

## 동기와 비동기
* javascript 는 동기적인 언어이다.

* 호이스팅 된 이후 부터 코드 블락이 순서대로 실행된다.

* synchronous
  - 정해진 순서에 맞게 코드가 실행된다.

    ```js
    function printImmediate(print) {
      print();
    }
    console.log('1');
    printImmediate(() => console.log('2'));
    console.log('3');

    // output:  1 2 3
    ```

* asynchronous
  - 비동기적으로 언제 코드가 실행되는지 예측할 수 없다.

    ```js
    function printDelay(print, delay) {
      setTimeout(print, delay);
    }
    console.log('1');
    printDelay(() => console.log('2'), 1000);
    console.log('3');

    // output:  1 3 2
    ```

## 콜백지옥의 문제점
1. 가독성이 상당히 떨어짐
2. 가독성 저하로 인한 비즈니스 로직 파악이 힘듬.
3. 유지보수 힘듬.
 
 > 콜백은 한번 더 정리하기로 하자!