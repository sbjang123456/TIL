# Javascript 의 Class 개념 정리
* **객체지향언어**
    - class 는 연관있는 데이터를 묶어놓은 개념.
    - 속성(field) 과 행동(method) 로 구성
    - 데이터만(field) 들어있는 클래스를 데이터 클래스라고도 한다.
    - 외부 접근, 내부 접근 구분 (캡슐화)
    - 상속과 다양성

* **class**
    - 템플릿
    - 한번만 선언
    - 데이터가 들어있지 않음.

* **object**
    - 클래스를 이용해서 데이터를 넣어서 만드는 것이 object.
    - 여러번 생성할 수 있음.
    - 클래스의 인스턴스이다.

## javascript 의 class
* ES6 에서 추가됨
* prototype 기반의 문법적 설탕

1. Class 선언
```js
class ClassName {
    // 생성자
    constructor(field) {
        // 속성
        this.field = field;
    }

    // 메소드
    method() {
        console.log(`${this.field}! Hello World`);
    }
}
```

2. Object 생성
new 키워드를 통해 객체를 생성한다.
```js
const hello = new ClassName();

// 객체가 생성됐다면, 점 찍고 속성 및 함수에 접근 가능하다.
hello.method();
```

3. Getter & Setter
*class 를 만들 때 좀 더 방어적인 자세로 만들 수 있게 해주는 것.*   
```js
class Person {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
}
```
*속성에 접근할 때 getter 호출. `=` 과 같이 값을 할당할 때 setter 호출됨.*   


4. public, private
생성자를 사용하지 않고 필드를 정의할 수 있음.   
그냥 정의하게 되면 ***public***, 해시기호(`#`) 를 앞에 붙이게 되면 ***private***

5. Static
클래스 내에 있는 필드와 메소드는 객체를 생성해야만 사용할 수 있는데, 클래스 이름만으로 사용할 수 있는 것. (*클래스 내부 값들과 상관없고, 반복적으로 사용해야할 때 사용!*)   
앞에 `static` 만 붙이면 된다!!!!


## 상속과 다양성
공통되는 부분을 일일히 작성하지 않고 `extends` 를 이용해서 동일한 부분을 재사용할 수 있다.   
필요한 부분은 오버라이딩(재정의) 해서 사용할 수 있다!   
`super` 키워드를 통해 부모클래스의 필드와 메소드에 접근할 수도 있다.

## instanceOf 
object 가 class 의 인스턴스 인지 체크하는 연산자이다.(`return boolean`)   
