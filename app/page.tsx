"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import Canvas from "./Canvas";
import ChatInterface from "./ChatInterface";

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

    return overlay ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setOverlay(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h4 className="text-lg font-medium text-gray-800">
                            Please enter your OpenAI API key below:
                        </h4>
                        <button
                            className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                            onClick={() => setOverlay(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mx-auto"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                        <p>
                            In order to use this app, you must have an OpenAI
                            API key. You can get one{" "}
                            <a
                                href="https://platform.openai.com/account/api-keys"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                here
                            </a>
                            .
                        </p>
                        <p>
                            We <b>do not</b> store your API key. It is only used
                            to make requests to the OpenAI API. You can view the
                            source code for this app{" "}
                            <a
                                href="https://github.com/abdealijaroli/webwiz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:underline"
                            >
                                here
                            </a>
                            .
                        </p>
                        <input
                            className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            type="text"
                            placeholder="Enter your API key here..."
                        />
                    </div>
                    <div className="flex items-center gap-3 p-4 mt-1 border-t">
                        <button
                            className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => setOverlay(false)}
                        >
                            Confirm
                        </button>
                        <button
                            className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                            onClick={() => setOverlay(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <main className="bg-primary p-4 rounded-md text-center text-xl m-6 font-medium flex flex-row h-[90vh]">
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
