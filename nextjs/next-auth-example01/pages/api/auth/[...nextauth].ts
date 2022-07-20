import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import {NextApiRequest} from "next";

export default NextAuth({
    // 로그인 인증 방식 설정하기
    providers: [
        // 이메일과 패스워드 입력으로 인증하겠다.
        Providers.Credentials({
            // 해당 인증 방식의 이름은 " " 이다.
            id: "email-password-credential",
            name: 'Credentials',
            type: 'credentials',

            // nextAuth에서 자동으로 Form을 만들어주는데
            // 해당 Form에 들어갈 내용을 입력한다. (이따가 화면을 보면 이해된다.)
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@test.com" },
                password: { label: "Password", type: "password" }
            },
            // Sign up 버튼을 누르면 들어오는 함수
            // 해당 부분에서 들어온 데이터를 가지고 인증을 진행하면 된다.
            // (지금은 무조건 인증되는 방식으로 처리되어있음)
          async authorize(credentials: Record<any, any>, req: NextApiRequest) {
              const email = credentials.email;
              const password = credentials.password;
              if(email === "test@test.com" && password === "test"){
                  return credentials;
              }
              throw new Error("아이디 혹은 패스워드가 틀립니다.");
            }
        })
    ],
    // 추가
    pages: {
        signIn: '/login',
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
        token.userId = 123;
        token.test = "test";
        return token;
    },
    async session(session: any, userOrToken: any) {
        session.user.userId = userOrToken.userId;
        session.user.test = userOrToken.test;
        return session
    }
  }

})