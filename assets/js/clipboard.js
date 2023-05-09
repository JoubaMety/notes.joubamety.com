const svgCopy =
    '<svg aria-hidden="true" height="16" viewBox="0 0 48 48" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M16.3 38.35q-1.95 0-3.325-1.375Q11.6 35.6 11.6 33.65V6.55q0-1.95 1.375-3.35Q14.35 1.8 16.3 1.8h21.1q1.95 0 3.35 1.4 1.4 1.4 1.4 3.35v27.1q0 1.95-1.4 3.325-1.4 1.375-3.35 1.375Zm0-4.7h21.1V6.55H16.3v27.1ZM8.6 46.1q-1.95 0-3.35-1.4-1.4-1.4-1.4-3.35V14q0-1 .675-1.675t1.725-.675q1 0 1.675.675T8.6 14v27.35h20.9q1 0 1.675.675t.675 1.725q0 1-.675 1.675T29.5 46.1Zm7.7-39.55v27.1-27.1Z"/></svg>';
const svgCheck =
    '<svg aria-hidden="true" height="16" viewBox="0 0 48 48" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M18.9 35.95q-.45 0-.875-.175t-.775-.525L8.2 26.2q-.7-.7-.7-1.7t.7-1.7q.7-.7 1.675-.7.975 0 1.725.7l7.3 7.3 17.5-17.45q.7-.7 1.675-.725.975-.025 1.675.725.7.7.7 1.7t-.7 1.7l-19.2 19.2q-.35.35-.775.525-.425.175-.875.175Z"/></svg>';

const addCopyButtons = () => {
    let els = document.getElementsByClassName("highlight");
    // for each highlight
    for (let i = 0; i < els.length; i++) {
        try {
            if (els[i].getElementsByClassName("clipboard-button").length) continue;

            // find pre > code inside els[i]
            let codeBlocks = els[i].getElementsByTagName("code");

            // line numbers are inside first code block
            let lastCodeBlock = codeBlocks[codeBlocks.length - 1];
            const button = document.createElement("button");
            button.className = "clipboard-button";
            button.type = "button";
            button.innerHTML = svgCopy;
            button.ariaLabel = "opy the shown code";
            // remove every second newline from lastCodeBlock.innerText
            button.addEventListener("click", () => {
                navigator.clipboard.writeText(lastCodeBlock.innerText.replace(/\n\n/g, "\n")).then(
                  () => {
                      button.blur();
                      button.innerHTML = svgCheck;
                      setTimeout(() => {
                          button.innerHTML = svgCopy
                          button.style.borderColor = ""
                      }, 2000);
                  },
                  (error) => (button.innerHTML = "Error")
                );
            });
            // find chroma inside els[i]
            let chroma = els[i].getElementsByClassName("chroma")[0];
            els[i].insertBefore(button, chroma);
        } catch(error) {
            console.debug(error);
        }
    }
}
