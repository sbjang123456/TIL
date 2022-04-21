# Nextjs
따로 복잡한 설정없이 SSR , SEO , Tyepscript 등 생산에 필요한 많은 기능을 제공하는 React **서버사이드 렌더링 프레임워크**.

## 사용 장점
* 서버에서 자바스크립트를 로딩함으로 클라이언트 측에서 자바스크립트 로딩 시간 감소
* 서버측에서 자바스크립트, html, css 만들어 컨텐츠를 직접 업로드 함으로 검색엔진에 게시글이 걸릴 수 있으며, meta 태그를 자유롭게 추가함으로 검색엔진최적화(seo) 에 용이

## 구조

### _document.tsx
* meta 태그 정의 or 전체 페이지에 관여하는 컴포넌트
* static 한 상황에만 사용됨
* `_app.tsx` 다음에 실행됨
```tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          // 모든페이지에 아래 메타태그가 head에 들어감 
          // 루트파일이기에 가능한 적은 코드만 넣어야함
          <meta property="custom" content="123123" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
 
```

### _app.tsx
* 최초로 실행됨
* 모든 페이지에 영향을 미침
* 페이지 업데이트 전 원하는 방식으로 페이지 업데이트할 수 있는 통로
* 내부에 컴포넌트가 있다면 전부 실행하고 html 의 body 로 구성
```tsx
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### Link 
next 에서 a 태그 대신 페이지간 이동에 사용됨
```js
<Link href="/blog">
    <a>Blog</a>
</Link>
```

### Head
next/head로 부터 Head 컴포넌트를 받아 모든 컴포넌트에서 사용할 수 있다.
* 페이지 제목(title) 커스텀
* meta 태그 변경
```tsx
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>새로 만들어진 타이틀 입니다</title>
    </Head>
    <div>...</div>
  </div>
);
```


### getStaticProps
빌드 시 고정되는 값, 빌드 이후 값 변경 불가하나 `revalidate` 옵션으로 초(seconds) 주기로 변경 가능하다.
```tsx
function Blog({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    },
    // revalidate: 20 // seconds
  };
}

export default Blog;
```

### getStaticPaths
* 빌드 타임 때, 정적으로 렌더링할 경로 설정
* 이곳에 정의하지 않은 하위 경로는 접근해도 페이지가 안뜨지만, `fallback` 옵션을 통해 동적으로 접근할 수 있게도 가능하다.
```tsx
// This function gets called at build time
export async function getStaticPaths() {
  return {
    //빌드 타임 때 아래 정의한  /dyna/1,  /dyna/2, ... /dyna/동적인값 경로만 pre렌더링.
    paths: [
      { params: { dynamic: 1 } },
      { params: { dynmic: 2 } }
      ......
      { params: { dynmic: 동적인값 } }
    ],
    // 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 지 여부.
    fallback: true, // 'block'
  }
}
```


### getServerSideProps
각 요청에 따라 서버로부터 데이터를 가져온다.
```tsx
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async context => {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default Page;
```