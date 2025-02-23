import { Errors } from "../../Setup/Errors"
import { Is } from "../../Utility/Is"
import { roundWithMethod } from "../../Utility/Round"
import { Time, TimeRange } from "./Time"

const timeGreatestCommonDenominator = (fps1 : number, fps2 : number) : number => {
  let a = fps1
  let b = fps2
  let t = 0
  while (b !== 0) {
    t = b
    b = a % b
    a = t
  }
  return a
}

const timeLowestCommonMultiplier = (a : number, b : number) : number => (
  (a * b) / timeGreatestCommonDenominator(a, b)
)

export const timeEqualizeRates = (time1 : Time, time2 : Time, rounding = '') : Time[] => {
  if (time1.fps === time2.fps) return [time1, time2]

  const gcf = timeLowestCommonMultiplier(time1.fps, time2.fps)
  return [
    time1.scale(gcf, rounding),
    time2.scale(gcf, rounding)
  ]
}

export class TimeClass implements Time {
  frame : number

  fps : number

  constructor(frame = 0, fps = 1) {
    if (!Is.integer(frame) || frame < 0) {
      // console.trace(Errors.frame, frame)
      throw Errors.frame + frame
    }
    if (!Is.integer(fps) || fps < 1) throw Errors.fps

    this.frame = frame
    this.fps = fps
  }

  add(time : Time) : Time {
    const [time1, time2] = timeEqualizeRates(this, time)
    return new TimeClass(time1.frame + time2.frame, time1.fps)
  }

  addFrame(frames : number) : Time {
    const time = this.copy
    time.frame += frames
    return time
  }

  get copy() : Time { return new TimeClass(this.frame, this.fps) }

  get description() : string { return `${this.frame}@${this.fps}` }

  divide(number : number, rounding = '') : Time {
    if (!Is.number(number)) throw Errors.argument + 'divide'
    return new TimeClass(roundWithMethod(Number(this.frame) / number, rounding), this.fps)
  }

  equalsTime(time : Time) : boolean {
    const [time1, time2] = timeEqualizeRates(this, time)
    return time1.frame === time2.frame
  }

  isRange = false

  get lengthSeconds(): number { return 0 }

  min(time : Time) : Time {
    const [time1, time2] = timeEqualizeRates(this, time)
    return new TimeClass(Math.min(time1.frame, time2.frame), time1.fps)
  }

  scale(fps : number, rounding = '') : Time {
    if (this.fps === fps) return this

    const frame = (Number(this.frame) / Number(this.fps)) * Number(fps)
    return new TimeClass(roundWithMethod(frame, rounding), fps)
  }

  scaleToFps(fps : number) : Time { return this.scaleToTime(new TimeClass(0, fps)) }

  scaleToTime(time : Time) : Time {
    return timeEqualizeRates(this, time)[0]
  }
  get seconds() : number { return Number(this.frame) / Number(this.fps) }

  get startTime(): Time { return this }

  subtract(time : Time) : Time {
    const [time1, time2] = timeEqualizeRates(this, time)

    let subtracted = time2.frame
    if (subtracted > time1.frame) {
      subtracted -= subtracted - time1.frame
    }
    return new TimeClass(time1.frame - subtracted, time1.fps)
  }

  subtractFrames(frames : number) : Time {
    const time = this.copy
    time.frame -= frames
    return time
  }

  get timeRange(): TimeRange { throw Errors.timeRange }

  toString() : string { return `[${this.description}]` }

  withFrame(frame : number) : Time {
    const time = this.copy
    time.frame = frame
    return time
  }
}
