# Nx

최고 수준의 모노레포 지원과 강력한 통합 기능을 갖춘 차세대 빌드 시스템 (_Nx 의 nrwl 이 Lerna 를 유지관리 하면서부터 많은 기능이 lerna 와 유사함_)

- 현재 가장 많은 기능을 제공하는 모노레포를 위한 도구(**개발자 생산성 향상, CI 성능 최적화, 코드 품질 유지를 위한 최고 수준의 도구**)
- 오픈 소스이면서 Nx Cloud 라는 유료 상품을 통해 원격 캐싱 및 분산 태스크 수행과 같은 수준 높은 기능을 간편하게 제공
- 버전이 올라가면서 사용법이 추가되거나 바뀔 수 있음
  - 설정을 굉장히 다양하고 세밀하게 할 수 있음
  - 중요한 것은 사용자가 어떻게 사용하게 하려는 것인지에 대한 방향성

## Nx 기능

### Run Tasks

nx 는 단일 워크스페이스 혹은 전체 워크스페이스들에 대한 태스크 수행 명령어를 가지고 있음

- 단일 워크스페이스 태스크 실행 - `nx build my-app`
- 전체 워크스페이스들에 대한 태스크 실행 - `nx run-many -t build`
- 전체 워크스페이스들에 대한 여러 태스크 실행 - `nx run-many -t build test`

### Cache Task Results

캐싱 기능을 제공

- 태스크 실행 명령어를 실행하면, 여러방식의 설정 파일로부터 캐싱을 어떻게 하는지 체크
- `nx.json` / `project.json` / `package.json` 등을 이용해서 설정
- lerna 와 비슷한 개념

### Use Remote Caching

Nx Cloud 를 활용해서 사용이 가능 - `nx connect-to-nx-cloud`

### Distribution Task Execution

레포지토리의 핵심이 수정되어 모든 작업을 CI 에서 실행해야 하는 경우, 성능을 개선할 수 있는 유일한 방법은 에이전트 작업을 더 추가하고 작업을 효율적으로 병렬화

1. Nx Cloud 에 연결 (`nx connect-to-nx-cloud`)
2. CI 에서 DTE 를 활성화 (`nx generate @nrwl/workspace:ci-workflow --ci=github`)

### Explore the Graph

모노레포 안에 있는 모든 패키지 간의 의존성 그래프를 생성

- 인터렉티브 (`nx graph`)

### Automate Updating Dependencies

사용하는 package versions 들을 업데이트 하거나, 여러가지 도구들의 설정을 업데이트 하거나 심지어 소스코드도 마이그레이션을 자동으로 수행

### Enforce Module Boundaries

코드 분석을 사용하여 프로젝트가 서로의 잘 정의된 공용 API 에만 의존할 수 있도록 합니다.

- 또한 프로젝트가 서로 의존할 수 있는 방식에 선언적으로 제약을 가할 수 있습니다.
- Lint 설정을 이용해서 선언적으로 설정한 내용을 바탕으로 제약을 가할 수 있습니다.

### Integrate with Editors

- Nx Console for VSCode

### Plugin Features

공통적으로 사용 가능한 실행기나 코드를 생성해내는 생성기를 플러그인으로 작성하고 서로 공유

> [Nx 공식 사이트 링크](https://nx.dev/)  
> [Nx Github 링크](https://github.com/nrwl/nx)
