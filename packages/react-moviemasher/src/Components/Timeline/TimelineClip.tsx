import React from 'react'
import { UnknownObject, Clip, pixelFromFrame } from '@moviemasher/moviemasher.js'

import { DragClipObject } from '../../declarations'
import { DragTypeSuffix } from '../../Setup/Constants'
import { EditorContext } from '../Editor/EditorContext'
import { useMashScale } from './useMashScale'

interface TimelineClipProps extends UnknownObject {
  clip: Clip
  children: React.ReactElement
  selectClass?: string
  prevClipEnd: number
  label?: string
}

const TimelineClip: React.FC<TimelineClipProps> = props => {
  const ref = React.useRef<HTMLDivElement>(null)
  const editorContext = React.useContext(EditorContext)
  const [clickOffset, setClickOffset] = React.useState(0)
  const scale = useMashScale()

  const { selectedClipIdentifier } = editorContext
  const { label: labelVar, clip, prevClipEnd, selectClass, children, ...rest } = props
  const { label, identifier, type, frame, frames } = clip

  const kid = React.Children.only(children)
  if (!React.isValidElement(kid)) throw `TimelineClip expects single child element`

  const classNamesState = () => {
    const classes = []
    const { className } = kid.props
    if (className) classes.push(className)
    if (selectClass && identifier === selectedClipIdentifier) {
      classes.push(selectClass)
    }
    return classes.join(' ')
  }

  const onMouseDown = (event: React.MouseEvent) => {
    const { current } = ref
    if (!current) return

    const rect = current.getBoundingClientRect()
    const { left } = rect
    const { clientX } = event
    setClickOffset(clientX - left)
    editorContext.masher?.selectClip(clip)
  }

  const onDragStart: React.DragEventHandler = event => {
    onMouseDown(event)
    const data = { offset: clickOffset }
    const json = JSON.stringify(data)
    const { dataTransfer } = event
    dataTransfer.effectAllowed = 'move'
    dataTransfer.setData(type + DragTypeSuffix, json)
  }

  const width = pixelFromFrame(frames, scale, 'floor')
  const style: UnknownObject = { width }
  if (labelVar) style[labelVar] = `'${label.replace("'", "\\'")}'`
  if (prevClipEnd > -1) {
    style.marginLeft = pixelFromFrame(frame - prevClipEnd, scale, 'floor')
  }

  const clipProps = {
    ...kid.props,
    style,
    className: classNamesState(),
    onMouseDown,
    onDragStart,
    draggable: true,
    ref,
  }

  return React.cloneElement(kid, clipProps)
}

export { TimelineClip }
