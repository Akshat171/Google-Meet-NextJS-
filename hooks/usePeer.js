import { useState, useEffect, useRef } from "react";
const usePeer = () => {
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const isPeerSet = useRef(false);
  useEffect(() => {
    if (isPeerSet.current) return;
    isPeerSet.current = true;
    (async function initPeer() {
      const myPeer = new (await import("peerjs")).default(); //default --> use that and execute this
      setPeer(myPeer);

      myPeer.on("open", (id) => {
        console.log(`Your peer ID is ${id}`);
        setMyId(id);
      });
    })();
  }, []);

  return {
    peer,
    myId,
  };
};

export default usePeer;
