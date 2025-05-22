export default function ChatRoom() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Chat Room</h1>
            <div className="w-full max-w-md">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Chat Messages</h2>
                    {/* Chat messages will be displayed here */}
                </div>
            </div>
        </div>
    );
}