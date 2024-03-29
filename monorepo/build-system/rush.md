# Rush

Rush: 확장 가능한 Web 용 Monorepo 매니저

- Rush 는 공통 Git 레포지토리에서 많은 패키지를 빌드하고 게시하는 JavaScript 개발자의 삶을 더 쉽게 만들어주는 **모노레포 관리 도구**
- 마이크로소프트에서 관리하기 때문에 마이크로소프트의 많은 팀에서 사용
- 다른 모노레포 도구와 설정이나 동작 방식의 차이 존재
- 국내에는 레퍼런스가 많지 않음
- 많은 부분이 자동화 되어 있고, git 사용을 설정해야 캐싱 기능 사용 가능

## Rush 기능

### Ready for large repos

대규모 프로덕션 모노레포를 유지 관리하는 전문 엔지니어에 의해 구축되었고, 동료들에게 **최고의개발자 경험**을 제공하는 것이 목표

- 모노레포를 관리하기 위해 **병렬 빌드, 하위 집합 빌드, 증분 빌드 및 분산 빌드**를 제공

### Designed for large teams

레포지토리 정책을 통해 **새로운 패키지 종속성을 승인하기 전에 검토** 가능

- **레포지토리 전체에 일관된 종속성 버전을 적용** 가능
- 프로젝트는 **독립적인 버전 관리 전략을 사용하여 개별적으로 게시** 가능

### Reliable NPM installations

Rush 의 설치 모델은 **pnpm 을 활용하여 *phantom dependencies*를 제거**

- Lock 파일 탐색기 를 사용하여 **버전 충돌을 시각화하고 문제를 해결**

### Easy to administer

Rush 를 사용하면 **설치 및 빌드가 완전히 결정론적**으로 이루어지도록 보장

- Rush **엔진 버전도 git 브랜치에 따라 자동으로 설치**
- **사용자 지정 명령이나 옵션을 정의**하면 엄격하게 검증되고 Rush 의 명령줄 도움말의 일부로 문서화

### Turnkey solution

Rush 는 *설치, 링크, 빌드, 변경 로그 생성, 게시 및 버전 범프*가 가능한 통합 **오케스트레이터**

- 이러한 기능은 광범위한 **Rush Stack** 도구 및 사례와 통합되도록 설계

### Open Model

Rush 는 무료 오픈 소스

> [Rush 공식 사이트 링크](https://rushjs.io/)  
> [Rush Github 링크](https://github.com/microsoft/rushstack)
