# [정규표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)
정규식은 텍스트에서 패턴을 찾고 바꿀 수 있는 고성능 도구이다!

## 정규식 생성 방법
* 정규 표현식 리터럴 사용 - `/.../`
* RegExp 객체 인스턴스 생성

## 옵션
* `i` - 대소문자 구분 x
* `g` - 패턴 모든 발생 일치
* `m` - 텍스트 여러 줄에서 일치 허용
* `y` - 고정 일치 사용
* `u` - 유니코드 이스케이프 사용 허용

## replace 예제 모음
* `string.replace(/\D/g,'');` - 모든 문자 제거
* `string.replace(/[^\d.-]/g, '');` - 모든 문자 제거(부동 소수점 제외)
