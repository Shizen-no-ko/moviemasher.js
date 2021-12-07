import { DefinitionBase } from "../../Base/Definition"
import { Effect, EffectObject } from "./Effect"
import { ModularDefinitionMixin } from "../../Mixin/Modular/ModularDefinitionMixin"
import { Any } from "../../declarations"
import { Definitions } from "../../Definitions/Definitions"
import { EffectClass } from "./EffectInstance"
import { DataType, DefinitionType } from "../../Setup/Enums"
import { Property } from "../../Setup/Property"

const EffectDefinitionWithModular = ModularDefinitionMixin(DefinitionBase)
class EffectDefinitionClass extends EffectDefinitionWithModular {
  constructor(...args : Any[]) {
    super(...args)

    this.properties.push(new Property({ name: "label", type: DataType.String, value: "" }))

    Definitions.install(this)
  }

  get instance() : Effect { return this.instanceFromObject(this.instanceObject) }

  instanceFromObject(object : EffectObject) : Effect {
    return new EffectClass({ ...this.instanceObject, ...object })
  }

  type = DefinitionType.Effect
}

export { EffectDefinitionClass }
