const Overlay = ({
    setOverlay
}: {
    setOverlay: (overlay: boolean) => void;
}) => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h4 className="text-lg font-medium text-gray-800">
                            Please enter your OpenAI API key below:
                        </h4>
                    </div>
                    <div className="space-y-2 p-4 mt-1 text-[15.5px] leading-relaxed text-gray-500">
                        <p>
                            In order to use this app, you must have an OpenAI
                            API key. You can get one{" "}
                            <a
                                href="https://platform.openai.com/account/api-keys"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
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
                                className="text-primary hover:underline"
                            >
                                here
                            </a>
                            .
                        </p>
                        <input
                            className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            type="text"
                            placeholder="Enter your API key here..."
                        />
                    </div>
                    <div className="flex gap-3 p-4 float-right">
                        <button
                            className="px-6 py-2 text-white bg-primary rounded-md outline-none ring-offset-2 ring-primary focus:ring-2"
                            onClick={() => setOverlay(false)}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
