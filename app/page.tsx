export default function Home() {
    return (
        <main className="text-center text-xl m-6 font-medium flex flex-row">
            <div className="flex flex-col items-start justify-start border w-3/4 h-screen m-2 rounded-xl">
                <h1 className="m-2">Canvas</h1>
            </div>

            <div className="flex flex-col items-start justify-start border w-1/4 h-screen m-2 rounded-xl">
                <h1 className="m-2 float-left">Chat</h1>
            </div>
        </main>
    );
}
