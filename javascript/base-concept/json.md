# JSON 정리
## **HTTP(Hypertext Transfer Protocol)** 
웹사이트와 웹 어플리케이션과 같은 클라이언트가 서버와 통신할 수 있는지를 정의한 것이며, HyperText 를 주고받을 수 있는 프로토콜 중 하나이다.
* 클라이언트가 서버에게 데이터를 *reqeust* -> 서버는 그에 맞는 데이터를 *response*
*

## **AJAX(Asynchronous Javascript And XML)**
http 를 이용해서 서버에서 데이터를 요청해서 받아올 수 있는 방법이다.
* **XHR(XMLHttpRequest)** 
    - 브라우저 api 에서 제공하는 오브젝트 중 하나로 간단하게 서버에서 데이터를 요청하고 받아올 수 있다.
* fetch api
    - 최근 브라우저에서 추가된 fetch() api 는 좀 더 간편하게 데이터를 주고 받을 수 있다. (*but IE 지원 X*)

## XML(eXtensible Markup Language)
html 같은 markup language 로 데이터를 표현할 수 있는 언어이다.   
xml 을 사용하면 불필요한 태그들이 포함되서 파일의 사이즈가 커지고 가독성이 떨어져서 많이 사용하지 않게 되었고,
*요새는 서버와 데이터를 주고받을 때 주로 **JSON(javascript object notation)** 을 사용한다.

## JSON
* 데이터를 주고받을때 사용하는 가장 간단한 포맷
* 가벼우며, 텍스트 기반
* key, value 로 구성 (javascript Object 타입 형태)
* 직렬화 및 데이터 전송에 사용
    - 직렬화(serialize) : 프로그램의 object에 담긴 데이터를 어떤 외부 파일에 write 및 전송하는 것(object to json)
    - 역직렬화(deserialize) :  어떤 외부 파일의 데이터를 프로그램 내의 object로 read 해오는 것(json to object)
* 프로그래밍 언어에 상관없이 사용 가능

1. **Object to JSON** - `JSON.stringify(obj)`
    - object 를 json 형태의 string 으로 변환
    - *object 내의 함수는 포함되지 않고 변환됨!!*
    - stringify 의 두번째 매개변수 ***replacer callback***
        + 콜백함수는 key, value 의 매개변수로 구성되어있음.
        + value 를 리턴해야함!
        + 특정 키나 값에 따라 커스텀 변환할 때 유용

2. **JSON to Object** - `JSON.parse(jsonString)`
    - json string 형태를 object 형태로 변환
    - key 와 value 형태의 오브젝트를 반환하되, value 는 string 형태
    - parse 의 두번째 매개변수 ***reviver callback***
        + 콜백함수는 key, value 의 매개변수로 구성되어있음.
        + value 를 리턴해야함!
        + 특정 키나 값에 따라 커스텀 변환할 때 유용

---
JSON 관련 유용한 사이트
* [JSON 데이터 비교 사이트](http://www.jsondiff.com/) - 두개의 json 데이터를 비교할 수 있음!! 매우 유용할것으로 보임.
* [JSON Formatting 사이트](https://jsonbeautifier.org/) - 마구잡이로 난잡하게 되어있는 json 데이터의 formatting 을 할 수 있음. 비슷한 사이트 매우 많고, 요새 개발자모드에서 이쁘게 잘나와서 가끔 쓸 것 같음!!
* [JSON Parser](https://jsonparser.org/) - JSON 을 파싱 해줌! (배열형태일 때 보기 편함!)
* [JSON Validator](https://tools.learningcontainer.com/json-validator/) - JSON 유효성 검사. 생각보다 json 가공에 실패하는 경우가 있는데, 이 때 정말 안찾아짐.. 매우 유용할듯!
