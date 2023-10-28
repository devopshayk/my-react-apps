import './NavBar.css'


const NavBar = () => {
    return (
        <div className="container">
            <div className='nav'>
                <div className="first_section">
                    <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                    <h2>React</h2>
                </div>
                <div className="second_section">
                    <div className="input_div">
                        <div className="first_icon">
                            <svg width="1em" height="1em" viewBox="0 0 20 20" class="me-3 align-middle text-gray-30 shrink-0 group-betterhover:hover:text-gray-70"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" stroke-width="2" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>Search</span>
                        </div>
                        <div className="second_icon">
                            <span className='btn_icon'>Ctrl</span>
                            <span className='btn_icon'>K</span>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://example.com/learn" className="links_hover">Learn</a>
                        <a href="https://example.com/learn" className="links_hover">Reference</a>
                        <a href="https://example.com/learn" className="links_hover">Community</a>
                        <a href="https://example.com/learn" className="links_hover">Blog</a>
                        <a href="https://example.com/learn" className='links_hover'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd" transform="translate(-440 -200)"><path fill="currentColor" fill-rule="nonzero" stroke="currentColor" stroke-width="0.5" d="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z" transform="translate(354.5 192)"></path><polygon points="444 228 468 228 468 204 444 204"></polygon></g></svg></a>
                        <a href="https://example.com/learn" className="links_hover"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></g></svg></a>
                    </div>
                </div>
            </div>
            <div className='section'>
            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
            <div className="react_text">React</div>
            <div className="library_text">The library for web and native user interfaces</div>
            <div className="btn">
                <span className='btns'>Learn React</span>
                <span className='btns2'>API Reference</span>
            </div>
            
        </div>
        </div>
    );
}


export default NavBar;