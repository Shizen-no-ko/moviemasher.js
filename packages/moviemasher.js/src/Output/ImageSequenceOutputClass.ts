import { AVType, OutputType } from "../Setup/Enums"
import { AudioOutputClass } from "./AudioOutputClass"
import { ImageSequenceOutput, ImageSequenceOutputArgs } from "./Output"

class ImageSequenceOutputClass extends AudioOutputClass implements ImageSequenceOutput {
  declare args: ImageSequenceOutputArgs

  avType = AVType.Video

  get outputCover(): boolean { return !!this.args.commandOutput.cover }

  outputType = OutputType.ImageSequence
}

export { ImageSequenceOutputClass }
