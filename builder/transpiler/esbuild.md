# esbuild

매우 빠른 Web 용 번들러

- Figma 의 CTO 에 의해 개발
- 차세대 자바스크립트 번들러로 빠르게 인기를 얻고 있음
- esbuild 번들러 프로젝트의 주요 목표는 **빌드 도구 성능**의 새로운 시대를 열고, 그 과정에서 _사용하기 쉬운_ 최신 번들러를 만드는 것
- Go 언어를 이용한 병렬 처리로 다른 번들러에 비해 월등한 속도를 자랑
- 아직은 (현재 0.19.x 버전) 1 (major) 버전이 출시되지 않았기 때문에 주의해서 사용해야 하고, 계속 기능이 추가되고 있음
- esbuild 는 친절하게 모든 개발 경험을 만족시켜주지는 않음 ➡️ 작은 규모의 코드를 분할해서 패키지화 할때 쓰이거나, 다른 도구들에서 Babel 과 Terser 를 대신하여 사용

### esbuild 주요 기능

- Extreme speed without needing a cache
- JavaScript, CSS, TypeScript, and JSX built-in
- A straightforward API for CLI, JS, and Go
- Bundles ESM and CommonJS modules
- Bundles CSS including CSS modules
- Tree shaking, minification, and source maps
- Local server, watch mode, and plugins

> [esbuild 공식 사이트 링크](https://esbuild.github.io/)  
> [esbuild Github 링크](https://github.com/evanw/esbuild)
