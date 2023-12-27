import { useEffect } from "react";
import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
const Room = () => {
  const socket = useSocket();
  const { peer, myTd } = usePeer();
};

export default Room;
