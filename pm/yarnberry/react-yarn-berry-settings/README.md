# 보일러플레이트 Yarn Berry 로 변경할 수 있는 쉘 스크립트 작성
create-react-app 이나 create-next-app 의 패키지매니저를 yarn berry 로 변경하는 쉘 스크립트이며, 실행 시 넘겨받는 옵션에 따라 타입스크립트 템플릿으로도 생성이 가능

## 사용방법
```sh
./react-boiler-with-yarn-berry.sh -n <project_name> -l <react|next> [-t]
```
* `-n|--name` : 해당 옵션은 프로젝트명을 뒤에 넘겨받는다. (프로젝트명에 해당하는 디렉토리가 생성된다.)
* `-l|--lib` : 해당 옵션은 react 와 next 를 선택하는 옵션이다. (react|next 가 아닐 경우 실행되지 않는다.)
* `-t|--typescript` : 해당 옵션은 커맨드를 입력받지 않고 옵션만 있으면 typescript 템플릿으로 보일러플레이트가 생성된다.

## 참고자료
https://github.com/yeo311/create-react-app-with-yarn-berry