# [Internationalization(Intl)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl)
**Internationalization(Intl) - i18n** API 는 브라우저 언어에 맞는 문자비교, 숫자, 시간, 날짜 비교를 제공하는 ECMAScript 국제화 API 이다.   

## 장점
1. 순수 자바스크립트로 브라우저 언어에 맞게 표현 가능
2. 브라우저 호환성

## 사용방법 

### 1) 숫자 포맷팅
```js
const numbers = 1234567;
const formatter1 = new Intl.NumberFormat('ko');
formatter1.format(numbers); // 1,234,567

const formatter2 = new Intl.NumberFormat('ko', { notation: 'compact' });
formatter2.format(numbers); // 123만

const formatter3 = new Intl.NumberFormat('en', { notation: 'compact' });
formatter3.format(numbers); // 1.2M

const formatter4 = new Intl.NumberFormat('en', { 
  notation: 'compact',
  compactDisplay: 'long',
});
formatter4.format(numbers); // 1.2 million

// 사용자가 브라우저에서 설정한 언어로 설정
const formatter5 = new Intl.NumberFormat(navigator.language, { 
  notation: 'compact',
  compactDisplay: 'long',
});
formatter5.format(numbers); // 123만
```

### 2) 통화 포맷팅
```js
const price = 10000;

const formatter1 = new Intl.NumberFormat('ko', { 
  style: 'currency',
  currency: 'krw',
  notation: 'compact',
});
formatter1.format(price); // ₩1만

const formatter2 = new Intl.NumberFormat('ko', { 
  style: 'currency',
  currency: 'krw',
});
formatter2.format(price); // ₩10,000

const formatter3 = new Intl.NumberFormat('en-US', { 
  style: 'currency',
  currency: 'usd',
});
formatter3.format(price); // $10,000.00

const formatter4 = new Intl.NumberFormat('en-US', { 
  style: 'currency',
  currency: 'usd',
  notation: 'compact',
});
formatter4.format(price); // $10K
```

### 3) 상대시간 포맷팅
```js
const formatter1 = new Intl.RelativeTimeFormat('en');
formatter1.format(1, 'day'); // in 1 day
formatter1.format(2, 'day'); // in 2 days
formatter1.format(-1, 'day'); // 1 day ago
formatter1.format(-2, 'day'); // 2 days ago

const formatter2 = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
formatter2.format(1, 'day'); // tomorrow
formatter2.format(2, 'day'); // in 2 days
formatter2.format(-1, 'day'); // yesterday
formatter2.format(-2, 'day'); // 2 days ago

const formatter3 = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });
formatter3.format(1, 'day'); // 내일
formatter3.format(2, 'day'); // 모레
formatter3.format(-1, 'day'); // 어제
formatter3.format(-2, 'day'); // 그저께

formatter3.format(1, 'hour'); // 1시간 후
formatter3.format(1, 'second'); // 1초 후

const today = new Date();
const startDt = new Date(2018, 3, 20);
const diffTime = Math.ceil((startDt - today) / (1000 * 60 * 60 * 24));
formatter3.format(diffTime, 'day'); // 1,700일 전
```
>  * [timeago.js](https://github.com/hustcc/timeago.js/blob/master/README.md)
>    - 상대적인 시간차이를 계산해주는 오픈소스 라이브러리
>    - i18n 지원
>    - 상대적인 시간이 얼마나 오래되었냐에 따라 다르게 표시됨.


### 4) 날짜/시간 포맷팅
```js
const date = new Date(2018, 3, 20);
new Intl.DateTimeFormat('en-US').format(date); // 4/20/2018
new Intl.DateTimeFormat('ko').format(date); // 2018. 4. 20.
date.toLocaleDateString('ko'); // 2018. 4. 20.
date.toLocaleDateString('ko', {
  dateStyle: 'full',
  timeStyle: 'long',
}); // 2018년 4월 20일 금요일 오전 12시 0분 0초 GMT+9

date.toLocaleDateString('ko', {
  minute: 'numeric',
  hour: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  weekday: 'short',
}); // 2018. 4. 20. (금) 오전 12:00
```

