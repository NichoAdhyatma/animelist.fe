import GithubProvider from "next-auth/providers/github";

export const authOption = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider(
      {
        clientId: process.env.GITHUB_CLIENT ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? ""
      }
    )
  ]
}