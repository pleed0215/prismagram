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

```js
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));
```

- api folder 밑에는 resolver가 아닌 js 파일을 두면 안된다.

# Prisma

many-to-may self relation
[Self relation] (https://www.prisma.io/docs/concepts/components/prisma-schema/relations#self-relations)

schema를 db에 반영하려면
prisma db push --preview-feature

schema 변경 시 typescript error가 나오는데, 이를 막기 위해서는
prisma generate 해줘야 한다.
