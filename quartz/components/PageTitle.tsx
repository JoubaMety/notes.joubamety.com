import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={`page-title ${displayClass ?? ""}`}>
      <img src="/static/icon.png"></img>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.page-title img {
  height: 3rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
