import React, { FC, ReactNode } from "react"
import { ConfigContextProvider } from "./src/contexts"
import { GlobalStyles, Stack } from "@mui/joy"
import { Header } from "./src/components"

type WrapRootElementProps = {
  element: ReactNode
}

export const wrapRootElement: FC<WrapRootElementProps> = ({ element }) => (
  <>
    <ConfigContextProvider>{element}</ConfigContextProvider>

    <GlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        html: {
          // border: "2px solid blue",
          color: "#232129",
          fontFamily: "-apple-system, Roboto, sans-serif, serif",
        },
        body: {
          // border: "1px solid red",
          margin: 0,
        },
        "#___gatsby": {
          // border: "3px solid orange",
        },
      }}
    />
  </>
)

type WrapPageElementProps = {
  element: ReactNode
}

export const wrapPageElement: FC<WrapPageElementProps> = ({ element }) => {
  return (
    <>
      <Stack padding={3} width="100vw" height="100vh" spacing={2}>
        <Header />

        {element}
      </Stack>
    </>
  )
}
