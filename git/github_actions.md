# Github Actions
CI/CD 를 지원하는 깃허브 내의 기능으로, 별도의 외부툴(jenkins...) 없이 자동화 프로세스를 만들어주도록 도와주는 기능

## 개념
깃허브 액션은 특정한 이벤트가 발생했을 때 우리가 원하는 일을 자동으로 수행할 수 있도록 도와주는 도구

* Events : ex) merge, push, issue open .. 기타 등등
* Workflows : 이벤트 발생 시 어떤 일을 수행할 것인지에 대한 자동화 플로우 수행 방법 표기
* Jobs : 워크플로우 내의 수행 단위, 다수의 job 생성 및 순차 수행 가능
  - step : job 내의 순차 수행 작성 가능(쉘 스크립트 사용)
* Actions : 깃허브에서 제공하는 액션 기능을 이용해서 간단하게 작업 가능( ex: checkout, setup node ...)
* Runners : job을 실행하는 VM or Docker Container 개념 (독립적인 환경에서 실행됨)

## 사용법
깃허브 폴더(저장소) 내의 yml 파일 생성   
`.github/workflows/workflow.yml`

