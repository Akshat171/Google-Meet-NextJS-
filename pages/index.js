import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import React from "react";
import App from "./_app";
import Hero from "@/components/Hero";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

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
      <NextUIProvider>
        <Navbar />

        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="flex items-center justify-between p-8 md:p-16 bg-white "
        >
          {/* Left side */}
          <div className="flex flex-col max-w-md">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-blue-500 font-poppins"
            >
              Engage customers with{" "}
              <span className="text-red-600">one-Click </span> video call{" "}
            </motion.h1>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
              className="flex flex-col mb-4"
            >
              <label htmlFor="roomId" className="text-gray-700 mb-2">
                Enter Room ID:
              </label>
              <input
                className="px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:border-gray-500"
                value={roomId}
                onChange={(e) => setRoomId(e?.target?.value)}
              />
            </motion.div>
            <motion.button
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-md mb-4 hover:bg-blue-600"
              onClick={joinRoom}
            >
              Join Room
            </motion.button>
            <motion.button
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
              className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-600"
              onClick={createAndJoin}
            >
              Create a New Room
            </motion.button>
          </div>

          <div className="hidden md:block">
            <Hero />
          </div>
        </motion.div>
      </NextUIProvider>
    </>
  );
}
