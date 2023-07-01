import React from "react";
import { AiOutlineSend } from "react-icons/ai";

interface ChatInterfaceProps {
    messages: any[];
    input: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    messageJson: (jsonString: string) => any;
}

const ChatInterface = ({
    messages,
    input,
    handleInputChange,
    handleSubmit,
    messageJson,
}: ChatInterfaceProps) => {
    return (
        <div className="flex flex-col justify-start w-full h-full overflow-y-auto overflow-x-hidden">
            <div className="flex-grow overflow-auto">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className="text-sm my-3 mx-3 p-2 flex w-[90%] h-fit bg-secondary rounded-xl text-black"
                    >
                        <p>
                            {m.role === "user" ? <b>User</b> : <b>AI</b>}:{" "}
                            {m.role === "user"
                                ? m.content
                                : messageJson(m.content)?.text}
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
    );
};

export default ChatInterface;
