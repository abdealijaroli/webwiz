import React from "react";

interface CanvasProps {
    html?: string;
    css?: string;
    js?: string;
}

const Canvas = ({ html, css, js }: CanvasProps) => {
    return (
        <div className="flex flex-col items-center justify-start w-3/4 m-2 p-3 rounded-xl bg-white">
            <div dangerouslySetInnerHTML={{ __html: html || "(Ask the AI to build something for you. Preview the changes on this canvas, LIVE!)" }} />

            <style>{css}</style>

            <script>{js}</script>
        </div>
    );
};

export default Canvas;
