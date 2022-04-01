# React MVVM 예제 - 01
리액트에서 mvvm 을 적용해보는 간단한 예제 소스 입니다.

## 기술스택
* yarn v1
* React 18
* craco

## 구조 설명

### View
오로지 UI 만 보여지는 것을 수행한다.   
Container + Presentational Component 패턴 에서 Presentational Component 영역과 흡사하다고 보면 될 것 같다!

### ViewController
개인적으로 View + ViewController 로 같이 둘 수 있지만, UI 에 대한 이벤트 및 viewModel 을 전달하는 통로 정도로 구분되었다.

### ViewModel
생성자를 통해 Model 을 주입 받고 Model 과 직접 상호작용하는 javascript 클래스 이다.   
Model 이 변경될 때 마다 View 에 반영된다.   
데이터 정규화 작업 or Post 와 같은 서버 요청 로직을 둔다.

### Model
데이터 소스 역할을 하며, 보통 데이터 타입을 정의하고, fetching 받는 역할을 한다.

### Provider
Provider 는 mvvm 의 일부는 아니지만, Model 객체를 생성하고 ViewModel 에 주입 후 View 와 연결을 위한 통로로 사용된다. (굳이 필요 없지만, 관심사 분리를 위해 사용됨.)

## 장단점
### 장점
* 역할 분리를 통해 프로젝트의 규모가 클 수록 기능 확장 및 보수가 편할 것으로 보여진다.
* UI 가 완전히 분리됨으로서 UI 개발과 별개로 진행 될 수 있을 것으로 보인다.

### 단점
* 프로젝트 규모가 작다면, 불필요한 오버헤드가 발생할 수 있을 것으로 보여진다!

## 느낀점
리액트에서는 상태값 변경에 따른 리렌더링이 베이스인데, 모델 내부의 객체 속성값이 변경되면서 상태값 변경을 감지하지 못하는 것으로 보인다.   
또한 Redux 나 Recoil 같은 상태관리 라이브러리를 사용하게 되면 어느정도 분리가 가능하기 때문에 mvvm 패턴 적용을 마냥 권장하지 않는 것 같다.   
다른 예제도 한번 만들어보고, 프로젝트 적용 유무를 확인해야 할 것으로 보인다.