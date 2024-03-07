# [IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver)
**Intersection Observer** API 는 타겟 엘리먼트와 타겟의 부모 혹은 상위 엘리먼트의 뷰포트가 교차되는 부분을 비동기적으로 관찰하도록 도와주는 API 이다.   
쉽게 말해서 구독한 엘리먼트에 대해 특정 영역에 보여지는지 체크할 수 있는 매우 유용한 API 이다!   


## 대표적인 사용 예
* 페이지 스크롤 시 이미지를 Lazy-loading(지연 로딩)
* 무한 스크롤(infinite-scrolling) 을 통해 스크롤 이동 시 새로운 컨텐츠를 호출 (스크롤 하단 이동 시 다음 페이지의 데이터를 기존 컨텐츠에 이어 붙이는 작업 등)
* 광고의 수익을 계산하기 위해 광고의 가시성 참고 (블로그나 사이트 등의 광고 배너를 감시하여 카운트 가능할 것으로 예상)
* 뷰포트에 따른 애니메이션 효과 구현

## 사용이유
1. *스크롤 이벤트를 걸게 되면 매우 많은 호출이 발생*하는데, 이를 컨트롤 하기위해 사용하는 **throttle, debounce** 기법을 사용하지 않아도 됨!
2. *스크롤 이벤트에서는 현재 높이 값을 얻기 위해 offsetTop 을 사용하며, 정확한 높이 값을 얻기 위해 레이아웃을 새로 그려줌으로써 발생하는 reflow 로 인해 브라우저의 성능이 저하* 될 수 있는데 IntersectionObserver 는 **reflow 를 하지 않음!**
3. IE 를 제외하면 대부분의 브라우저에서 지원된다. 
   - IE 의 서비스가 중단되기도 했고, 지원하지 않는 브라우저에 대해 공식적으로 [라이브러리](https://github.com/w3c/IntersectionObserver/tree/main/polyfill) 를 지원한다.

## 사용방법 및 옵션 설명
IntersectionObserver 를 통해 인스턴스를 생성하고 관찰 타겟을 observe 를 통해 지정한다.
```js
const observer = new IntersectionObserver(callback, options);
observer.observe(targetElement);
``` 

### [IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/IntersectionObserver) 생성자 매개변수
1. ***callback*** : 관찰할 대상이 등록되거나 가시성(visibility, 보이는지 안보이는지)에 변화가 생기면 관찰자는 콜백(callback)을 실행. callback 은 두개의 <u>파라미터</u>(entries, observer)를 받는다.
   - *entries* : [<u>IntersectionObserverEntry</u>](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) 인스턴스의 배열
     + `boundingClientRect` : 관찰 대상의 사각형 정보
     + `intersectionRect` : 관찰 대상의 교차한 영역 정보
     + `intersectionRatio` : 관찰 대상의 교차한 영역 백분율
     + `isIntersecting` : 관찰 대상의 교차 상태 (리턴형이 boolean 형으로 보통 해당 속성을 통해 교차 여부를 판단)
     + `rootBounds` : 지정한 루트 요소의 사각형 정보
     + `target` : 관찰 대상 요소
     + `time` : 변경이 발생한 시간 정보
   - *observer* : 콜백 함수가 실행되는 해당 인스턴스

2. ***options*** : 관찰이 시작되는 상황에 대한 옵션 ( default: `{ root: null, rootMargin: '0px', thredhold: 0 }` )
    - [`root`](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/root) (default: `null`)
      + 교차 기준 엘리먼트 지정 (타겟 엘리먼트의 가시성을 검사하기 위해 뷰포트 대신 사용할 루트 요소)
      + 타겟 엘리먼트의 조상 요소 이어야 하며, 지정하지 않거나 null 일 경우 브라우저 뷰포트로 설정
    - [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) (default: `0px`)
      + root 로 지정된 엘리먼트의 margin 여백 설정
      + margin 을 이용해서 root 의 범위(*타겟 엘리먼트를 감시하기 위한 root 범위*) 확장, 축소 가능.
        > root 를 지정했지만 그보다 작거나 크게 타겟 엘리먼트를 감시할 때 유용하게 사용됨. padding 요소가 없기 때문에 `-` 값으로 안쪽 여백 처럼 사용할 수 있음.
      + css 의 margin 속성 같이 설정 가능(ex: `-10px 0px -10px 0px`, `-20px, -15px, -15px`, `-20px -10px`)하며, 단위는 반드시 입력해야함!!(`px`, `%`)
      
    - [`thredhold`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds) (default: `0`)
      + root 엘리먼트와 타겟 엘리먼트가 얼마만큼 교차되어있는 체크하고 콜백 함수(옵저버)를 실행하기 위한 기준을 백분율로 설정
      + 기본값은 Array 타입의 `[0]` 이지만 Number 타입의 단일 값으로도 작성할 수 있음(`Array<number> | number`)
        > * `0` : 타겟 엘리먼트가 root 의 범위를 교차하는 순간 콜백 함수 실행  
        > * `0.5` : 타겟 엘리먼트가 root 의 범위 50% 일 때 콜백 함수 실행
        > * `[0, 0.5, 1]` : 타겟 엘리먼트가 root 의 범위 0%, 50%, 100% 일 떄 콜백 함수 실행 (배열로 받으면 가시성이 만족하는 배열 수 만큼 콜백 함수가 실행됨을 잊지말자!)
      
### [IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver#%EB%A9%94%EC%84%9C%EB%93%9C) 메서드
* [`observe()`](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/observe) : 타겟 엘리먼트의 관찰 시작
* [`unobserve()`](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/unobserve) : 타겟 엘리먼트 관찰 중지
* [`disconnect()`](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/disconnect) : 해당 인스턴스가 관찰하는 모든 요소의 관찰 중지
* [`takeRecords()`](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/takeRecords)

