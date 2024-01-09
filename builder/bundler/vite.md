# Vite

차세대 프런트엔드 **개발 툴**

- 프랑스어로 “빠르다” 라는 의미 ➡️ 빠르게 개발할 수 있도록 도와주는 **개발 도구**
- Vue 를 개발한 에반 유 가 *개발을 위한 개발 서버 기능*과 *프로덕션을 위한 번들 기능*을 가진 빠른 개발 도구를 제작
  (처음에는 **vue** 에서 쓰였지만 현재는 **React**, **Svelte** 등 대표 웹 프레임워크들과 함께 널리 사용되고 있음)
- 기본으로 타입스크립트 및 각종 css 로더를 내장, HMR 과 개발 서버, Proxy 등을 지원하면서 탄탄한 구성 및 쉬운 사용법으로 인기를 얻고 있으며, 여러가지 프레임워크의 시작 템플릿을 제공
- 내부적으로 **esbuild** 와 **Rollup** 을 사용
  - **Webpack** 의 복잡한 설정 방식을 좋아하지 않는 **Rollup** 사용자들을 대거 흡수하면서 기하 급수적으로 생태계가 성장
  - 개발 시에 빠르다는 장점으로 많은 프로젝트의 개발 도구를 **Webpack** 에서 **Vite** 로 변경시키는 임팩트를 발휘

## Vite 가 해결한 문제

- 지루할 정도로 길었던 서버 구동
  - “콜드 스타트(최초로 실행되어 이전에 캐싱한 데이터가 없는 경우)” 방식으로 개발 서버를 구동할 때, **dependencies** 와 **source code** 두 가지 카테고리로 나누어 개발 서버의 시작 시간을 개선
  - **esbuild** 를 이용해서 **dependencies** 를 **ESM** 으로 불러올 수 있도록 사전 번들링
  - **vite** 는 **Native ESM** 을 이용해 **source code** 를 만들어내고, 브라우저가 번들링을 담당
- 느렸던 소스 코드 갱신
  - **vite** 는 번들러가 아닌 **ESM** 을 이용해서 **HMR** 을 지원 ➡️ 어떤 모듈이 수정되면 **vite** 는 수정된 모듈과 관련된 부분만을 **ESM** 으로 다시 만들어냄

## Vite 주요 기능

### 템플릿을 이용해서 프로젝트 만들기

- Vite 는 Node.js 버전 18+ 또는 20+ 이 필요 (_일부 템플릿의 경우, 더 높은 버전의 Node.js 를 요구할 수 있음_)
- `pnpm create vite@latest [프로젝트 이름] -- --template [템플릿 이름]`
- React 관련 템플릿
  - react
  - react-ts
  - react-swc
  - react-swc-ts

### npm 을 이용한 의존성 추가 및 사전 번들링

- Vite 를 통해 **ESM 스타일**로 사전에 번들링 된 CommonJS 및 UMD 모듈을 import 가능 ➡️ 이 과정은 **esbuild** 를 통해 이루어지며, JavaScript 기반의 다른 번들러보다 빠른 콜드 스타트가 가능
- `/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd` 와 같이 URL 을 이용해 ESM 을 지원하는 브라우저에서 모듈을 가져올 수 있도록 import 구문을 수정
- 디펜던시는 반드시 캐시됨

### Hot Module Replacement

- vite 는 기본적으로 ESM 를 통해 **HMR API** 를 제공
  - HMR 기능이 있는 프레임워크는 API 를 활용하여 페이지를 다시 로드하거나 애플리케이션 상태를 날려버리지 않고 즉각적이고 정확한 업데이트를 제공
  - vite 는 Vue Single File Components, React Fast Refresh 와 같은 First-party HMR 모듈을 제공
- `create-vite` 에서 제공하는 템플릿 안에는 HMR 모듈이 이미 포함되어 있음!

### 내장 로더

- **TypeScript** - 트랜스파일만 수행하며, 타입 검사는 IDE 와 빌드 프로세스에서 진행하도록 권장
- **JSX** - `.jsx` 와 `.tsx` 역시 사용이 가능 (**esbuild** 를 이용해 컴파일)
- **CSS** - `.css` 파일을 가져오면 HMR 을 지원하는 `<style>` 태그 를 통해 페이지에 해당 콘텐츠가 주입
- **Png..(image files)** - 정적 에셋을 import 하는 경우, 이에 대한 Public URL 이 반환
- **JSON** - JSON 파일은 바로 Import가 가능 (_가져올 필드를 지정하면 트리 세이킹 됨_)

> [Vite 공식 사이트 링크](https://ko.vitejs.dev/)  
> [Vite Github 링크](https://github.com/vitejs/vite)
