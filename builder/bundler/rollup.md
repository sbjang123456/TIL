# Rollup 과 Terser

## Rollup

작은 코드 조각을 더 크고 복잡한 것으로 컴파일

### Rollup 의 역할

- 표준 모듈 시스템 문법으로 작성된 여러개의 파일로 이루어진 코드를 **한개 혹은 몇개**로 묶어 주는 역할
- 묶어주기 때문에 **번들러** 라고 부름
- 묶어주는 동작을 하면서 여러가지 일들(compile, minify 등)을 함께 수행하기 위해 여러가지 플러그인을 활용
- 보통 라이브러리 제작을 위한 번들러로 많이 사용

> [Rollup 공식 사이트 링크](https://rollupjs.org/)  
> [Rollup Github 링크](https://github.com/rollup/rollup)
>
> - [Rollup Terser Plugin](https://github.com/rollup/plugins/tree/master/packages/terser)

## Terser

자바스크립트 mangler 및 압축기 도구

### Terser 의 역할

- **mangler** 는 망가뜨리는 사람, 고기를 써는 기계 라는 뜻 ➡️ 코드를 실행이 가능한 수준으로만 망가뜨림
- Terser는 자바스크립트 코드를 위한 업계 표준 **minifier**
- 변수 이름을 작게 만들고, 공백과 주석을 제거하며, 사용하지 않는 코드를 삭제
- 커맨드라인 명령어 혹은 Node.js API 로 사용이 가능
- 보통 직접 사용하지 않고, 많은 다른 도구들에서 사용
  - webpack, angular, parcel 등

> [Terser 공식 사이트 링크](https://terser.org/)  
> [Terser Github 링크](https://github.com/terser/terser)
