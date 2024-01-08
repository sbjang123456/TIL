# Lerna

**Lerna** 는 동일한 레포지토리에서 여러 JavaScript/TypeScript 패키지를 관리하고 <u>게시할 수 있는</u> **빠르고 모던한** 빌드 시스템

- 최신 패키지 매니저들은 과거보다 좀더 많은 일들을 해주고 있지만, 초창기 모노레포를 운영할 때는 사실상 필수적인 도구 (**yarn workspaces + lerna**)
- 지원 중단을 선언했다가, Nx 를 만들고 있는 Nrwl 이 Lerna 를 계속 유지 관리하기로 함
- 위 이유로 기존의 Lerna 기능에 Nx 의 기능이 추가된 형태
  - 태스크 관리, 캐싱 기능
- 여러 기능들을 Nx 의 기능으로 실행하기 때문에 이제는 밀접하게 함께 사용
- 여러 패키지를 관리하고 게시하는 기능으로 인해 많은 오픈소스 프로젝트에서 사용
  - 패키지 게시, 패키지 변경 사항 체크, 릴리즈 노트 자동 생성 등

## Lerna 기능

### Run Tasks

모노레포 안에는 수백, 수천 개의 패키지를 보유할 수 있으므로 모든(또는 일부) 프로젝트에 대해 스크립트를 실행할 수 있는 것은 **핵심 기능**

- 모든 패키지에 스크립트 실행 - `lerna run test`
- 특정 패키지에 스크립트 실행 - `lerna run test --scope=a`
- 모든 패키지에 여러 스크립트 실행 - `lerna run test,build`
- 스크립트 순서가 필요하다면, nx 의 기능을 이용 (`lerna add-caching`)

### Cache Task Results

작업의 결과를 캐싱 - 의도적인 변화가 있을 때만 작업을 재실행하는 기능은 nx 를 이용 (`lerna add-caching`)

- 캐싱을 할 스크립트를 지정할 수 있고 이 내용은 `nx.json` 에 존재
- 캐싱의 출력물을 지정하면 삭제하더라도, 패키지가 변하지 않으면 다시 생성하는 과정을 거치지 않고, 캐싱으로부터 바로 생성 ➡️ **빠름!**

### Share Your Cache

캐시를 여러 머신에 분산 - 직접 구현할 수 있겠지만, Nx Cloud 를 이용하면 별도의 구성없이 쉽게 사용이 가능 (_오픈 소스 프로젝트에서는 무료_)

- 사용법 - (`nx connect-to-nx-cloud`) ➡️ **쉬움!**

### Explore the Project Graph

모노레포 안에 있는 모든 패키지 간의 의존성 그래프를 생성

- Nx 의 기능이고 인터렉티브함 (`nx graph`)

### Distribute Task Execution

레포지토리의 핵심이 수정되어 모든 작업을 CI 에서 실행해야 하는 경우, 성능을 개선할 수 있는 유일한 방법은 에이전트 작업을 더 추가하고 작업을 효율적으로 병렬화

1. Nx Cloud 에 연결 (`nx connect-to-nx-cloud`)
2. CI 에서 DTE 를 활성화 (`nx generate @nrwl/workspace:ci-workflow --ci=github`)

### Version and Publish

패키지의 버전을 증가시킬 수 있을 뿐만 아니라 패키지를 npm 에 게시할 수 있으며, 모든 방식으로 사용할 수 있도록 다양한 옵션을 제공

- 일반적으로 npm 게시를 하지 않는 패키지는 `"private": true`(`package.json`) 를 정의
- 버전 증가 - `lerna version --no-private`
- npm 게시 - `lerna publish --no-private`

### Editor Integrations

- Nx Console for VSCode

### Workspace Watching

파일 변경을 체크하여 명령을 실행할 수 있는 기능

- `lerna watch -- echo \$LERNA_PACKAGE_NAME \$LERNA_FILE_CHANGES`
- `lerna watch -- lerna run build --scope=\$LERNA_PACKAGE_NAME`
- `lerna watch -- lerna run build`

> [Lerna 공식 사이트 링크](https://lerna.js.org/)  
> [Lerna Github 링크](https://github.com/lerna/lerna)
