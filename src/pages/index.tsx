import { Box, Button, Sheet, Stack, Typography } from "@mui/joy"
import { type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { useConfigContext } from "../contexts"

const IndexPage: React.FC<PageProps> = () => {
  const { translations } = useConfigContext()

  return (
    <Stack
      width="100%"
      height="100%"
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Sheet component={Stack} height="100%" width="100%"></Sheet>

      <Stack width="100%" height="100%" alignItems="flex-start" spacing={2}>
        <Typography level="h1">AAA</Typography>

        <Typography level="body-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          laoreet lacus, et mollis lectus. Quisque mattis pulvinar sem a
          vestibulum. Quisque pulvinar justo massa, sed lacinia ex vestibulum
          eu. Cras in massa tellus. Nullam eros dolor, dictum id dolor ornare,
          feugiat efficitur arcu.
        </Typography>
        <Button color="danger" onClick={() => null} size="lg" variant="solid">
          {translations.downloadButton}
        </Button>
      </Stack>
    </Stack>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  const { pageTitles } = useConfigContext()

  return <title>{pageTitles.index}</title>
}
