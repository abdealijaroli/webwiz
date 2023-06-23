"use client";

import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useChat } from "ai/react";

export default function Home() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    const [localMessages, setLocalMessages] = useState<any>([]);

    const onClear = () => {
        setLocalMessages([]);
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
                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className="text-sm my-3 mx-3 p-2 flex w-[90%] h-fit bg-secondary rounded-xl text-black"
                        >
                            <p>
                                {m.role}: {m.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="m-2 flex flex-col w-full justify-end">
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <input
                                className="text-sm m-2 p-2 w-5/6 rounded-xl text-black border-2 border-secondary focus:outline-none"
                                type="text"
                                placeholder='Create a title named as "Hello World!"...'
                                id="promptBox"
                                value={input}
                                onChange={handleInputChange}
                            />
                            <button className="w-1/6 rounded-xl" type="submit">
                                <AiOutlineSend className="text-3xl text-secondary transition hover:scale-110" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
