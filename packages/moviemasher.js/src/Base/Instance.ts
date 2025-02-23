import { Any, Constrained, UnknownObject } from "../declarations"
import { DefinitionType } from "../Setup/Enums"
import { Errors } from "../Setup/Errors"
import { Is } from "../Utility/Is"
import { Definition } from "./Definition"
import { Time } from "../Helpers/Time/Time"
import { idGenerate } from "../Utility/Id"
import { Property } from "../Setup/Property"
import { Definitions } from "../Definitions/Definitions"
import { PropertiedClass } from "./Propertied"

interface InstanceObject extends UnknownObject {
  definition?: Definition
  definitionId?: string
  label?: string
}

class InstanceBase extends PropertiedClass {
  constructor(...args: Any[]) {
    super(...args)
    const [object] = args
    if (!Is.populatedObject(object)) throw Errors.invalid.object + 'InstanceBase'

    const { definitionId = '', definition, label } = object as InstanceObject
    const definitionObject = definition || Definitions.fromId(definitionId)
    if (!definitionObject) throw Errors.invalid.definition.object

    this.definition = definitionObject
    if (label && label !== this.definition.label) this._label = label

    this.properties.forEach(property => {
      const propertyName = property.name
      const propertyValue = object[propertyName]
      if (typeof propertyValue === "undefined") return

      this[propertyName] = property.type.coerce(propertyValue)
    })
  }

  get copy() : Instance {
    return this.definition.instanceFromObject(this.toJSON())
  }

  definition : Definition

  get definitionId(): string { return this.definition.id }

  get definitions() : Definition[] { return [this.definition] }

  definitionTime(quantize : number, time : Time) : Time {
    return time.scaleToFps(quantize) // may have fps higher than quantize and time.fps
  }

  protected _id? : string
  get id() : string { return this._id ||= idGenerate() }

  protected _label? : string

  get label() : string { return this._label || this.definition.label || this.id }

  set label(value : string) { this._label = value }

  get properties(): Property[] { return this.definition.properties }

  property(key: string): Property | undefined { return this.definition.property(key) }

  get propertyNames() : string[] {
    return this.properties.map(property => property.name)
  }

  toJSON(): UnknownObject {
    const { definitionId, type } = this
    const object: UnknownObject = { definitionId, type }
    this.propertyNames.forEach(name => { object[name] = this.value(name) })
    return object
  }

  get type() : DefinitionType { return this.definition.type }
}

interface Instance extends InstanceBase {}

type InstanceClass = Constrained<InstanceBase>

export { Instance, InstanceClass, InstanceBase, InstanceObject }
