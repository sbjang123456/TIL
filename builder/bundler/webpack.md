# webpack

현존하는 번들링 도구 중 가장 안정적인 번들링 도구

## webpack 사용 이유

- 브라우저에서 자바스크립트를 실행시킬 때, 우리는 `<script>` 태그를 이용해서 파일을 추가하며, 프로젝트가 커지면 우리는 스크립트를 여러개로 분리해서 `<script>` 태그를 적절한 순서로 추가하지만 파일이 계속 늘어나면, 네트워크 병목의 원인 될 수 있음
- 아니면, 작은 파일을 그냥 합쳐서 엄청나게 큰 하나의 자바스크립트 파일을 만들어 사용 ➡️ 이렇게 하면 유효범위와 크기, 가독성, 유지보수에 문제를 발생시킬 수 있음
- IIFE(즉시 실행 함수) - _Immediately invoked function expression_
- 유효 범위 문제를 해결하기 위해 즉시 실행 함수들을 사용 ➡️ 유효 범위에 대한 걱정없이 파일을 합칠 수 있음
- 최적화가 어렵고, 코드가 실제로 사용되고 있는지 확인하기도 어려움
- 만약 lodash 에서 하나의 함수만 사용해도, 전체 라이브러리를 추가하고 모든 것을 묶어야함
- NodeJS 가 채택한 CommonJS 는 모듈을 불러오고 사용할 수 있음 ➡️ But 브라우저에서는 사용할 수 없었음
- 라이브 바인딩도 없고, 순환 참조의 문제가 있으며, 동기적인 모듈 해석과 로딩이 느림
- 브라우저에서 CommonJS의 실행을 가능하게 하는 Browserify와 RequireJS, SystemJS 같은 번들러와 툴들이 만들어짐
- ES Module 이 ECMAScript 표준에서 공식 기능이 되고 있음
- 그렇지만 브라우저 지원은 불완전하고, 번들링이 여전히 더 빠름
- JavaScript 애플리케이션을 번들로 묶을 수 있는(ESM과 CommonJS 모두 지원) 도구이며, 이미지나 폰트, 스타일 시트 같은 다양한 애셋을 지원하도록 확장 가능
- Webpack은 성능과 로딩 시간을 중요하게 생각하며 프로젝트나 사용자에게 최고의 경험을 제공하기 위해 항상 비동기 청크 로딩이나 프리패칭 같은 새로운 기능을 추가하거나 개선하고 있음

## webpack 설정 속성

### Entry

- 엔트리 포인트는 webpack 이 내부의 _디펜던시 그래프_ 를 생성하기 위해 사용해야 하는 모듈 ➡️ webpack 은 엔트리 포인트가 (직간접적으로) 의존하는 다른 모듈과 라이브러리를 찾아냄
- 기본값은 `./src/index.js` 이지만, webpack 설정에서 `entry` 속성을 설정하여 다른 (혹은 여러 엔트리 포인트)를 지정할 수 있음

```js
module.exports = {
  entry: "./src/index.js", // 다른 엔트리 포인트 지정 가능
};
```

### Output

- `output` 속성은 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법을 webpack 에 알려주는 역할 ➡️ 기본 출력 파일의 경우에는 `./dist/main.js` 로 생성되고, 기타 파일의 경우에는 `./dist` 폴더 안에 생성되도록 설정

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // output 필드 지정 가능
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
};
```

### Loaders

- webpack 은 기본적으로 **JavaScript** 와 **JSON** 파일만 이해하지만, 로더를 사용하면 webpack이 다른 유형의 파일을 처리하거나, 그들을 유효한 모듈로 변환 하여 애플리케이션에서 사용하거나 디펜던시 그래프에 추가
- 로더는 webpack 설정에 두 가지 속성을 가짐
  - 변환이 필요한 파일(들)을 식별하는 test 속성
  - 변환을 수행하는데 사용되는 로더를 가리키는 use 속성
- webpack 컴파일러, require() / import 문 내에서 `.txt` 파일로 확인되는 경로를 발견하면
  번들에 추가하기 전에 raw-loader 를 사용하여 변환하는 예

  ```js
  const path = require("path");

  module.exports = {
    entry: "./src/index.js",
    // output 필드 지정 가능
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
    },
    module: {
      rules: [{ test: /\.txt$/, use: "raw-loader" }],
    },
  };
  ```

### Plugins

- 플러그인을 활용하여 번들을 **최적화**하거나, **애셋을 관리**하고, 또 **환경 변수 주입** 등과 같은 광범위한 작업을 수행
- 플러그인을 사용하려면 `require()` 를 통해 플러그인을 요청하고 `plugins` 배열에 추가
  - 대부분의 플러그인은 옵션을 통해 사용자가 지정할 수 있음
  - 다른 목적으로 플러그인을 여러번 사용하도록 설정할 수 있으므로 일반적으로 new 연산자로 호출하여 플러그인의 인스턴스를 만들어야 함
- `html-webpack-plugin` 은 생성된 모든 번들을 자동으로 삽입하여 애플리케이션용 HTML 파일을 생성

  ```js
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
    module: {
      rules: [{ test: /\.txt$/, use: "raw-loader" }],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  };
  ```

### Mode

- `mode` 파라미터를 **development**, **production** 또는 **none** 으로 설정하면 webpack 에 내장된 환경별 최적화를 활성화(기본값은 **production**)

```js
module.exports = {
  mode: "production", // development
};
```

| 옵션          | 설명                                                                                                                                                                                                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `development` | `DefinePlugin` 의 `process.env.NODE_ENV` 를 `development` 로 설정한다. 모듈과 청크에 유용한 이름을 사용할 수 있다.                                                                                                                                                         |
| `production`  | `DefinePlugin` 의 `process.env.NODE_ENV` 를 `development` 로 설정한다. 모듈과 청크, `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `TerserPlugin` 등에 대해 결정적 맹글이름(mangled name)을 사용할 수 있다. |
| `none`        | 기본 최적화 옵션에서 제외                                                                                                                                                                                                                                                  |

> [webpack 공식 사이트 링크](https://webpack.kr/)  
> [webpack Github 링크](https://github.com/webpack/webpack)
