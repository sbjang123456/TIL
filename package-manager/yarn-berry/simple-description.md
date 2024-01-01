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
1. yarn 설치
    ```zsh
    npm i -g yarn
    ```

2. 프로젝트 경로 이동 및 berry version 설정 (yarn version 은 프로젝트마다 설정됨!)
    ```zsh
    cd project_name
    yarn set version berry
    yarn -v
    > 3.x.x
    ```

3. 기존 관련 파일(`node_modules`) 수정
  - `.npmrc` 파일을 `.yarnrc.yml` 으로 수정
  - `package-lock.json` 파일이 존재한다면 제거
  - `node_modules` 폴더 제거 (yarn berry 에서는 기존의 의존성 패키지 트리 구조를 사용하지 않음!)
  - `package.json` 파일에 작성된 `eslintConfig`는 더 이상 사용되지 않음. (`.eslintrc.json` 파일에서 따로 관리됨!)

4. **[선택사항]** PnP 방식을 사용하지 않으려면, `.yarnrc.yml` 파일에 다음 내용을 추가(해당 옵션을 작성하면 zip 아카이브로 관리되는 것이 아닌 기존의 `node_modules` 방식으로 관리됨)
    ```yml
    nodeLinker: node-modules   
    ```

5. 의존성 설치 (기존 yarn 을 사용할 때와 같음)
    ```zsh
    yarn
    ```

6. `.gitignore` 파일 수정
    ```zsh
    ### yarn ###
    # Zero-Install 사용 시
    .yarn/*
    !.yarn/cache
    !.yarn/patches
    !.yarn/plugins
    !.yarn/releases
    !.yarn/sdks
    !.yarn/versions

    # Zero-Install 미사용 시
    .yarn/*
    !.yarn/patches
    !.yarn/releases
    !.yarn/plugins
    !.yarn/sdks
    !.yarn/versions
    .pnp.*
    ```

* node 를 실행시킬 땐, 기존의 `node` 로 스크립트를 시작하는것이 아니고, `yarn node` 로 스크립트를 실행시켜야함!

## 개인적인 생각
짧은 내용 정리 및 간단한 샘플 소스 작성으로 yarn berry 의 장점을 모두 알 수는 없지만, 상대적으로 쉽게 적용할 수 있어서 가능하다면 프로젝트에 빨리 적용해보고 싶은 생각이 있다.
확실히 기존 node_modules 에 대한 단점이 너무나 명확하기 때문이 아닐까?   
한방에 매끄럽게 npm 에서 berry 로 적용되는 것 같진 않다. 물론 내가 잘 못해서 그런거겠지..(test 코드 중 `toBeInTheDocument` 에서 자꾸 에러남..ㅠ.ㅠ)   
무엇보다 속도적인 측면도 있겠지만 나에게 zero install 이 너무나 매력적으로 다가온다!  
berry 또한 출시한지 2년이 넘었기 때문에 이제 관련 커뮤니티도 많이 생성되서 부담없이 사용할 수 있을 것 같다!   
나머지는 써보면서 부딪혀보는걸로~   
화이팅!


> ### 참조 블로그 
> * [Toss 기술 블로그](https://toss.tech/article/node-modules-and-yarn-berry)
> * [원티드 기술 블로그](https://medium.com/wantedjobs/yarn-berry-%EC%A0%81%EC%9A%A9%EA%B8%B0-1-e4347be5987)




