# **async** vs **defer**

## head 내부의 script
head 내부에 script 를 포함하게 되면,   
사용자가 html 파일을 다운로드 받았을 때, 브라우저는 위에서 부터 아래로 한줄 한줄씩 분석해서 css와 병합한 뒤 dom 요소로 변환하게 된다.   
이 때, 한줄 한줄 parsing 하면서 내려가다가 script 태그가 보이면 js 파일을 서버에서 다운로드 받고, 실행한 뒤에 다시 html parsing 을 시작한다.
이렇게 되면 사용자가 웹사이트를 보는데까지 많은 시간이 소요될 수 있다.   

## body 끝의 script
위와 같은 상황을 방지하기위해 body 내부 가장 끝 부분에 script 태그를 포함시키는 방법이 있는데,   
이것은 브라우저가 html 을 다운받아서 parsing 한 뒤 페이지가 준비된 다음에 script 를 만나기 때문에 사용자는 좀 더 빨리 페이지 컨텐츠를 확인할 수 있다.   
하지만 해당 방법 또한, 해당 페이지가 javascript 에 의존적인 웹사이트라면 정상적인 페이지 컨텐츠를 확인하기까지(`html parsing -> js fetching -> js executing` 이 후) 더 오래 걸릴 수 있다는 것이다. 

## async, defer
 ### javascript 를 html에 포함할 때 사용하는 옵션
 ```html
 <script src="path" async></script>
 <script src="path" defer></script>
 ```

### head + async
브라우저가 html 을 다운로드 받아서 parsing 을 하다가 script(async) 를 만나면 병렬적으로 js 파일을 다운로드 받다가 (`parsing html + fetching js`) js파일 다운로드가 완료되면 html parsing 을 멈추고 js 를 실행한다.   
실행이 끝난 뒤, html parsing 을 마저 진행한다.   
body 끝에 script 태그를 포함시키는 것 보다는 fetching 이 병렬적으로 일어나기 때문에 다운로드 받는 시간을 절약할 수 있는 장점이 있지만,   
html 이 parsing 되기 전에 실행될 수 있기때문에 dom 요소를 조작하는 스크립트가 있다면 오류가 발생할 수 있고, js 가 실행되는 동안에는 html parsing 이 중지할 수 있기 때문에 사용자가 페이지 컨텐츠를 보는데 시간이 소요될 수 있다.   

*async 옵션으로 다수의 script 를 포함하게 되면 fetching 되는 시간에 따라 실행 순서가 변할 수 있다. (정의된 script 순서는 상관 x)*


### head + defer
async 속성과 마찬가지로 html parsing 을 진행하다가 script(defer) 를 만나면 병렬적으로 js 파일을 다운로드 받고, 다운로드가 완료되더라도 html 을 끝까지 parsing 한 뒤 js를 실행한다.   

*defer 옵션은 정의한 순서대로 스크립트가 실행된다.*

