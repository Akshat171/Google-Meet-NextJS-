import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
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
    <div className={styles.homeContainer}>
      <h1>Google Meet clone</h1>
      <div className={styles.enterRoom}>
        <input
          placeholder="Enter Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e?.target?.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <span className={styles.separatorText}>OR</span>
      <button onClick={createAndJoin}>Create New Room</button>
    </div>
  );
}
