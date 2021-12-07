import React from "react"
import { MasherAction, EventType } from "@moviemasher/moviemasher.js"

import { OnlyChildProps } from "../declarations"
import { useListeners } from "../Hooks/useListeners"

const RemoveButton: React.FunctionComponent<OnlyChildProps> = props => {
  const [disabled, setDisabled] = React.useState(true)
  const editorContext = useListeners({
    [EventType.Selection]: masher => { setDisabled(!masher.can(MasherAction.Remove)) }
  })
  const { children, ...rest } = props

  const { masher } = editorContext
  const onClick = () => {
    const { clip, effect } = masher.selection
    if (effect) masher.removeEffects(effect)
    else if (clip) masher.removeClips(clip)
  }

  const buttonOptions = { ...rest, onClick, disabled }
  return  React.cloneElement(React.Children.only(children), buttonOptions)
}

export { RemoveButton }
