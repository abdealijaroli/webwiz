import React from "react";

interface CanvasProps {
    html: string;
    css: string;
    js: string;
}

const Canvas = ({ html, css, js }: CanvasProps) => {
    const isHtmlValid = (html: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        return doc.body.innerHTML !== "";
    };

    const htmlWithCSSAndJS = `
		<html>
			<head>
				<style>${css}</style>
			</head>
			<body>
				${isHtmlValid(html) ? html : "<h2>(Ask AI to build something for you and preview it live here on this canvas!)</h2>"}
				<script>${js}</script>
			</body>
		</html>
	`;

    return (
        <iframe
            srcDoc={htmlWithCSSAndJS}
            title="Canvas"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
            className="w-3/4 rounded-xl bg-white"
        />
    );
};

export default Canvas;
