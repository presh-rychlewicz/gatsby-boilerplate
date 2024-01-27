import { Button, Stack } from "@mui/joy"
import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { useConfigContext } from "../contexts"

const IndexPage: React.FC<PageProps> = () => {
  const { translations } = useConfigContext()

  return (
    <Stack
      width="100%"
      height="100%"
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Button color="danger" onClick={() => null} size="lg" variant="solid">
        {translations.downloadButton}
      </Button>
    </Stack>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  const { pageTitles } = useConfigContext()

  return <title>{pageTitles.index}</title>
}
