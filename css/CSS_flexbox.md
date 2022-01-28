# Flexbox
박스와 아이템들을 행/열로 자유자재로 배치시켜줄 수 있는 속성(수평이 될 요소들의 Container에 적용)   
> 예전에는 float, position, table 을 통해 배치하였음. - 정렬에 있어서 까다로운 부분들이 많았음!!   
> 원래 float 는 이미지와 텍스틑 배치하기 위함.

## flexbox 속성
* Flexbox 는 컨테이너/박스에 적용되는 속성값들이 존재
* 또한 각각의 아이템들에 적용할 수 있는 속성값들이 존재

### Container(Box) 에 적용할 수 있는 속성값들
* `display` - flex container 정의
  * **_flex_** - block 특성의 flex container 정의
  * **_inline-flex_** - inline 특성의 flex container 정의
* `flex-direction` - 전체적인 방향 (아이템의 주축을 설정)
  * **_row_** - 왼쪽에서 오른쪽 방향
  * **_row-reverse_** - 오른쪽에서 왼쪽
  * **_column_** - 위에서 아래로
  * **_column-reverse_** - 아래에서 위로
* `flex-wrap` - 아이템의 줄바꿈 여부 설정
  * **_nowrap_** (default) - 줄바꿈 안함
  * **_wrap_** - 아이템이 꽉 찼을 때 다음줄로 바꿈
* `flex-flow`
  * [flex-direction] + [flex-wrap]
  * ex) row wrap
* `justify-content` - 중심축에서 아이템들을 배치하는 속성
  * **_flex-start_** - 중심 축 배치
  * **_flex-end_** - 중심 축 반대(교차축) 배치
  * **_center_** - 중앙 배치
  * **_space-around_** - 박스를 둘러싸는 공간을 줌. (끝과 끝보단 각 사이가 더 넓음)
  * **_space-evenly_** - 같은 간격을 넣어 줌.
  * **_space-between_** - 양 끝은 붙도록 배치 후 중간 사이는 일정한 간격을 줌.
* `align-items` - 반대축에서 아이템들을 수직적으로 배치하는 속성 
  * **_stretch_** - 컨테이너의 반대 축을 채우기 위해 아이템을 늘림
  * **_flex-start_** - 아이템을 각 줄의 시작점으로 정렬
  * **_flex-end_** - 아이템을 각 줄의 끝점으로 정렬
  * **_center_** - 아이템을 가운데 정렬
  * **_baseline_** - 안의 내용이 균등하게 보여질 수 있도록 문자 베이스라인에 맞춰서 아이템을 배치 
* `align-content` - 반대축에서 정렬방법을 설정
  * **_stretch_** - 컨테이너의 반대 축을 채우기 위해 아이템을 늘림
  * **_flex-start_** - 아이템을 각 줄의 시작점으로 정렬
  * **_flex-end_** - 아이템을 각 줄의 끝점으로 정렬
  * **_center_** - 아이템을 가운데 정렬
  * **_space-between_** - 시작 아이템은 시작점에, 마지막 아이템은 끝점에 정렬되고 나머지 아이템 사이에 고르게 정렬됨
  * **_space-around_** - 아이템을 균등한 여백을 포함하여 정렬
* `gap` - 내부의 children 요소들이 일정한 간격으로 공간을 주는 속성
  * gap: **_[상하좌우]_** | **_[상하] [좌우]_**
  * ex1) gap: 10px - 상하좌우 10px의 공간을 줌. 
  * ex2) gap: 20px 10px - 상하 20px, 좌우 10px 의 공간을 줌. 


### item 에 적용되는 속성값들
* `order` - Flex Item의 순서를 설정 (HTML 구조와 상관없이 순서를 변경할 수 있음.)
* `flex-grow` (default: 0) - 아이템 증가 너비 비율 설정
* `flex-shrink` (default: 1) - 아이템이 감소 너비 비율 설정
* `flex-basis` (default: auto) - 아이템의 기본 너비 설정
  * 값이 auto일 경우 width, height 등의 속성으로 아이템 너비 설정
  * 단위 값이 주어질 경우 설정할 수 없습니다.
* `flex` - 아이템의 너비(증가, 감소, 기본)를 설정하는 단축 속성
  * [flex-grow] + [flex-shrink] + [flex-basis] (default: 0)
  * flex의 단축속성 중 flex-basis 의 디폴트 값은 0. (개별적으로 사용했을때 디폴트는 auto)
* `align-self` - 아이템별로 아이템들을 정렬 (align-items 보다 우선적용됨)
  * `auto` - 컨테이너의 align-items 속성을 상속받음
  * `stretch` - 컨테이너의 반대(교차) 축을 채우기 위해 아이템을 늘림
  * `flex-start` - 아이템을 각 줄의 시작점으로 정렬
  * `flex-end` - 아이템을 각 줄의 끝점으로 정렬
  * `center` - 아이템을 가운데 정렬
  * `baseline` - 안의 내용이 균등하게 보여질 수 있도록 문자 베이스라인에 맞춰서 아이템을 배치


## 중심축(main axis) 과 반대축/교차축(cross axis)
정렬 기준에 따라 중심축과 반대축이 결정됨.   
> 아이템들이 왼쪽에서 오른쪽으로 정렬되면 수평축 = 중심축, 수직축 = 반대축   
> 아이템들이 위에서 아래로 정렬되면 수직축 = 중심축, 수평축 = 반대축


