# bundler
  * webpack
  * parcel
  * rollup

## 위 세개의 번들러를 직접 셋팅해보고 차이를 비교해보자!
  * 셋팅의 간편함 체크
  * 번들링 속도 비교

### webpack 과 rollup 의 차이점
 * webpack
   * 특징
     * 생태계가 풍부하고 안정적임
     * 작동 방식은 각 모듈을 함수로 감싸고 로더와 모듈 캐시를 구현하는 번들을 생성
       * 안정적
       * 전역 스코프에 있던 변수들을 지역으로 변경하기 때문에 충돌없이 모듈화
     * 보통 코드스플릿팅을 하거나 , CommonJS 종속성이 많거나, 앱에서 웹팩을 선호
 * rollup
   * 특징
     * 코드들을 호이스팅 하고 한번에 번들링을 진행하기 때문에 속도가 빠름.
     * es6 모듈 형태로 빌드 결과물이 출력되서 라이브러리나 패키지에 활용할 수 있음.
     * 다른사람들이 사용하는 라이브러리는 보통 rollup 선호
 * Parcel
   * 특징
     * zero configuration. 따로 설정이 필요없음.
     * 번들링 속도가 빠르다는 것이 아니고, 프로젝트 초기 진행 속도가 빠름.
     * 작은 프로젝트에는 적합함. 엔터프라이즈급 시스템에는 맞지 않다는 의견이 대다수.
