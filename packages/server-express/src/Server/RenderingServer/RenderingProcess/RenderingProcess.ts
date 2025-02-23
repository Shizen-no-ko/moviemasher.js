import {
  ApiCallback, RenderingOptions, RenderingResult
} from "@moviemasher/moviemasher.js"

export interface RenderingProcessInput {
  cacheDirectory: string
  /** directory to place output file(s) within */
  outputDirectory: string
  /** directory where file server creates user directories */
  filePrefix: string
  /** user directory name */
  defaultDirectory: string
  /** other allowed user directories relative to default - eg. shared */
  validDirectories: string[]
}

export interface RenderingCallback {
  callback?: ApiCallback
  id?: string
}

export interface RunResult {
  results: RenderingResult[]
}

export interface RenderingProcessOptions extends RenderingProcessInput, Partial<RenderingOptions>, RenderingCallback {}

export interface RenderingProcessArgs extends RenderingProcessInput, Required<RenderingOptions> {
  id?: string
}

export interface RenderingProcess {
  runPromise: ()=> Promise<RunResult>
}
