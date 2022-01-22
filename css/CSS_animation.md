# CSS 애니메이션

## animation
animation 적용을 위해 속성변화를 위한 키프레임생성
* `animation-name` : 애니메이션 이름
* `animation-duration` : 동작 시간
* `animation-iteration-count` : 반복 횟수 
* `animation-timing-function` : 속도 형태
* `animation-direction` : 애니메이션 방향
* `animation-play-state` : 진행 상태
* `animation-delay` : 지연시간
* `animation-fill-mode` : 애니메이션 종료 시 요소 위치

### 속도형태 속성
* `ease` : 시작/종료 부드럽게
* `linear` : 일정하게
* `ease-in` : 시작 천천히 
* `ease-out` : 종료 천천히
* `ease-in-out` : 천천히 시작하여 천천히 종료

### 방향지정 속성
* `normal` : 정방향
* `reverse` : to ~ from
* `alternate` : 처음 - 정방향 / 이 후 역방향
* `alternate-reverse` : 처음 - 역방향 / 이 후 정방향

### 애니메이션 진행 상태 속성
* `running` : 재생 중
* `paused` : 일시정지 중

### 애니메이션 끝났을 때 요소의 위치 속성
* `forwards` : 애니메이션 시작 전 - 기존 위치 대기 / 애니메이션 종료 후 종료 지점에서 멈춤
* `backwards` : 페이지 로딩 시 바로 애니메이션 시작 위치로 이동 / 종료 후 기존 위치로 바로 이동
* `both` : forwards + both 효과 모두 적용
* `none` : 애니메이션 시작 전 까지는 원래 위치에 고정 / 종료 후 그 위치로 재위치

### 키프레임
```css
@keyframes 애니메이션이름 {
    10% {}
    15% {}
}

/* 한줄.. */
animation: rotateWord 18s linear infinited 0s;
```


## transform
회전, 확대/축소, 기울임, 위치변경과 같은 변경 처리

### rotate 회전
각도의 범위 : 0~360도   
마이너스 각도는 시계 반대 방향으로 회전
```css
transform: rotate(45deg);
```

### scale 확대/축소
이미지(개체)의 크기를 조절   
비율을 지정하여 크기를 조절하고 n배로 확대 수치 지정
```css
transform: scale(1.5);
transform: scale(3); // 가로의 3배 확대 /[Y]로 사용시 세로 3배
```

### skew 기울임
주어진 각도로 기울 일 수 있음, X축은 좌/우로 Y축은 상/하로 기울이는 효과   
* `X축` : + 각도는 우측 / - 각도는 좌측
* `Y축` : + 각도는 아래쪽 / - 각도는 윗쪽

### translate 위치이동
위치를 이동시킬 수 있음. - 좌/우/상/하 위치 조정   
X축, Y축 지정 가능
```css
transform: translate(10px, 20px); transform: translate;
```

## transition
마우스를 클릭하거나 hover 상태에 변화를 주는 것

* `transition-property` : 색상이나 위치 등 변화의 대상 되는 css 속성 지정
* `transition-duration` : 변화할 때 거리는 시간 (초단위)
* `transition-timing-function` : 진행시간(속성값은 animation 속도 형태 속성과 통일)
* `transition-delay` : 변화되기 전 시간을 초단위로 지정

```css
/* 단축 CSS 문법 */
div {
    transition: <property> <duration> <timing-function> <delay>;
}
``` 