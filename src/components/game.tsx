import React, { useState, useEffect } from "react";

export default function Game() {
  const [carPosition, setCarPosition] = useState(1); // 0 = left, 1 = center, 2 = right
  const [obstacleLane, setObstacleLane] = useState(1);
  const [obstacleY, setObstacleY] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [showGame, setShowGame] = useState(false);

  // Game loop
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setObstacleY((prev) => {
        if (prev >= 5) {
          // Passed! Increase score + new obstacle
          setScore((s) => s + 1);
          setObstacleLane(Math.floor(Math.random() * 3));
          return 0;
        }
        return prev + 1;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [isGameOver]);

  // Collision detection
  useEffect(() => {
    if (obstacleY === 4 && obstacleLane === carPosition) {
      setIsGameOver(true);
    }
  }, [obstacleY, obstacleLane, carPosition]);

  const moveLeft = () => setCarPosition((p) => Math.max(0, p - 1));
  const moveRight = () => setCarPosition((p) => Math.min(2, p + 1));
  const restartGame = () => {
    setCarPosition(1);
    setObstacleLane(1);
    setObstacleY(0);
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 reveal">
      <div className="text-center mb-10">
        <button
          onClick={() => setShowGame(true)}
          className="px-6 py-3 bg-primary/20 text-primary border border-primary/40 rounded-lg hover:bg-primary/30 transition font-medium"
        >
          Feeling bored? Play a mini game 🎮
        </button>
      </div>
      {showGame && (
        <>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Cyber <span className="text-gradient-tech">Car Runner</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Dodge obstacles, survive the lanes, and drive like a real engineer 🚗⚡
            </p>
          </div>

          <div className="max-w-md mx-auto bg-[#0e0f11] border border-primary/20 rounded-xl p-6 shadow-lg select-none">
            {/* Game Area */}
            <div className="grid grid-cols-3 gap-2 mx-auto mb-6 w-full max-w-xs">
              {[0, 1, 2].map((lane) => (
                <div
                  key={lane}
                  className="h-64 bg-black/40 rounded-lg relative overflow-hidden"
                >
                  {/* Obstacle */}
                  {obstacleLane === lane && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-red-500 rounded-md transition-all duration-300"
                      style={{ top: `${obstacleY * 20}%` }}
                    />
                  )}

                  {/* Car */}
                  {carPosition === lane && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-md shadow-lg" />
                  )}
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-6 mb-4">
              <button
                onClick={moveLeft}
                className="px-5 py-2 bg-primary/20 text-primary border border-primary/40 rounded-lg hover:bg-primary/30 transition"
              >
                ←
              </button>
              <button
                onClick={moveRight}
                className="px-5 py-2 bg-primary/20 text-primary border border-primary/40 rounded-lg hover:bg-primary/30 transition"
              >
                →
              </button>
            </div>

            {/* Score */}
            <div className="text-center font-mono text-primary text-lg">
              Score: {score}
            </div>

            {/* Game Over */}
            {isGameOver && (
              <div className="text-center mt-6">
                <p className="text-red-400 font-mono text-lg mb-3">Game Over!</p>
                <button
                  onClick={restartGame}
                  className="px-6 py-2 bg-primary/20 text-primary border border-primary/40 rounded-lg hover:bg-primary/30 transition"
                >
                  Restart
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
