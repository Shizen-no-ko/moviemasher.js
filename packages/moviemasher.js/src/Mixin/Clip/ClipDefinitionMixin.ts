import { Property } from "../../Setup/Property"
import { Any, ObjectUnknown } from "../../declarations"
import { DataType } from "../../Setup/Enums"
import { DefinitionClass } from "../../Base/Definition"
import { Default } from "../../Setup/Default"
import { ClipDefinition, ClipDefinitionClass } from "./Clip"
import { timeFromSeconds } from "../../Helpers/Time/TimeUtilities"

const ClipPropertyObjects = [
  { name: "frame", type: DataType.Frame, value: 0 },
  { name: "frames", type: DataType.Frame, value: -1 },
  { name: "label", type: DataType.String, value: "" },
]

function ClipDefinitionMixin<T extends DefinitionClass>(Base: T) : ClipDefinitionClass & T {
  return class extends Base implements ClipDefinition {
    constructor(...args : Any[]) {
      super(...args)
      const properties = ClipPropertyObjects.map(object => new Property(object))
      this.properties.push(...properties)
    }

    audible = false

    // TODO: determine if this is needed!
    // used by theme, image, frame, transition
    private _duration? : number

    get duration() : number {
      if (!this._duration) {
        const object = Default.definition as ObjectUnknown
        const value = object ? object[this.type] : undefined
        this._duration = value ? Number(value.duration) : 0
      }
      return this._duration
    }

    set duration(value : number) { this._duration = value }

    frames(quantize: number): number {
      if (!this.duration) return 0

      return timeFromSeconds(this.duration, quantize, 'floor').frame
    }

    streamable = false

    visible = false
  }
}

export { ClipDefinitionMixin }
