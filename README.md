<h1 align="middle">What To Do</h1>
<h3 align="middle">간편한 온라인 코스 신청 웹 서비스</h3>

<br/>

## 📝 작품소개
### **Demo**

![화면_기록_2022-06-10_오후_1 10 51](https://user-images.githubusercontent.com/72256238/184096030-9715e437-d42a-46f4-b4d8-fd81b62cb913.gif)


### **Interactive Web**

![화면_기록_2022-06-10_오후_1 15 04](https://user-images.githubusercontent.com/72256238/184095826-217d29d4-4acf-4a2c-8cf4-c67d4ba9a412.gif)

<br/>

## ⭐ 주요 기능
|[홈] 캠프 리스트|[홈] 커뮤니티 리스트|[상세] 캠프 상세|
|:---:|:---:|:---:|
|캠프 리스트 출력|커뮤니티 메인 카드 구성|커뮤니티 댓글 출력|
|최근 작성글 3개 이전 글은 블라인드 처리|태그 설정||
|캠프 시작일 출력|커뮤니티 댓글 출력||

<br/>

## 🔧 Stack

**Frontend(Web)**
- **Language** : TypeScript
- **Library & Framework** : React, Styled-Components, Axios, mobX
- **Design**: Figma
- **Deploy**: AWS(S3), github pages
<br />

## 👨‍💻 Role & Contribution
- React + typescript 기반의 웹 사이트 구현 
- styled-components을 활용한 컴포넌트 스타일링
- 백엔드 API 연동 로직 구현
- 병렬 개발 진행을 위한 (개발 시간 단축을 위한) Postman을 활용한 목서버 적용
- mobX를 활용한 컴포넌트 상태 관리 
<br />

<img src="https://user-images.githubusercontent.com/46489446/149169674-9838e704-1cfc-46b7-ac4a-495dd5597187.png" width="350" title="Cover Image" align="right">

## Git Flow
[참고]
- https://techblog.woowahan.com/2553/

## Git branch
- <code>main</code> : 제품으로 출시될 수 있는 브랜치
- <code>develop</code> : 다음 출시 버전을 개발하는 브랜치
- <code>feature</code> : 기능을 개발하는 브랜치\
-> <code>feature/sign</code>와 같이 <code>브랜치/기능</code> 형태로 브랜치를 생성한다.

## Commit Convention
- <code>feat</code> : 새로운 기능 개발
- <code>fix</code> : 버그 수정
- <code>refactor</code> : 기능 변경이 없는 코드 수정
- <code>test</code> : 테스트 코드 작성 및 수정
- <code>docs</code> : 문서 작성 및 수정
- <code>build</code> : 빌드 파일 작성 및 수정
- <code>style</code> : 스타일 변경(reformat, indent)
- <code>chore</code> : 단순한 작업


## PR Rules
- feature -> develop : merge commit
- develop -> main : merge commit
