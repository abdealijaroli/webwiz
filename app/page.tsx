'use client';
import { useState } from "react";

export default function Home() {
    const [text, setText] = useState("");
    const [userPrompts, setUserPrompts] = useState<any>([]);

    const sendGptReq = async (text: string) => {
        setUserPrompts([...userPrompts, text]);
        
    };

    return (
        <main className="text-center text-xl m-6 font-medium flex flex-row h-[90vh]">
            <div className="flex flex-col items-start justify-start w-3/4 m-2 rounded-xl bg-black"></div>

            <div className="flex flex-col items-start justify-start border-2 border-secondary w-1/4 m-2 rounded-xl">
                <h1 className="m-2 float-left">Send Instructions</h1>

                {userPrompts.map((prompt: string) => (
                    <div className="text-lg font-thin my-3 p-2 flex w-full h-fit bg-gray-500 rounded-xl text-white">
                        <p>{prompt}</p>
                    </div>
                ))
                }
                
                <div className=" m-2 flex flex-row items-end w-full h-full">
                    <input   
                        className="m-2 p-2 w-5/6 rounded-xl text-black border-2 border-secondary focus:outline-none"
                        type="text"
                        placeholder="Create a landing page for..."
                        id="promptBox"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        className="m-1.5 w-1/6 rounded-xl" 
                        onClick={() => {
                            text.length > 0 && sendGptReq(text);
                            const inputBox = document.getElementById("promptBox") as HTMLInputElement;
                            inputBox.value = "";
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-4 w-12 h-14 transition hover:scale-110 hover:text-secondary"
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
        </main>
    );
}
