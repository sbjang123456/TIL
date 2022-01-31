# [주식가격](https://programmers.co.kr/learn/courses/30/lessons/42584?language=java)

```java
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.Stack;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Iterator;

class Solution {
    public int[] solution(int[] prices) {
        int[] answer = {};
        Stack<Integer> tempAnswer = new Stack<Integer>();
        
        Queue<Integer> queue = new LinkedList<>(Arrays.stream(prices).boxed().collect(Collectors.toList()));

        while(!queue.isEmpty()) {
            int currentPrice = queue.poll();
            Iterator<Integer> iterator = queue.iterator();
            int down = 0;
            while(iterator.hasNext()) {
                int comparePrice = iterator.next();
                down++;
                if (comparePrice < currentPrice) {
                    break;
                }
            }
            tempAnswer.push(down);
        }

        return tempAnswer.stream().mapToInt(Integer::intValue).toArray();
    }
}
```
---