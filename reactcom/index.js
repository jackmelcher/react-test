class Hello extends React.Component
{
    render()
    {
        return (
            <div>
            <p>hello world</p>
            <Footer />
            </div>
        );
    }
}
class Footer extends React.Component
{
    render()
    {
        return (
            <div className="footer">
                <a href="/about.html">About</a>
                <a href="/suggestion.html">Make a Suggestion</a>
                <a href="/contact.html">Contact</a>
                <a href="https://www.patreon.com/jackmelcher" target="_blank">Patreon</a>
                <a href="https://www.ko-fi.com/jackmelcher" target="_blank">Ko-fi</a>
                <p>© 2020 GameDevelop.io All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</p>
            </div>
        );
    }
}
class Navbar extends React.Component
{
    render()
    {
        return (
            <>
                <a href="/" class="button button_logo">
                    <img src="images/logo.svg" alt="logo" class="logoimg"></img>
                </a>
                <a href="resources.html" class="button button_nav">
                    Resources
                </a>
                <a href="guides.html" class="button button_nav">
                    Guides
                </a>
                <button class="button settingsnavbutton" onclick="ToggleSettings()">
                    <i class="menuicon fas fa-cog"></i>
                </button>
            </>
        );
    }
}
ReactDOM.render(<Hello />, document.getElementById('root'));