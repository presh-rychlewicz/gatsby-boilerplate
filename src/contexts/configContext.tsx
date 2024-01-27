import React, { FC, PropsWithChildren, createContext, useContext } from "react"
import { config } from "../config"

export type ConfigContext = {
  translations: {
    downloadButton: string
  }

  pageTitles: {
    index: string
    404: string
  }
}

export const configContext = createContext<ConfigContext>({
  pageTitles: {
    index: "",
    404: "",
  },

  translations: {
    downloadButton: "",
  },
})

export const useConfigContext = () => useContext(configContext)

export const ConfigContextProvider: FC<PropsWithChildren> = ({ children }) => (
  <configContext.Provider value={config}>{children}</configContext.Provider>
)
