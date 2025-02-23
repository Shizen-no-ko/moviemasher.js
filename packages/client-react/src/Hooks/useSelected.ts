import React from "react"
import { Propertied } from "@moviemasher/moviemasher.js"

import { InspectorContext } from "../Contexts/InspectorContext"

export const useSelected = (propertied?: Propertied): Propertied | undefined => {
  if (propertied) return propertied

  const inspectorContext = React.useContext(InspectorContext)
  return inspectorContext.clip
}
