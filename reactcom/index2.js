function Settings ({open})
{
    const classList = `settingsnav ${open ? '':'closed'}`;
    const [theme,setTheme] = React.useState(false);

    React.useEffect(() => {    
        // Update the document title using the browser API    
        const htmlTag = document.getElementsByTagName("html")[0];
        if (htmlTag.hasAttribute("data-theme")) {
            htmlTag.removeAttribute("data-theme");
            localStorage.removeItem("site-theme");
        }
        else{
            htmlTag.setAttribute("data-theme", "dark");
            localStorage.setItem("site-theme", "dark");
        }
    });

    return (
        <div className={classList}>
            <p>
                <span id="themetext">Light Mode:</span>
                <label className="switch">
                    <input type="checkbox" id="theme-toggle" onClick={()=> setTheme(!theme)} />
                    <span className="slider round"></span>
                </label>
            </p>
        </div>
    );
}

function Footer ()
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

function Navbar ()
{
    const [open, setOpen] = React.useState(false);

    return (
        <div className="navbar">
            <a href="/" className="button button_logo">
                <img src="images/logo.svg" alt="logo" className="logoimg"/>
            </a>
            <a href="resources.html" className="button button_nav">
                Resources
            </a>
            <a href="guides.html" className="button button_nav">
                Guides
            </a>
            <button className="button settingsnavbutton" onClick={() => setOpen(!open)}>
                <i className="menuicon fas fa-cog"></i>
            </button>
            <Settings open={open}/>
        </div>
    );
}

function Content()
{
    return(
        <div className="flex-container">
            <div className="home">
                <h1 className="header">Welcome to GameDevelop.io</h1> 
                <img src="images/logo1.svg" alt="logo" className="logomain"/>
                <h1 className="subheader">A Resource Website for Game Development.</h1>
                <h2>Resources Database</h2>
                <p>
                    Explore a comprehensive database of tools, assets, and services used by game developers around the world. <br/>
                    Find communities to learn from each other, share development progress, and team up for group projects.<br/>
                    Discover publishers and funding options that can help take your game idea to the next level.
                </p>
                <a href="resources.html" className="button button_main">
                    VIEW RESOURCES
                </a>

                <h2 >Game Development Guides</h2>
                <p>
                    Learn about the every aspect of game development, from conception to release.<br/>
                    Gain insight into Game Industry trends, career options, and work culture.<br/>
                    Acquire specialized knowledge for business, marketing, and social media.
                </p>
                <a href="guides.html" className="button button_main">
                    VIEW GUIDES
                </a>
            </div>
        </div>
    );
}

function Home ()
{
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    );
}
ReactDOM.render(<Home />, document.getElementById('root'));