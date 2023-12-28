import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import React from "react";
import App from "./_app";
import Hero from "@/components/Hero";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`/${roomId}`);
    } else {
      alert("Please provide a valid room id");
    }
  };
  return (
    <>
      <div className="flex items-center justify-between p-8 md:p-16 bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
        {/* Left side */}
        <div className="flex flex-col max-w-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-blue-500">
            Engage customers with{" "}
            <span className="text-red-600">one-Click </span> video call{" "}
          </h1>
          <div className="flex flex-col mb-4">
            <label htmlFor="roomId" className="text-gray-300 mb-2">
              Enter Room ID:
            </label>
            <input
              className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={roomId}
              onChange={(e) => setRoomId(e?.target?.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md mb-4 hover:bg-blue-600"
            onClick={joinRoom}
          >
            Join Room
          </button>
          <button
            className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-600"
            onClick={createAndJoin}
          >
            Create a New Room
          </button>
        </div>

        <div className="hidden md:block">
          <Hero />
        </div>
      </div>
    </>
  );
}
