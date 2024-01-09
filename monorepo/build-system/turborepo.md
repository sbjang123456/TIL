# Turborepo

**Turborepo** 는 자바스크립트 및 타입스크립트 코드베이스를 위한 **고성능 빌드 시스템**

### Turborepo 특징

- Next.js 를 만든 **_Vercel 이라는 회사에서 인수_** 한 빌드 시스템 도구
- 모노레포에서만 사용하는 것은 아니며, 모노레포의 경우에는 npm, yarn classic, yarn berry, pnpm 의 워크스페이스와 함께 사용 가능하지만, **_pnpm 을 권장_**
- 모노레포 환경에서도 쉽고 빠르게 개발할 수 있는 빌드 환경을 제공하는 것이 목표
- 프로젝트의 루트 혹은 각 워크스페이스에 **turbo.json** 이라는 파일을 이용해서 캐싱과 태스크 오케스트레이션을 설정

### Turborepo 장점

- 사용자가 빌드한 내용을 기억하고 이미 계산한 내용은 스킵 (태스크 설정 만으로 기본값이 캐싱)
- **_타임스탬프_**가 아닌 **_파일 내용_** 을 보고 빌드해야 할 내용을 파악
- 쉬고 있는 CPU 를 낭비하지 않고, 모든 코어를 최대로 사용해서 병렬로 실행
- 원격 빌드 캐시를 팀원 및 **_CI/CD_** 와 공유하여 빌드 속도를 향상
- 작업 간의 관계를 정의한 다음 **Turborepo** 가 빌드할 항목과 시기를 최적화

## Turborepo 기능

### Running Tasks

- `turbo run test`
- `turbo run test --filter=shared`

### Task Dependencies

- `turbo run lint test build`

### Code Generation

- `turbo gen workspace`

### Remote Caching

- `turbo login`
- `turbo link`

> [Turborepo 공식 사이트 링크](https://turbo.build/repo)  
> [Turborepo Github 링크](https://github.com/vercel/turbo)