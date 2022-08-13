# 정규표현식 (RegExp)

정규식 , Regular Expression

## 역할

-문자 검색
-문자 대체
-문자 추출

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
//생성자
new RegExp('표현','옵션')
new RegExp('[a-z]','gi')
//리터럴 
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const str = `
010-1234-5678
thesecon@gmail.com
http://www.naver.com
Theasdasdqwetheasd
abbcccdddd
`

// const regexp = new RegExp('the','gi')
// // console.log(regexp)
const regexp = /the/gi
console.log(str.match(regexp))
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부 (Boolean) 반환
match |	`문자열.match(정규식)`|일치하는 문자열의 배열(Array) 반환
replace |	`문자열.replace(정규식,대체문자)`	| 일치하는 문자열을 대체하고 대체된 문자열(String) 반환

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치
i | 영어 대소문자 구분 않고 일치
m | 여러 줄 일치

## 패턴(표현)
패턴 | 설명
--|--
^ab | 줄 (Line) 시작에 있는 ab 와 일치
ab$ | 줄(Line) 끝에 있는 ab 와 일치
. | 임의의 한 문자와 일치  
a\|b | a또는 b와 일치  
ab? | b가 없거나 b와 일치
{3} |3개 연속 일치
{3,} |3개이상 연속 일치
{3,5} |3개 이상 5개이하(3~5개)연속 일치
[abc] | a또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 대문자)
[A-Z] | A 부터 Z 사이의 문자 구간에 일치 (영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개문자(Word , 대소영문 52 개 + 숫자 10개 + _ )에일치
\b | 63개 문자에 일치하지 않는 문자 경계
\d | 숫자에 일치
\s | 공백에 일치
(?=) |앞쪽일치
(?<=) | 뒤쪽 일치