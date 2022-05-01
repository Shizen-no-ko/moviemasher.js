import { JsonObject, AndId, Size, Described } from "../declarations"
import { DefinitionObject, DefinitionObjects } from "../Base/Definition"
import { MashObject } from "../Edited/Mash/Mash"
import { ApiRequest, ApiResponse } from "./Api"
import { CastObject } from "../Edited/Cast/Cast"

export interface DataGetRequest extends ApiRequest, AndId {
}

export interface DataRetrieveResponse extends ApiResponse {
  described: Described[]
}


export interface DataMashDefinitions {
  mash: MashObject
  definitions: DefinitionObjects
}

export interface DataServerInit extends JsonObject {
  uuid: string
}

export interface DataRetrieve {
  partial?: boolean
}

export interface DataDefinitionPutRequest extends ApiRequest {
  definition: DefinitionObject
}

export interface DataDefinitionPutResponse extends ApiResponse, AndId {
}

export interface DataDefinitionRetrieveRequest extends ApiRequest, DataRetrieve {
  types: string[]
}
export interface DataDefinitionRetrieveResponse extends ApiResponse {
  definitions: DefinitionObjects
}

export interface DataDefinitionDeleteRequest extends ApiRequest, AndId {}
export interface DataDefinitionDeleteResponse extends ApiResponse {
  /**
   * If error is defined, a list of mash ids that reference the definition.
   */
  mashIds?: string[]
}

export interface DataCastRelations {
  mashes: MashObject[]
  definitions: DefinitionObjects
}
export interface DataCastDefaultRequest extends ApiRequest {}
export interface DataCastDefaultResponse extends ApiResponse, DataCastRelations {
  cast: CastObject
}

export interface DataMashDefaultRequest extends ApiRequest {}
export interface DataMashDefaultResponse extends ApiResponse, DataMashDefinitions {
  previewSize?: Size
}

export interface DataMashPutRequest extends ApiRequest {
  mash: MashObject
  definitionIds?: string[]
}
export interface DataMashPutResponse extends ApiResponse, AndId {}

export interface DataMashDeleteRequest extends ApiRequest, AndId {}
export interface DataMashDeleteResponse extends ApiResponse {
  /**
   * If error is defined, a list of cast ids that reference the mash.
   */
  castIds?: string[]
}

export interface DataCastPutRequest extends ApiRequest {
  mash: CastObject
}
export interface DataCastPutResponse extends ApiResponse, AndId { }

export interface DataCastDeleteRequest extends ApiRequest, AndId {}
export interface DataCastDeleteResponse extends ApiResponse {}

export interface DataMashGetResponse extends ApiResponse, DataMashDefinitions {}

export interface DataCastGetResponse extends DataCastDefaultResponse {}

export interface DataDefinitionGetRequest extends ApiRequest, AndId {}
export interface DataDefinitionGetResponse extends ApiResponse {
  definition: DefinitionObject
}


export interface DataMashRetrieveRequest extends ApiRequest, DataRetrieve { }
export interface DataCastRetrieveRequest extends ApiRequest, DataRetrieve { }
