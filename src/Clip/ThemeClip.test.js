import { ClipType } from "../Types"
import { ThemeClip } from "./ThemeClip"
import { TimeRangeFactory } from "../Factory/TimeRangeFactory"
import { ThemeMedia } from "../Media"
import { Module } from "../Module"
import { UrlsByType } from "../Utilities"
import { FilterMedia } from "../Media/FilterMedia"
import { TimeFactory } from "../Factory/TimeFactory"
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })
const expectContext = context => {
  const { canvas } = context
  const dataUrl = canvas.toDataURL()
  const image = dataUrl.substring('data:image/png;base64,'.length)
  expect(image).toMatchImageSnapshot()
}

describe("ThemeClip", () => {
  const media = new ThemeMedia(Module.themeById("com.moviemasher.theme.text"))
  const clip_object = { media: media }
  const clip = new ThemeClip(clip_object)
  
  test("constructor", () => {
    expect(clip.type).toEqual(ClipType.theme)
  })
  describe("copy", () => {
    test("returns expected clip", () => {
      const expected = {}
      expect(clip.copy).not.toEqual(expected)
    })
  })

  describe("timeRangeRelative", () => {
    test("returns expected range", () => {
      const time = TimeFactory.create()
      const range = TimeRangeFactory.createFromTime(time, clip.frames)
      expect(clip.timeRangeRelative(time)).toEqual(range)
    })
  })

  

  describe("contextAtTimeForDimensions", () => {
    const dimensions = { width: 640, height: 480 }
    const time = TimeFactory.create()
      
    test("returns expected context", async () => {
      await clip.load(TimeRangeFactory.createFromTime(time))
      
      const context = clip.contextAtTimeForDimensions(time, dimensions)
      expectContext(context)
    })

  })

  test("toJSON", () => {
    expect(() => JSON.stringify(clip)).not.toThrow()
    const json = JSON.stringify(clip)
    expect(json).not.toEqual("{}")
  })

  test("urlsFromFilters", () => {
    const range = TimeRangeFactory.create
    const urls = media.urlsVisibleInTimeRangeForClipByType(range, clip)
    expect(urls).toBeInstanceOf(UrlsByType)
    expect(urls.font.length).toEqual(1)
  })
  test("coreFilters", () => {
    const filters = clip.coreFilters
    expect(filters).toBeInstanceOf(Array)
    expect(filters.length).toEqual(5)
    filters.every(filter => {
      expect(filter).toBeInstanceOf(FilterMedia)
    })
  })
  test("effects", () => {
    const effects = clip.effects
    // console.log("effects", effects)
    expect(effects).toBeInstanceOf(Array)
  })
})