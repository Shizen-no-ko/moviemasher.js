import { ClipDefinitionObject } from "../../Mixin/Clip/Clip"
import {
  Modular,
  ModularDefinition,
  ModularDefinitionObject,
  ModularObject
} from "../../Mixin/Modular/Modular"
import { VisibleDefinition } from "../../Mixin/Visible/Visible"
import { Transformable, TransformableObject } from "../../Mixin/Transformable/Transformable"
import { GenericFactory } from "../../declarations"

type ThemeObject = ModularObject & TransformableObject

interface Theme extends Modular, Transformable {
  definition : ThemeDefinition
}

type ThemeDefinitionObject = ModularDefinitionObject & ClipDefinitionObject

interface ThemeDefinition extends ModularDefinition, VisibleDefinition {
  instance : Theme
  instanceFromObject(object : ThemeObject) : Theme
}

/**
 * @category Factory
 */
interface ThemeFactory extends GenericFactory<Theme, ThemeObject, ThemeDefinition, ThemeDefinitionObject> {}

export { Theme, ThemeDefinition, ThemeDefinitionObject, ThemeFactory, ThemeObject }
