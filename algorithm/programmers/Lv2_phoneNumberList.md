# [전화번호 목록](https://programmers.co.kr/learn/courses/30/lessons/42577)

```java
class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        for (String phone : phone_book) {
            for (String phoneSub : phone_book) {                
                if (!phone.equals(phoneSub) && phoneSub.startsWith(phone)) {
                    answer = false;
                    break;
                }
            }
            if (!answer) break;
        }
        return answer;
    }
}
```
---