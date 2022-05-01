import { AudibleSource, Constrained, Value, StartOptions } from "../../declarations"
import { Preloader } from "../../Preloader/Preloader"
import { ClipDefinition, ClipDefinitionObject, Clip, ClipObject } from "../Clip/Clip"

export interface AudibleObject extends ClipObject {
  gain?: Value
}

export interface Audible extends Clip {
  definition : AudibleDefinition
  gain: number
  gainPairs: number[][]
  audibleSource(preloader: Preloader): AudibleSource | undefined
  muted: boolean
  startOptions(seconds: number, quantize: number): StartOptions
}

export interface AudibleDefinitionObject extends ClipDefinitionObject {
  audio? : string
  source? : string
  stream?: boolean
  url?: string
  waveform? : string
}

export interface AudibleDefinition extends ClipDefinition {
  audible: boolean
  audibleSource(preloader: Preloader): AudibleSource | undefined
  loops: boolean
  stream: boolean
  urlAudible: string
  waveform?: string
}

export type AudibleClass = Constrained<Audible>
export type AudibleDefinitionClass = Constrained<AudibleDefinition>

export interface AudibleContent {
  track: number
  audible?: Audible
}

export type AudibleContents = AudibleContent[]
