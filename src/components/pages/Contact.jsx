import '../../scss/page.scss'

import GmailLogo from '../../img/gmail.png'

function Contact() {
    return (
        <div>
            <h1>Contact Links</h1>
            <h3>You can contact with us by these links:</h3>

            <iframe
                src="https://discordapp.com/widget?id=972898434103246949&theme=dark"
                width="350"
                height="500"
                allowtransparency="true"
                frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title='discordInvite'>
            </iframe>

            <script src="https://apis.google.com/js/platform.js"></script>

            <div class="g-ytsubscribe" data-channelid="UCwy4ZxxUHMDv5tvnY0BkEXg" data-layout="full" data-count="default"></div>

            <h4>Gmail(Only if you want to help with apps or games)<img class="mini-text-image" src={GmailLogo} alt="gmail-img"></img> - alexxretr0a@gmail.com(CEO's Email)</h4>
        </div>
    )
}

export default Contact;