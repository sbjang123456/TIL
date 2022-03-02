# Yarn Berry
Yarn Berry 는 새로운 패키지 관리 시스템으로, yarn 패키지 매니저의 2번째 새로운 버전이다. (yarn v1 은 더이상 유지보수가 이루어지지 않음.)
* yarn Github : https://github.com/yarnpkg/yarn
* berry Github : https://github.com/yarnpkg/berry

Yarn Berry 는 기존의 NPM 시스템을 혁신적으로 개선

## NPM 의 문제점 (사실상 Yarn Berry 를 사용해야하는 이유)
1. 비효율적인 의존성 검색
2. 환경에 따라 달라지는 동작
3. 비효율적인 설치
4. `node_modules` 의 거대함과 depth 문제
5. **유령 의존성(Phantom Dependency)**
   - npm 과 yarn v1 은 node_modules 의 중복 설치를 막기위해 Hoisting 기법을 사용하는데, 이 때 우리는 package.json 에 명시하지않은 라이브러리를 사용할 수 있게 될 수도 있다. 
     + 개발 협업 간 큰 혼란이 야기될 수 있음.(명시되지 않은 라이브러리 사용으로 인한..)
     + package.json 에서 dependency 를 삭제 및 업데이트 할 때, 어떤 사이드 이펙트가 발생할지 모르기 떄문에 쉽게 라이브러리를 삭제할 수 없음.


## Yarn Berry 의 PnP (Plug'n'Play) 전략
* 패키지를 설치하게 되면 더 이상 node_modules 에 저장되지 않음(설치가 빨라짐!)
* `.yarn/cache` 폴더에 해당 의존성 정보가 저장됨.
* `.pnp.js` 에 의존성을 찾을 수 있는 정보가 기록됨.
* 각 의존성 파일들은 Zip 아카이브로 관리됨.
* 사용 용량이 획기적으로 줄어듬
* 기존 트리 형태의 `node_modules` 폴더를 순회할 필요가 없기 때문에 검색 속도가 증가함.
* `.yarn` 폴더를 원격 저장소에 업로드하는 Zero-install 방식을 사용하게 되면 `git clone` 후 추가적인 설치가 필요 없게 됨.(CI 배포 시간 줄어듬!)
* 호이스팅을 하지 않음(유령 의존성 문제 해결)
* 의존성 파일이 zip 으로 관리되기 때문에 의존성에 대한 변경점을 찾기 쉬움.

## Yarn Berry 적용





[comment]: <> (cra settings done 45.25s)

[comment]: <> (43.72 kB  build/static/js/main.295d092d.js)

[comment]: <> (1.79 kB   build/static/js/787.030662ab.chunk.js)

[comment]: <> (541 B     build/static/css/main.073c9b0a.css)

[comment]: <> (yarn cra build 12.41s)

[comment]: <> (43.72 kB  build/static/js/main.f64bf969.js)

[comment]: <> (1.79 kB   build/static/js/787.346f5d44.chunk.js)

[comment]: <> (541 B     build/static/css/main.073c9b0a.css)
