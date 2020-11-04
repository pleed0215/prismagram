- graphql yoga에는 express 서버가 내장되어 있다.

```js
server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server start with httP://127.0.0.1:${PORT}.`)
);
```

express가 내장되어 있기 때문이 이렇게 middleware를 사용해주면 된다.

### 2. setting up graphql like pro

- graphql 세팅할 때 .. 지금 server.ts에서 한것처럼 말고 다른 방법으로 사용할 수 있다.
- graphql-tools, merge-graphql-schemas 패키지를 이용.
