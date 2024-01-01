# 기타 설정

## oh-my-zsh를 사용할 때 터미널 글꼴이 깨진다면

1. "SourceCodePro+Powerline+Awesome Regular" 글꼴을 받아 설치한다. ([다운로드 링크](https://github.com/Falkor/dotfiles/raw/master/fonts/SourceCodePro%2BPowerline%2BAwesome%2BRegular.ttf))
2. Visual Studio Code 설정에서 terminal.integrated.fontFamily 항목에 'SourceCodePro+Powerline+Awesome Regular'를 넣는다. (작은 따옴표를 포함해야 한다!)
   > 참고 자료 - https://gonigoni.kr/posts/vscode-oh-my-zsh/

## Auto Save

Webstorm 의 자동저장이 너무나 적응되어버렸다면 vscode 도 자동저장 설정을 할 수 있다.

1. 설정 (**command + ,**)
2. 검색어 **auto save**
3. Files: Auto Save 선택상자에서 **onFocusChange** or **onWindowChange** 선택

## settings.json

- comment(주석) 색상 변경

  ```json
  "editor.tokenColorCustomizations": {
      "comments": "#ffc2c2"
  },
  ```

- block 단위 괄호에 색깔을 줌

  ```json
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active"
  ```

- postcss 에서 Emmet 사용을 위한 설정
  ```json
  "emmet.includeLanguages": {
      "javascript": "javascriptreact",
      "postcss": "css"
  },
  "emmet.syntaxProfiles": {
      "postcss": "css"
  },
  ```

## 신규 꿀 기능

- sticky scroll : vscode 설정 창에서 sticky 로 검색 후 `Editor > Sticky Scroll: Enabled` 체크! (편집기에서 스크롤하더라도 내가 보고 있는 코드의 함수 선언부(이름, 매개변수)가 맨 윗줄에 보여진다.)
