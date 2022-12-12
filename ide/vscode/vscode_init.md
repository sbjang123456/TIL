# VSCode 시작하기

Microsoft 의 **Visual Studio Code** 는 MIT 라이센스로 오픈소스 이다.  
보통 jetbrains 사의 webstorm 을 쓰던사람들은 비용이 들지 않는 이유로 많이 넘어왔던 것 같다.

---
## VSCode 단축키
* 개발툴 단축키 
  - **Command Palette** (<kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>) : Visual Studio Code에 실행가능한 모든 명령어를 마우스없이 키보드로 실행할 수 있는 명령어(검색으로 인해 명령이 실행 및 단축키를 확인할 수 있다.)
  - **Quick Open** (<kbd>Command</kbd> + <kbd>P</kbd>) : 파일을 빠르게 검색하고 이동해서 오픈할 수 있는 기능.
  - **User Settings** (<kbd>Command</kbd> + <kbd>,</kbd>) : 개발환경의 설정창. settings.json 을 오픈할 수 있음.
  - **Toggle Sidebar** (<kbd>Command</kbd> + <kbd>B</kbd>) : 좌측 익스플로러 창을 열고 닫을 수 있는 단축키
  - **Toggle Terminal** (<kbd>Control</kbd> + <kbd>`</kbd>) : 하단 터미널 창을 열고 닫을 수 있는 단축키
  - **Keyboard Shortcuts** (<kbd>Command</kbd> + <kbd>K</kbd> + <kbd>S</kbd>) : VSCode의 단축키를 확인할 수 있는 창을 오픈
    + [맥용 단축키 모음](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    + [윈도우용 단축키 모음](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* 편집 단축키(코딩용)
  - **파일 시작/끝으로 이동** (<kbd>Command</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd>) : 파일의 가장 위와 아래로 이동
  - **라인 시작/끝으로 이동** (<kbd>Command</kbd> + <kbd>←</kbd> / <kbd>→</kbd>) : 라인의 시작 및 끝으로 이동
  - **단어 이동(Move Word)** (<kbd>Option</kbd> + <kbd>←</kbd> / <kbd>→</kbd>) : 단어별로 이동
  - **단어 선택(Select Word)** (<kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd> / <kbd>→</kbd>) : 단어별로 선택
  - **라인 복사(Copy Line)** (<kbd>Command</kbd> + <kbd>C</kbd>) : 원하는 라인에서 해당 단축키를 통해 라인 복사
  - **라인 잘라내기(Cut Line)** (<kbd>Command</kbd> + <kbd>X</kbd>) : 원하는 라인에서 해당 단축키를 통해 라인 잘라내기
  - **라인 위/아래로 이동** (<kbd>Option</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd>) : 원하는 라인에서 해당 단축키를 통해 라인 원하는 위치로 이동 (*선택한 블럭 또한 해당 단축키를 통해 사용 가능*)
  - **라인 위/아래로 복사** (<kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd>) : 원하는 라인에서 해당 단축키를 통해 해당 라인을 복사 후 위 또는 아래로 붙여넣기 할 수 있다.(*선택한 블럭 또한 해당 단축키를 통해 사용 가능*)
  - **아래로 라인 삽입(Insert line below)** (<kbd>Command</kbd> + <kbd>Enter</kbd>) : 라인에서 아무 위치에서나 해당 단축키를 통해 아래에 라인을 새로 추가할 수 있음!
  - **다중 선택(Multi Selection)** (<kbd>Command</kbd> + <kbd>D</kbd>) : 한 파일안에서 여러 번 반복되어져서 사용되는 단어가 있다면 해당하는 단어 위에서 해당 단축키를 사용하면 자동으로 모든 반복된 단어들이 자동으로 선택되어져 있기 때문에 동시에 수정할 수 있다.
  - **마지막 커서 실행취소(Undo last Cursor)** (<kbd>Command</kbd> + <kbd>U</kbd>) : 이 전에 있었던 커서로 이동함
  - **커서 삽입(insert cursor)** (<kbd>Option</kbd> + <kbd>mouse click</kbd>) : 다중 커서 삽입으로 일괄 편집을 하기 위한 기능
  - **다중 커서 삽입(Column selection)** (<kbd>Shift</kbd> + <kbd>Option</kbd> + <kbd>drag mouse</kbd>)
  - **선택 박스 커서 삽입(Current selection)** (<kbd>Shift</kbd> + <kbd>Option</kbd> + <kbd>I</kbd>) : 선택한 블록의 각 라인 끝 부분에 커서가 삽입됨.

---
## Extension(플러그인)

기본적으로 처음 시작할 때 설치 플러그인들이다.

* ESLint
* Prettier - Code formatter
* Git Graph
* Git History
* GitLens
* Tabnine
* Doxygen Documentation Generator
* Material Theme
* Material Icon Theme
* Indent Rainbow
* auto rename tag
* css peek
* HTML CSS Support
* Live Server
* Reactjs code snippets
* Auto Import

### ESLint

코드의 오류나 버그, 스타일 등을 점검하는 도구가 린트(Lint) 혹은 린터(Linter)라고 부른다.
즉, 린트는 코드의 포맷팅과 품질관리 도구이다.

### Prettier - Code formatter

Prettier 는 팀원간 소스 코드 포맷팅을 일치시킬 수 있다는 장점이 있다.

1. File > Preferences > Settings ( 키보드 command + , )
2. **Default Formatter** 검색 > **Prittier - Code formatter** 선택
3. **editor format on save** 검색 > Fomat On Save **체크**
4. **json** 검색 > Edit in setting.json 클릭 > editor.formatOnSave true 확인

> 뭔가 Prettier 가 작동을 안할 때, 해당 프로젝트에서 Prettier: Prettier Path 를 설정해줘야되는 것 같다. (*이 부분은 좀 더 확인이 필요!!*)

### Git Graph
Webstorm 의 git log 나 sourceTree 처럼 git 을 막대 형태로 볼 수 있게해주는 플러그인 이다.   
시각적으로 부담없이 볼 수 있다.    

![img.png](img/git_graph_sample.png)

* Git 에 대한 명령은 거의 터미널로 진행하고 있어서 시각적인 흐름을 볼 때 사용하면 좋을 것 같다.

### Git History
각 파일에 대한 깃 히스토리를 확인 할 수 있다. (해당 파일이 어느 커밋에 포함되어있는지 확인할 수 있는 것)

* 탐색기에서 파일 우클릭 후 Git: View File History 를 클릭하거나 파일 클릭 후 키보드 **option + H**   
![img.png](img/git_history_sample1.png)

* 우측 상단에 버튼을 클릭하거나 키보드 **option + H**   
![img.png](img/git_history_sample2.png)

**History 확인 가능!**   
![img.png](img/git_history_sample3.png)

### GitLens
개인적으로 가장 핫 꿀 플러그인 중 하나라고 생각된다.
* 상단에 GitLens 툴바가 추가된다.   
![img.png](img/git_lens_sample1.png)
* 마우스 오버 시 해당라인의 커밋 코멘트를 알 수 있다.
    * 빠르게 커밋한 담당자(범인)를 찾아낼 수 있다.
    * 커밋메세지를 확인함으로써 해당 라인에서 바로 전에 무엇을 작업했는지 알 수 있다.   
![img.png](img/git_lens_sample2.png)
* 뒤로 및 앞으로 버튼으로 파일 기록을 손쉽게 볼 수 있다.   
    * diff 기능으로 보고있는 버전과 그 직전버전을 diff 로 볼 수 있다.   
![img.png](img/git_lens_sample3.png)

### Tabnine
이건 웹스톰 때부터 쓰던건데, 내가 이전에 썼던 명령어를 예측해서 code assist 해주는 플러그인 이다.   
필수적인 플러그인은 아닌 것 같지만, vscode 에도 있길래 설치해봤다.

### Kite
Tabnine 과 비슷한 플러그인으로 강력한 AI를 기반으로 자동완성으로 매우아주굉장히 효율적으로 어시스트 해주는 플러그인이다. 다양한 언어를 지원하고 있으며 각 개발툴에 맞게 플러그인을 설치해서 사용할 수 있다.

### Doxygen Documentation Generator
주석 자동 생성기로 함수명 위에서 `/**` 엔터 치면 자동으로 생성 해준다.   
아직 사용은 안해봤지만, webstorm 에서처럼 vscode 가 주석이 이쁘게 생기는게 아니라면 상당히 도움이 되는 플러그인이 될 것 같다!!

### Material Theme
VSCode 의 여러 테마를 선택할 수 있음

### Material Icon Theme 
탐색기의 파일 아이콘이 변경됨(그냥 이쁨)

### Indent Rainbow
들여쓰기(탭) 된 부분이 하이라이트됨

### Auto Rename Tag
html 태그에서 앞에 태그를 바꾸면 뒤에 태그도 자동으로 변경된다.(웹스톰은 원래 됨..)

### CSS Peek
html 태그 에서 css class 명을 찾아가주는 플러그인 (웹스톰은 원래 됨..)

### HTML CSS Support
css class 명 코드 어시스트 기능 제공

### Live Server
hot reload 지원(저장하면 자동반영)

### Reactjs code snippets
여러 키워드를 통해 리액트 컴포넌트 초기틀 기타 등등 작성 가능 (플러그인 내 트리거 참조)

### Auto Import
자동 임포트(딱봐도 편함)

### Settings Sync
모든 셋팅을 자동으로 동기화해주는 유용한 익스텐션이며, 내가 설정한 셋팅들을 github 계정에 저장할 수 있다.

### Import const
라이브러리를 가져올때 해당 라이브러리의 용량을 직관적으로 알 수 있다.

### Multiple cursor case preserve
다중 선택 커서를 통한 편집 시 대소문자를 기억해서 보다 효율적으로 편집할 수 있도록 도와주는 익스텐션이다.

### CodeSnap
블로그 등에 소스코드를 복붙할 때 보다 이쁘게 캡쳐해주는 익스텐션.   
캡처를 원하는 파일을 오픈한 뒤 커맨드 팔렛을 이용해서 codesnap을 실행하면 우측 분할화면으로 캡처할 수 있는 창이 표출됨. (소스 코드를 선택한 뒤 마우스 우클릭 컨텍스트 메뉴에 있는 codesnap 을 실행해서 캡처를 실행할 수도 있음.)

### TODO Highlight
TODO 주석의 색상을 다르게 표출해주는 익스텐션


---
## 기타 설정

### oh-my-zsh를 사용할 때 터미널 글꼴이 깨진다면
1. "SourceCodePro+Powerline+Awesome Regular" 글꼴을 받아 설치한다. ([다운로드 링크](https://github.com/Falkor/dotfiles/raw/master/fonts/SourceCodePro%2BPowerline%2BAwesome%2BRegular.ttf))
2. Visual Studio Code 설정에서 terminal.integrated.fontFamily 항목에 'SourceCodePro+Powerline+Awesome Regular'를 넣는다. (작은 따옴표를 포함해야 한다!)
> 참고 자료 - https://gonigoni.kr/posts/vscode-oh-my-zsh/

### Auto Save
Webstorm 의 자동저장이 너무나 적응되어버렸다면 vscode 도 자동저장 설정을 할 수 있다.
1. 설정 (**command + ,**) 
2. 검색어 **auto save**
3. Files: Auto Save 선택상자에서 **onFocusChange** or **onWindowChange** 선택

### settings.json
* comment(주석) 색상 변경
    ```json
    "editor.tokenColorCustomizations": {
        "comments": "#ffc2c2"
    },
    ```

* block 단위 괄호에 색깔을 줌
    ```json
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": "active"
    ```

* postcss 에서 Emmet 사용을 위한 설정
    ```json
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "postcss": "css"
    },
    "emmet.syntaxProfiles": {
        "postcss": "css"
    },
    ```

---
## 신규 꿀 기능
* sticky scroll : vscode 설정 창에서 sticky 로 검색 후 `Editor > Sticky Scroll: Enabled` 체크! (편집기에서 스크롤하더라도 내가 보고 있는 코드의 함수 선언부(이름, 매개변수)가 맨 윗줄에 보여진다.)
