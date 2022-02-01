# Big-O 란!?
1. 알고리즘의 성능을 수학적으로 표현해주는 표기법.
2. 이것으로 알고리즘의 시간과 공간 복잡도를 표현할 수 있음.
3. 알고리즘의 실제 러닝타임을 표시하는 것이라기보다는 데이터나 사용자의 증가율에 따른 알고리즘의 성능을 예측하는 것이 목표이기 때문에 상수와 같은 숫자들은 모두 ***1*** 이 된다.

## 1. O(1) - constant time
입력데이터의 크기에 상관없이 언제나 일정한 시간이 걸리는 알고리즘
```c
F(int[] n) {
    return (n[0] == 0) ? true : false;
}
```
> 데이터가 증가해도 성능에 변함이 없다.

## 2. O(n) - linear time
입력데이터의 크기에 비례해서 처리시간이 걸리는 알고리즘
```c
F(int[] n) {
    for i = 0 to n.length
        print i
}
```
> 데이터가 증가함에 따라 비례해서 처리시간이 늘어남.

## 3. O(n<sup>2</sup>) - quadratic time

```c
F(int[] n) {
    for i = 0 to n.length
        for j = 0 to n.length
            print i + j;
}
```
n 을 돌리면서 n을 다시한번 돌림. 데이터가 커지면 커질수록 처리시간의 부담도 매우 커짐.

## 4. O(n<sup>m</sup>) - quadratic time

```c
F(int[] n, int[] m) {
    for i = 0 to n.length
        for j = 0 to m.length
            print i + j;
}
```
m을 n만큼 돌림. 데이터가 커지면 커질수록 처리시간의 부담도 매우 커짐. **O(n<sup>2</sup>)** 과 유사.   
*But, n이나 m의 크기에 따라 달라질 수 있음!!!!*

## 5. O(n<sup>3</sup>) - polynomial / cubic time
n의 제곱에 n을 한번 더 돌림!
```c
F(int[] n) {
    for i = 0 to n.length
        for j = 0 to n.length
            for j = 0 to n.length
                print i + j + k;
}
```

데이터가 늘어날 때마다 급격하게 처리시간이 늘어난다.

## 6. O(2<sup>n</sup>) - exponential time
* Fibonacci(피보나치)
> 1, 1, 2, 3, 5, 8 ...
* 재귀호출
```c
F(n, r) {
    if (n <= 0) return 0;
    else if (n == 1) return r[n] = 1;
    return r[n] = F(n - 1, r) + F(n - 2, r);
}
```
데이터에 증가에 따라 처리 시간이 가장 많이 늘어난다.

## 7. O(log n) - binary search
* 이진 검색
```c
F(k, arr, s, e) {
    if (s > e) return -1;
    m = (s + e) / 2;
    if (arr[m] == k) return m;
    else if (arr[m] > k) return F(k, arr, s, m - 1);
    else return F(k, arr, m + 1, e);
}
```
데이터가 증가해도 처리시간이 많이 늘지 않는다.

## 8. O(sqrt(n))
정사각형에 n을 모두 채운 후 맨 위에 한줄만 돌리는 알고리즘
* 제곱근

---
> **BigO 에서 상수는 과감히 버린다!!!**   
> * 실제 알고리즘의 처리시간을 계산하기위함이 아닌 장기적으로 데이터 증가함에 따른 처리시간의 증가율을 예측하기 위해 만들어진 표기법   
> * **(ex)** O(2n) -> O(n), O(n<sup>2</sup> + n<sup>2</sup>) -> O(n<sup>2</sup>)...
