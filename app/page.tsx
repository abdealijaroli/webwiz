"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [text, setText] = useState("");
    const [userPrompts, setUserPrompts] = useState<any>([]);

    const router = useRouter();

    const sendGptReq = (text: string) => {
        setUserPrompts([...userPrompts, text]);
        setText("");
    };

    const onClear = () => {
        setUserPrompts([]);
        router.refresh();
    };

    const handleInput = (e: any) => {
        setText(e.target.value);
    };

    return (
        <main className="bg-primary p-4 rounded-md text-center text-xl m-6 font-medium flex flex-row h-[90vh]">
            <div className="flex flex-col items-start justify-start w-3/4 m-2 rounded-xl bg-white"></div>

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
                            onChange={handleInput}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    text.length > 0 && sendGptReq(text);
                                    // clear the input box
                                    
                                }
                            }}
                        />
                        <button
                            className="w-1/6 rounded-xl"
                            onClick={() => {
                                text.length > 0 && sendGptReq(text);
                                // look for best practices to clear the prompt box 
                                const pBox = document.getElementById(
                                    "promptBox"
                                ) as HTMLInputElement;
                                pBox.value = "";
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#FDE3C8"
                                className="w-11 h-14 transition hover:scale-105"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
