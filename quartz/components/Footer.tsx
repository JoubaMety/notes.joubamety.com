import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          <ul>
            Other sites:
            {Object.entries(links).map(([text, link]) => (
              <li>
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
        </p>
        <p>Webrings:
          <ul>
            <li>
              <a href="https://ctp-webr.ing/notes.joubamety.com/previous">&lt;&lt;</a>&nbsp;
              <a href="https://ctp-webr.ing/">The Catppuccin Webring</a>&nbsp;
              <a href="https://ctp-webr.ing/notes.joubamety.com/next">&gt;&gt;</a>
            </li>
          </ul>
        </p>
        <p>
          <a href="https://brainmade.org/" target="_blank"><img id="brainmade" class="brainmade" src="/static/brainmade-light.svg"></img></a>
          <br></br>
          Commissioned illustration by <a href="https://coredeter.carrd.co/" target="_blank">coredeter</a> as a site icon/mascot.<br></br>
          Using <a href="https://github.com/catppuccin/catppuccin" target="_blank">Catpuccin</a> color palette (<a href="https://github.com/JoubaMety/notes.joubamety.com/blob/v4/licenses/catppuccin" target="_blank">MIT License</a>).
          <br></br>
          <br></br>
          Website created using <a href="https://github.com/jackyzha0/quartz">Quartz v{version}</a> (<a href="https://github.com/JoubaMety/notes.joubamety.com/blob/v4/licenses/quartz.txt" target="_blank">MIT License</a>),<br></br>content made by <a href="https://joubamety.com" target="_blank">
          &nbsp;
          <span>
            <img class="footer-avatar" src="/static/avatar-small.webp"></img>&nbsp;
            JoubaMety (Jan Rašnovský)
          </span>
          
          </a> © 2023 - {year} (<a href="https://github.com/JoubaMety/notes.joubamety.com/blob/v4/LICENSE" target="_blank">MIT License</a>)
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
