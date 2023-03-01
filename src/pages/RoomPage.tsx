import { useEffect, useState } from "react"
import RoomCard from "../components/RoomCard"
import { Room } from "../interface"

const RoomPage = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch('http://localhost:3000/api/room');
      const data = await response.json();
      setRooms(data);
    }
    getRooms();
  }, [])

  return (
    <div className="container grid md:grid-cols-3 justify-between">
      {
        rooms.map((room: Room) => <RoomCard key={room.id} {...room} />)
      }
    </div>
  )
}

export default RoomPage