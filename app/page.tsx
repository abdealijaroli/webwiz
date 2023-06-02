"use client";
// todo: 
// - remove use client from here, distinguish b/w client and server comps and make separate comps for interactive elems such as btns etc and make em "use client". finally import em here and display
// - remove model/ai.ts, unless it's needed. check if the ai logic can be handled in this file itself
// - make navbar. user avatar. sign in and sign out
// - implement next-auth. user email and pass plus openai api key needed

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSend } from "react-icons/ai";

export default function Home() {
    const [text, setText] = useState<any>("");
    const [userPrompts, setUserPrompts] = useState<any>([]);
    const [html, setHtml] = useState<any>("");
    const [css, setCss] = useState<any>("");
    const [js, setJs] = useState<any>("");

    const router = useRouter();

    const onClear = () => {
        setUserPrompts([]);
    };

    const onInput = (e: any) => {
        setText(e.target.value);
    };

    const sendAiRequest = (text: string) => {
        if (text.length > 0) {
            setUserPrompts([...userPrompts, text]);
            setText("");
        }
    };

    return (
        <main className="bg-primary p-4 rounded-md text-center text-xl m-6 font-medium flex flex-row h-[90vh]">
            <div className="flex flex-col items-start justify-start w-3/4 m-2 rounded-xl bg-black"></div>

            <div className="flex flex-col items-start justify-start border-2 border-secondary w-1/4 m-2 rounded-xl text-white">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="m-3">Send Instructions</h1>
                    <button
                        className="m-2 px-2 py-1 transition shadow-xl rounded-xl border-[2px] bg-secondary hover:bg-primary border-secondary hover:text-white text-primary text-lg font-semibold"
                        onClick={onClear}
                    >
                        Clear All
                    </button>
                </div>
                <div className="flex flex-col justify-start w-full h-screen overflow-auto">
                    {userPrompts.map((prompt: string) => (
                        <div className="text-sm my-3 mx-3 p-2 flex w-[90%] h-fit bg-secondary rounded-xl text-black">
                            <p>{prompt}</p>
                        </div>
                    ))}
                </div>

                <div className="m-2 flex flex-col w-full justify-end">
                    <div className="flex">
                        <input
                            className="text-sm m-2 p-2 w-5/6 rounded-xl text-black border-2 border-secondary focus:outline-none"
                            type="text"
                            placeholder="Create a submit button with rounded borders..."
                            id="promptBox"
                            value={text}
                            onChange={onInput}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendAiRequest(text);
                                    setText("");
                                }
                            }}
                        />
                        <button
                            className="w-1/6 rounded-xl"
                            onClick={() => {
                                sendAiRequest(text);
                                setText("");
                            }}
                        >
                            <AiOutlineSend className="text-3xl text-secondary transition hover:scale-110" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
