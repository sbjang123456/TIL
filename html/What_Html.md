#HTML 은 무엇인가
html(Hyper Text Markup Language) 은 웹을 이루는 가장 기본적인 기본 블럭.
보통 css + javascript 로 함께 구성됨.

## 구조
태그의 시작과 끝으로 구성됨
```html
<!-- ex -->
<title> 제목 테스트 </title>
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Hi</title>
    </head>
    <body>
        <h1>Heading1</h1>
        <h2>heading2</h2>
        <button>Click Me!</button>
    </body>
</html>
```
태그들을 이용해서 구조적으로 작성됨   
html 태그 내의 head 와 body 파트가 있는데, head 태그에는 상세 설명이 들어가고 body 에는 사용자에게 보여지는 태그들로 이루어져 있다.


##W3C (World Wide Web Consortium)
웹의 표준화를 추친하는 곳 - 모든 브라우저(크롬, 파이어폭스, 엣지, 오페라 등)가 표준에 맞춰 개발되어져야함.

##MDN
모질라에서 추진해서 만든 웹사이트로 지원가능한 정의된 태그들을 확인 하는 곳
* 각 태그에 대한 설명 및 예제를 볼 수 있음.
* 발생하는 이벤트를 확인할 수 있음.
* 브라우저 호환 가능성 확인

## 웹사이트 구조 (Document and website structure)
document body 내부에도 어느정도 구조를 나눠서 작성해야함.   
* header
* navigation bar
* main content
* sidebar
* footer

### Box Model
> 웹 사이트를 박스 형태로 볼 수 있어야함! React 와 같은 컴포넌트 라이브러리는 가장 작은 단위의 박스부터 개발하게됨!

* BOX (박스 구성)
  * header
  * footer
  * nav
  * aside
  * main
  * section
  * article
  * div
  * span
  * form
* ITEM (사용자에게 보여지는 아이템)
  * a
  * button
  * input
  * label
  * img
  * video
  * audio
  * map
  * canvas
  * table

### block & inline
* block
  * 한줄에 하나
* inline
  * 공간이 허용되면 옆에 다른 태그가 위치할 수 있음

### Tag & element
* tag
  * opening tag + end tag
* element
  * tag + content

### Attributes
태그 내부의 속성

