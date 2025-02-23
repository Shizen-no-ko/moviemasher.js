import { DefinitionType } from "../../Setup/Enums"
import { Errors } from "../../Setup/Errors"
import { Is } from "../../Utility/Is"
import { Definitions } from "../../Definitions"
import { Factories } from "../../Definitions/Factories"
import { VideoDefinitionClass } from "./VideoDefinitionClass"
import { Video, VideoDefinition, VideoDefinitionObject, VideoObject } from "./Video"

const videoDefinition = (object : VideoDefinitionObject) : VideoDefinition => {
  const { id } = object
  if (!(id && Is.populatedString(id))) throw Errors.id + JSON.stringify(object)

  if (Definitions.installed(id)) return <VideoDefinition> Definitions.fromId(id)

  return new VideoDefinitionClass(object)
}

const videoDefinitionFromId = (id : string) : VideoDefinition => {
  return videoDefinition({ id })
}

const videoInstance = (object : VideoObject) : Video => {
  const definition = videoDefinition(object)
  const instance = definition.instanceFromObject(object)
  return instance
}

const videoFromId = (id : string) : Video => {
  return videoInstance({ id })
}

const videoInitialize = () : void => {}

const videoInstall = (object : VideoDefinitionObject) : VideoDefinition => {
  const { id } = object
  if (!(id && Is.populatedString(id))) throw Errors.id + JSON.stringify(object)

  Definitions.uninstall(id)
  const instance = videoDefinition(object)
  instance.retain = true
  Definitions.install(instance)
  return instance
}


const VideoFactoryImplementation = {
  install: videoInstall,
  definition: videoDefinition,
  definitionFromId: videoDefinitionFromId,
  fromId: videoFromId,
  initialize: videoInitialize,
  instance: videoInstance,
}

Factories[DefinitionType.Video] = VideoFactoryImplementation

export {
  videoInstall,
  videoDefinition,
  videoDefinitionFromId,
  VideoFactoryImplementation,
  videoFromId,
  videoInitialize,
  videoInstance,
}
