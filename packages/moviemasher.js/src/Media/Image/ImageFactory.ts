import { DefinitionType } from "../../Setup/Enums"
import { Errors } from "../../Setup/Errors"
import { Is } from "../../Utility/Is"
import { Definitions } from "../../Definitions"
import { Factories } from "../../Definitions/Factories"
import { ImageDefinitionClass } from "./ImageDefinitionClass"
import { Image, ImageDefinition, ImageDefinitionObject, ImageObject } from "./Image"

export const imageDefinition = (object : ImageDefinitionObject) : ImageDefinition => {
  const { id } = object
  if (!id) throw Errors.id + JSON.stringify(object)

  if (Definitions.installed(id)) return <ImageDefinition> Definitions.fromId(id)

  return new ImageDefinitionClass(object)
}

export const imageDefinitionFromId = (id : string) : ImageDefinition => {
  return imageDefinition({ id })
}

export const imageInstance = (object : ImageObject) : Image => {
  const definition = imageDefinition(object)
  const instance = definition.instanceFromObject(object)
  return instance
}

export const imageFromId = (id : string) : Image => {
  return imageInstance({ id })
}

export const imageInitialize = () : void => {}

/**
 * @internal
 */
export const imageInstall = (object: ImageDefinitionObject): ImageDefinition => {
  const { id } = object
  if (!(id && Is.populatedString(id))) throw Errors.id

  Definitions.uninstall(id)
  const instance = imageDefinition(object)
  instance.retain = true
  Definitions.install(instance)
  return instance
}


export const ImageFactoryImplementation = {
  install: imageInstall,
  definition: imageDefinition,
  definitionFromId: imageDefinitionFromId,
  fromId: imageFromId,
  initialize: imageInitialize,
  instance: imageInstance,
}

Factories[DefinitionType.Image] = ImageFactoryImplementation
