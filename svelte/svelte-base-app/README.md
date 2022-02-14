# Svelte 기초
svelte 맛보기를 위한 초기 구성 및 간단한 앱 만들어보기

## Environment
* Nodejs 17
* VSCode
* MacOS Monterey 12.1

## Setup
최초 설치를 위한 기본 과정

### template 다운로드
최초 설치는 생각보다 간단했다. 리액트의 `create-react-app` 처럼 svelte 는 템플릿을 지원해주는 것 같다.
```shell
npx degit sveltejs/template svelte-base-app
```
svelte 는 기본적으로 rollup 번들러를 기본으로 한다. (*리액트는 보일러 플레이트 기준으로 웹팩 번들러가 기본 이었다.*)   
rollup 이 아직 부담스럽다면 svelte template 에서는 webpack 번들러 템플릿도 지원해준다.
```shell
npx degit sveltejs/template-webpack svelte-base-app
```

### typescript 적용
template을 다운받고 나면 경로에 `scripts/setupTypeScript.js` 파일이 존재한다.
typescript 를 사용할 수 있는 환경을 만들기 위한 스크립트로 `node`를 통해 실행시키면 된다.
```shell
node scripts/setupTypeScript.js
```
실행 시키고 나면 파일 몇가지가 변경된 것을 확인할 수 있다.

### 의존성 설치
필요한 의존성 모듈을 설치하기위한 작업이다. (이건 어딜가나 똑같다!!)
* npm
    ```shell
    npm install
    ```

* yarn
    ```shell
    yarn
    ```

입맛에 맞는걸로 설치하면 될 것 같다. 나는 역시 `yarn`

### 개발 서버 구동
* npm
    ```shell
    npm run dev
    ```

* yarn
    ```shell
    yarn dev
    ```

역시 초기 셋팅은 간단하다. 

rollup 설정이나 기타 필요한 셋팅들좀 살펴봐야겠다..!

> svelte template 에 대한 설명은 github 에 자세히 잘 나와있다. ([참고링크](https://github.com/sveltejs/template))