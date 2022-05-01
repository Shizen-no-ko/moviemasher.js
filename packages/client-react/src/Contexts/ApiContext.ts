import React from 'react'
import { ApiServersResponse, JsonObject, ServerType, StringSetter } from '@moviemasher/moviemasher.js'

export interface ApiContextInterface {
  enabled: ServerType[]
  servers: ApiServersResponse
  endpointPromise: (id: string, body?: JsonObject, setStatus?: StringSetter) => Promise<any>
}

export const ApiContextDefault: ApiContextInterface = {
  enabled: [],
  servers: {},
  endpointPromise: () => Promise.resolve({})
}

export const ApiContext = React.createContext(ApiContextDefault)
