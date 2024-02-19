# Module Federation 이란

## Webpack5 Module Federation 원리

### Module Federation 이란 무엇인가

- Module Federation 은 Webpack5 에서 소개된 **고급 모듈 통합 기능**
- 여러 JavaScript 애플리케이션 간에 코드를 동적으로 공유
- 다른 접근 방식과 달리 모듈 페더레이션은 기존 코드베이스를 변경할 필요가 없음 ➡️ 오직 Webpack 이 모듈을 원격으로 로드하도록 처리
- 모듈 페더레이션은 UI 컴포넌트, 비즈니스 로직 등 모든 유형의 자바스크립트에 사용 가능(모든 자바스크립트를 공유 가능)
- 마이크로프론트엔드 아키텍처에서 특히 유용하며, 다양한 애플리케이션들이 서로 독립적으로 개발되고 배포될 수 있도록 지원

### Module Federation 핵심 구성요소

- **Host**
  - Host 애플리케이션은 다른 애플리케이션(remotes)으로부터 모듈을 로드 (👉 _Host 는 웹 애플리케이션의 '메인' 부분으로 생각할 수 있음_)
- **Remote**
  - Remote 애플리케이션은 Host 에 로드될 수 있는 모듈을 제공(👉 _이들은 독립적으로 배포할 수 있는 별도의 코드베이스를 가짐_)
- **Shared**
  - Shared 모듈은 여러 애플리케이션 간에 공유되는 의존성(👉 _이를 통해 중복된 코드의 로딩을 방지하고, 일관된 의존성 관리를 가능하게 함_)

### Module Federation 동작 원리

1. 플러그인 구성

   - ModuleFederationPlugin 은 Webpack 설정 파일에서 구성되며, 원격 호스트와 공유할 모듈 등의 세부 사항을 정의

2. 원격 엔트리 파일 생성

   - 플러그인은 원격 애플리케이션을 위한 `remoteEntry.js` 파일을 생성(👉 _이 파일은 원격 어플리케이션의 인터페이스 역할을 하며, 호스트 어플리케이션에서 원격 모듈을 로드할 때 사용_)

3. 모듈 노출

   - 원격 애플리케이션에서는 `exposes` 객체를 통해 특정 모듈을 외부에 노출(👉 _이렇게 함으로써, 다른 애플리케이션들이 이 모듈을 사용할 수 있게 됨_)

4. 동적 모듈 연결
   - 호스트 애플리케이션은 원격 애플리케이션의 `remoteEntry.js` 를 참조하고, 필요한 모듈을 동적으로 로드(👉 _이는 주로 `import()` 문을 사용하여 수행_)

### Module Federation 동작 원리의 이해

Host 는 remotes 를 통해 리모트 서버 정의 ➡️ `import` 로 Remote 에서 exposes 를 통해 노출된 코드를 가져옴

- Remote 애플리케이션은 **자체적인 빌드 과정**을 통해 `remoteEntry.js` 와 같은 원격 엔트리 파일을 생성(👉 _이 파일은 원격 모듈의 메타데이터와 주소를 포함_)
- Host 애플리케이션은 `remoteEntry.js` 를 참조하여 필요한 모듈을 요청(👉 _이 요청은 Webpack의 런타임 코드에 의해 처리되며, 필요한 경우 네트워크를 통해 해당 모듈을 로드_)

```ts
// Host
new ModuleFederationPlugin({
    name: "main_app",
    filename: "remoteEntry.js",
    remotes: {
        // 매핑될 이름: "Remote 이름@주소/Remote 파일명"
        component_app: "component_app@http://localhost:3001/remoteEntry.js",
    },
    exposes: {},
    shared: {
    ...deps,
    react: {
        singleton: true,
        requiredVersion: deps.react,
    },
    "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
    },
    },
}),
```

```ts
// Remote
new ModuleFederationPlugin({
    // Remote 이름
    name: "component_app",
    // Remote 파일명
    filename: "remoteEntry.js",
    remotes: {},
    exposes: {
        // 노출 목록
        "./Button": "./src/components/Button",
    },
    shared: {
    ...deps,
    react: {
        singleton: true,
        requiredVersion: deps.react,
    },
    "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
    },
    },
}),
```

## Vite 의 Module Federation 플러그인

### @originjs/vite-plugin-federation 소개

- Module Federation 을 지원하는 Vite/Rollup 플러그인으로 Webpack 에서 영감을 받았으며 Webpack Module Federation 과 호환되는 것이 목표
- Vite 공식 지원 플러그인이 아니기 때문에 프로덕션에서의 안정성을 Vite 에서 담보 X
- Vite 를 만든 Evan You 는 2023 ViteConf 에서 Module Federation 에 대한 부족함을 언급(https://www.youtube.com/watch?v=veCxKeLl35A&t=1400s)
- 호스트 측에서만 개발 모드를 지원하며, 리모트 측에서는 `vite build` 를 사용하여 `remoteEntry.js` 를 생성(👉 _리모트에서 `vite build —watch` 를 이용하면 개발 모드에서 도움이 됨_)

### Vite Module Federation 설정

1. 플러그인을 이용해서 remote 앱을 설정
   - `vite.config.ts` 설정 파일에서 구성되며, 공유할 모듈의 name, filename, exposes, shared 등을 정의
2. 원격 엔트리 파일 생성
   - 플러그인은 원격 애플리케이션을 위한 `remoteEntry.js` 파일을 생성(👉 _Vite 의 개발 모드로는 원격 엔트리 파일이 생성되지 않기 때문에 `vite build` 를 이용_)
3. host 앱의 설정에 remote 앱을 등록
   - 원격 애플리케이션의 exposes 객체를 통해 모듈을 사용하려면 host 앱의 `vite.config.ts` 에 remotes 부분에 remote 앱을 등록
4. 동적 모듈 연결
   - 호스트 애플리케이션의 코드애서 `import()` 를 통해 원격 모듈을 사용

### vite.config.ts 설정

```ts
// Host
plugins: [
    react(),
    federation({
        name: "host",
        remotes: {
            remote: "http://localhost:5001/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom"],
    }),
],
build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
},
```

```ts
// Remote
plugins: [
    react(),
    federation({
        name: "remote",
        filename: "remoteEntry.js",
        exposes: {
            "./Button": "./src/components/Button",
        },
        shared: ["react", "react-dom"],
    }),
],
build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
},
```

### @originjs/vite-plugin-federation 예제 목록 [(Gihub 링크)](https://github.com/originjs/vite-plugin-federation?tab=readme-ov-file#example-projects)

- Vite 프로젝트에서 노출한 모듈을 Webpack 프로젝트에서 사용하거나, Webpack 프로젝트에서 노출한 모듈을 Vite 프로젝트에서 사용할 수 있음(👉 이 때는 `remotes.from` 과 `remotes.format`를 적절히 선택해야 함)
- Webpack 은 esm 형식을 사용하는 `vite-plugin-federation` 컴포넌트와 함께 사용하는 것이 가장 적절
- Vite/Rollup 과 Webpack 이 동일한 청크를 생성한다는 보장이 없어 shared 에 문제가 발생할 수 있으므로, React 프로젝트에서 Vite 와 Webpack을 혼합하는 것은 권장하지 않음!
