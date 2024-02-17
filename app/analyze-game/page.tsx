import AnalyzeGame from "@/components/AnalyzeGame";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div>
                <h1 className="text-4xl font-bold">Elocator</h1>
                <p className="text-lg mt-4">Game Complexity and Analysis</p>
                <AnalyzeGame />
            </div>
        </main>
    );
}