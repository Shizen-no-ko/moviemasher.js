import { TrackType } from "../../Setup/Enums"
import { AudioDefinition, Audio } from "./Audio"
import { InstanceBase } from "../../Base/Instance"
import { AudibleMixin } from "../../Mixin/Audible/AudibleMixin"
import { ClipMixin } from "../../Mixin/Clip/ClipMixin"
import { AudibleFileMixin } from "../../Mixin/AudibleFile/AudibleFileMixin"

const AudioWithClip = ClipMixin(InstanceBase)
const AudioWithAudible = AudibleMixin(AudioWithClip)
const AudioWithAudibleFile = AudibleFileMixin(AudioWithAudible)
export class AudioClass extends AudioWithAudibleFile implements Audio {
  declare definition : AudioDefinition

  trackType = TrackType.Audio
}
