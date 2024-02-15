import Image from "next/image";
import ChessBoardManager from "@/components/ChessBoardManager";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>Elocator: Chess Complexity Calculator</title>
      <p className="text-4xl font-bold">Elocator: Chess Complexity Calculator</p>
      <p className="text-2xl font-bold">Enter the FEN you'd like to analyze below.</p>
      <ChessBoardManager />
      <br></br>
      <p className="text-2xl font-bold">What is this? How does it work?</p>
      <p className= "w-3/4">
        Elocator is a tool that calculates the complexity of a given chess position. It does this by
        analyzing the position and assigning a score from 1 to 10, with 1 being the least complex and
        10 being the most complex. The score is based on the number of legal moves available to the
        player whose turn it is to move. The more moves available, the more complex the position.
      <br></br>
      <br></br>
        I started by creating a dataset of FEN's mapped to centipawn loss from a GM that made a move in that position (classical OTB games only).
        Underlying this tool is a neural network model (AI, deep learning, yada yada) that has been trained on 100,000 chess moves made by grandmasters.
        The model has learned to predict the complexity of a position by learning the expected centipawn loss of a move as measured by Stockfish at depth 20.
      <br></br>
      <br></br>
        The model is then used to predict the complexity of a given position. The model is not perfect, but it is a good starting point for understanding the complexity of a position.
        I look forward to making it better over time. Soon, I will publish some analytics around model performance.
        
        You can learn more about the model and the dataset by visiting the <a className = "text-green-500" href="https://github.com/cmwetherell/elocator">Elocator GitHub repository</a>.
      </p>
    </main>
  );
}
