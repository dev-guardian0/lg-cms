export const ImagePropsFragment = `
fragment ImageProps on Asset {
  id
  preview
  source
  width
  height
  updatedAt
  type
  fileSize
  mimeType
  tags {
    value
  }
  focalPoint {
    x
    y
  }
}
`