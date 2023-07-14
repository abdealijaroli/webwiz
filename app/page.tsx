"use client";

import { useState, useEffect } from "react";
import { useChat } from "ai/react";
import Canvas from "./Canvas";
import ChatInterface from "./ChatInterface";
import Overlay from "./Overlay";

interface responseInterface {
    text: string;
    html?: string;
    css?: string;
    js?: string;
}

export default function Home() {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [overlay, setOverlay] = useState(true);
    const [checkApi, setCheckApi] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("openai_api_key")) {
            setOverlay(false);            
        } else {
            setOverlay(true);
        }
    }, []);

    const { messages, input, handleInputChange, handleSubmit } = useChat({});

    const messageJson = (jsonString: string) => {
        try {
            const res = JSON.parse(jsonString);

            const response: responseInterface = {
                text: res.text,
                html: res.html,
                css: res.css,
                js: res.js,
            };

            setHtml(response.html || "");
            setCss(response.css || "");
            setJs(response.js || "");

            return response;
        } catch (err) {
            console.error("Error parsing JSON:", err);
            return null;
        }
    };

    return (
        <main className="bg-primary p-4 rounded-md text-xl m-6 font-medium flex flex-row h-[90vh]">
            {overlay && <Overlay setOverlay={setOverlay} />}

            <Canvas html={html} css={css} js={js} />

            <div className="flex flex-col items-start justify-start border-2 border-secondary w-1/4 m-2 rounded-xl text-white">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="m-3">Chat</h1>
                </div>
                <ChatInterface
                    messages={messages}
                    input={input}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    messageJson={messageJson}
                />
            </div>
        </main>
    );
}
