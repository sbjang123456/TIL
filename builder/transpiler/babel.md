# Babel (바벨)

**바벨**은 자바스크립트 **컴파일러**

내가 작성한 코드(_최신 자바스크립트 문법을 활용_) ➡ 브라우저가 이해할 수 있는 코드(_브라우저가 이해할 수 있는 문법으로 바벨이 다시 작성_)

### @babel/core @babel/cli

커맨드라인 명령을 통해 컴파일

- `pnpm exec babel src --out-dir dist`
  - src 폴더 안에 모든 코드 ➡ 바벨이 dist 폴더 안에 다시 작성

### `.babelrc.json` (`babel.config.json`, `.babelrc.js`, `babel.config.js`)

설정 파일을 바탕으로 문법을 변환 ( 설정 파일에는 `plugin` 과 `preset` 을 정의 )

- 설정 파일을 바탕으로 변환할 대상을 선정 (정의된 대상이 아닌 경우 변환 ❌ ) ➡ 선정된 대상이 변환식에 따라 변경

### Plugin

특정 최신문법에 대한 변환을 위해 바벨에서 제공하는 플러그인을 사용하면 정상적으로 변환

- `@babel/plugin-transform-arrow-functions` 을 설치, 설정 파일에 `@babel/plugin-transform-arrow-functions` 플러그인 추가
  - ex: 화살표 함수가 존재 ➡ es5 로 변환

### Preset

- 설정 파일에 모든 문법 하나하나를 전부 플러그인으로 추가하기 힘들기 때문에 플러그인 목록을 만듬 (**프리셋**)
- 프리셋들을 활용해서 설정하면 일일이 관리하는 것보다 편리
- `@babel/preset-env` 는 브라우저의 목록을 사용해서 변환할 대상을 적절히 추출
  - ex: _화살표 함수를 이해할 수 있는 브라우저에서는 변환되지 않음_
- `.browserslistrc` 파일에 표현하거나, `package.json` 혹은 **babel 설정**에 표현

### 대표 preset

• @babel/preset-env 최신 ES 스펙을 가지고 있으며, 세부 관리가 필요 없이 자동으로 필요한 문법만 처리하여 사이즈를 줄여줍니다.
• @babel/preset-react 리액트 사용을 위해 jsx 등을 처리해주는 프리셋 입니다.
• @babel/preset-typescript 타입스크립트 문법을 변환해주는 프리셋 입니다. 변환시 타입 에러를 잡을 수 없는 단점이 있습니다. 자세한 내용은 https://www.typescriptlang.org/docs/
handbook/babel-with-typescript.html 여기를 참고해주세요.
