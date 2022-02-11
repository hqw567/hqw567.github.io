/**
 * Transform embedded video to support responsive layout.
 * @see https://ultimatecourses.com/blog/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js
 */
embeddedVideoTransformer: function () {
    let iframes = document.getElementsByTagName("iframe");
    let SUPPORTED_PLAYERS = [
        "www.youtube.com",
        "player.vimeo.com",
        "music.163.com"
    ];
    for (let i = 0; i < iframes.length; i++) {
        let iframe = iframes[i];
        if (iframe.src.search(SUPPORTED_PLAYERS.join("|")) !== -1) {
            let videoRatio = (iframe.height / iframe.width) * 100;
            iframe.width = "100%";

            let wrap = document.createElement("div");
            wrap.className = "fluid-vids";
            wrap.style.width = "100%";
            wrap.style.minHeight = "90px";
            wrap.style.height = iframe.height;
            wrap.style.position = "relative";

            let iframeParent = iframe.parentNode;
            iframeParent.insertBefore(wrap, iframe);
            wrap.appendChild(iframe);
        }
    }
}