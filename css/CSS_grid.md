# Grid
***2차원적***으로 아이템은 배치할 수 있도록 도와주는 속성 (x축 - column, y축 - row)   
> flex 로도 배치하는데 문제없지만(with wrap 속성) flex 와 grid 를 적절히 조합해서 사용하는 것이 유리

## grid 속성
* 부모 컨테이너에 grid 라고 지정해주면, grid 내의 포함되어있는 자식요소들은 모두 grid cell 로 변환
  - **grid** : grid의 전체적인 모양과 사이즈에 대해 템플릿을 지정해줄 수 있음.
    + _grid-template-columns_ : 가로축으로 총 몇개의 컬럼이 들어갈 수 있는지 각 각의 컬럼 사이즈가 얼마인지 지정해줄 수 있는 속성
    + _grid-template-rows_ : 세로축으로 총 몇개의 로우가 들어갈 수 있는지 각 각의 로우 사이즈가 얼마인지 지정해줄 수 있는 속성
    + _grid-template-areas_ : (columns + rows)
    + _grid-gap_
      + _grid--column-gap_
      + _grid--row-gap_

  - **grid cell** : 그리드 내에섯 크기, 셀 위치, 다수의 셀 포함을 지정해 줄 수 있음.
    + _grid-column-start_, _grid-column-end_ : 가로 셀 시작 및 끝 위치를 통해 보여줄 부분 지정
    + _grid-row-start_, _grid-row-end_ : 세로 셀 시작 및 끝 위치를 통해 보여줄 부분 지정
    + _grid-area_ : (column + row) 어떤 영역의 표시되기 원하는지 지정


## grid example
* [grid 기초](./examples/grid/grid.html)
* [grid-template-areas 활용](./examples/grid/image.html)
* [layout](./examples/grid/layout.html)


