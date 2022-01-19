# CSS display 와 position
* Block-level
  * div - `기본적으로 한줄에 한개씩 나옴`
* Inline-level
  * span -
    `span 은 width 와 height 가 있어도 안에 내용이 없으면 영여기 잡히지 않음.`

## display
* block - 한줄에 하나
* inline - 컨텐츠 자체만의 영역
* inline-block - 한줄에 여러개이지만 상자단위로 표현

## position
* static(default) - html 에 정의된 순서대로 브라우저에서 보여줌
* relative - 원래 있어야되는 자리에서 상대적으로 위치결정
* absolute - 아이템과 가장 가까이에 있는 박스 안에서 위치가 위치결정
* fixed - window(최상위 박스) 안에서 위치결정
* sticky - 원래 있어야 되는 자리에 있으면서 스크롤링 되어도 없어지지 않고 원래 있던자리에 그대로 위치하는 것

