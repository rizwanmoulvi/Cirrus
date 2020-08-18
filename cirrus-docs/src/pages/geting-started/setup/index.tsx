import React, { useEffect } from 'react';
import { TableOfContents } from '../../../layouts/components/toc';
import { CodeBlock } from '../../../layouts/components/codeblock';
import { Headline } from '../../../layouts/components/headline';
import { Link } from 'react-router-dom';
import { toc } from './toc';

import initializeTabs from '../../../static/js/tabs.js';

export const SetUpPage: React.FC<any> = (props) => {
    useEffect(() => {
        initializeTabs();
        eval(`
        const installationTabs = tabs({
            el: '#installationTabs',
            tabNavigationLinks: '.tab-item',
            tabContentContainers: '.tabpage'
        });
        installationTabs.init();`);
    });

    return (
        <main className="page-layout">
            <div>
                <section id="setup" className="padtop">
                    <div className="content">
                        <Headline title="Setup" link="#setup" />
                        <p className="lead">Follow these simple steps for setting up Cirrus in your project.</p>
                        <div className="divider"></div>

                        <h6>1. Use a Package Manager (Recommended)</h6>
                        <b>Npm</b>
                        <div className="my-2">
                            <CodeBlock code={`npm i cirrus-ui --save`} language="sh" />
                        </div>
                        <div className="space"></div>
                        <b>Yarn</b>
                        <div className="my-2">
                            <CodeBlock code={`yarn add cirrus-ui`} language="sh" />
                        </div>

                        <div className="space"></div>
                        <h6>2. Use a CDN</h6>
                        <b>Unpkg</b>
                        <div className="my-2">
                            <CodeBlock code={`https://unpkg.com/cirrus-ui`} language="text" />
                        </div>
                        <div className="space"></div>
                        <b>JsDelivr</b>
                        <div className="my-2">
                            <CodeBlock
                                code={`https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.5/dist/cirrus.min.css`}
                                language="text"
                            />
                        </div>

                        <div className="space"></div>
                        <h6>3. Download from the repository.</h6>
                        <a
                            href="https://github.com/Spiderpig86/Cirrus/releases"
                            target="_blank"
                            className="u-inline-block"
                        >
                            <button className="btn-info">Download</button>
                        </a>
                    </div>
                </section>

                <section id="project-config" className="padtop">
                    <div className="content">
                        <Headline title="Project Configuration" link="#project-config" />
                        <div className="divider"></div>

                        <p>
                            Now that Cirrus is installed, it is time to configure it for your project. This step ensures
                            that the project is set up properly to support mobile responsiveness and <b>strict</b>{' '}
                            rendering with{' '}
                            <a
                                className="u u-LR"
                                href="https://www.w3resource.com/html5/doctype.php#:~:text=doctype%20html%3E%20or%20%3C!&text=This%20is%20because%2C%20html5%20is,goes%20to%20the%20quirky%20mode."
                                target="_blank"
                            >
                                standard mode
                            </a>
                            .
                        </p>

                        <div id="installationTabs">
                            <div className="tab-container mb-3">
                                <ul>
                                    <li className="tab-item selected">
                                        <a>Webpage</a>
                                    </li>
                                    <li className="tab-item">
                                        <a>Node</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tabpage tabpage--shown">
                                <p className="lead">Traditional Webpage</p>
                                <p className="font-bold title">Add the HTML5 DocType</p>
                                <div className="mb-3">
                                    <CodeBlock code={`<!DOCTYPE html>`} language="html" />
                                </div>

                                <p className="font-bold title">Add the responsive viewport meta tag</p>
                                <div className="mb-3">
                                    <CodeBlock
                                        code={`<meta name="viewport" content="width=device-width, initial-scale=1">`}
                                        language="html"
                                    />
                                </div>

                                <p className="font-bold title">Font Awesome</p>
                                <p className="subtitle">
                                    To use glyphs, you must include the <b>Font Awesome</b> library.
                                </p>
                                <div className="mb-3">
                                    <CodeBlock
                                        code={`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">`}
                                        language="html"
                                    />
                                </div>
                                <p>
                                    Please visit{' '}
                                    <a
                                        className="u u-LR"
                                        rel="noopener noreferrer"
                                        href="https://fontawesome.com/start"
                                        target="_blank"
                                    >
                                        FontAwesome
                                    </a>{' '}
                                    and sign up to get your developer kit to get started. The CDN above is just a
                                    sample.
                                </p>

                                <p className="font-bold title">Required Fonts</p>
                                <p className="subtitle">Don't forget to include the required fonts.</p>

                                <div className="mb-3">
                                    <CodeBlock
                                        code={`<!-- Google Fonts -->

<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

<!-- Minified Cirrus CSS -->

<link rel="stylesheet" href="../css/cirrus.min.css">
<!-- Import your other dependencies -->`}
                                        language="html"
                                    />
                                </div>
                            </div>
                            <div className="tabpage">
                                <p className="lead">Node App</p>
                                <p className="font-bold title">Import cirrus-ui</p>

                                <div className="mb-3">
                                    <CodeBlock
                                        code={`import 'cirrus-ui'; 
// Your other framework code`}
                                        language="javascript"
                                        languageDisplay="JS"
                                    />
                                </div>

                                <p className="font-bold title">Setup Template</p>
                                <p>
                                    In your main <code>index.html</code> page, make sure that the following dependencies
                                    are also included. For example, it would be in the <code>index.html</code> file in
                                    your React project.
                                </p>
                                <CodeBlock
                                    code={`<!DOCTYPE html>
<html>

<head>
	<title>Getting Started with Cirrus</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge;" />
	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
	<!-- JQuery (Optional to help add navbar functionality) -->
	<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
</head>
<!-- More content -->

</html>`}
                                    language="html"
                                    languageDisplay="HTML"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="padtop">
                    <div className="content">
                        <div className="divider"></div>
                        <ul className="pagination no-bullets">
                            <li className="pagination-item pagination-next">
                                <Link to="../update" className="u-block">
                                    <p className="pagination-item-subtitle">Next</p>
                                    <h5 className="font-alt font-light m-0">Update Guide</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
