import { Stack } from "@mui/joy"
import { HeadFC, Link, PageProps } from "gatsby"
import * as React from "react"
import { useConfigContext } from "../contexts"

const NotFoundPage: React.FC<PageProps> = () => (
  <Stack alignItems="center" justifyContent="center" width="100%" height="100%">
    <h1>Page not found</h1>
    <p>Sorry 😔, we couldn’t find what you were looking for.</p>
    <Link to="/">Go home</Link>.
  </Stack>
)

export default NotFoundPage

export const Head: HeadFC = () => {
  const { pageTitles } = useConfigContext()

  return <title>{pageTitles[404]}</title>
}
