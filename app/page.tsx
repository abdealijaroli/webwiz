"use client";

import { AiOutlineSend } from "react-icons/ai";
import { useChat } from "ai/react";
import Canvas from "./Canvas";

export default function Home() {

    const { messages, input, handleInputChange, handleSubmit } = useChat({});

    return (
        <main className="bg-primary p-4 rounded-md text-center text-xl m-6 font-medium flex flex-row h-[90vh]">
            <Canvas />

            <div className="flex flex-col items-start justify-start border-2 border-secondary w-1/4 m-2 rounded-xl text-white">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="m-3">Chat</h1>
                </div>
                <div className="flex flex-col justify-start w-full h-screen overflow-auto">
                    {messages.map((m) => (
                        <div
                            key={m.id}
                            className="text-sm my-3 mx-3 p-2 flex w-[90%] h-fit bg-secondary rounded-xl text-black"
                        >
                            <p>
                                {m.role === "user" ? "User" : "AI"}: {m.content}
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
                                placeholder='Create a heading as "Hello World!"...'
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
