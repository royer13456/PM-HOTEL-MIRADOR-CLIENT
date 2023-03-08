import { useEffect, useState } from "react"
import RoomCard from "../components/RoomCard"
import { Room } from "../interface"

const RoomPage = () => {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch('http://localhost:3000/api/room');
      const rooms = await response.json();
      setRooms(rooms);
    }
    getRooms();
  }, [])

  if (rooms.length === 0) return <>No se encontraron habitaciones</>

  return (
    <div className="container grid md:grid-cols-3 justify-between">
      {
        rooms.map((room: Room) => <RoomCard {...room} key={room.id} />)
      }
    </div>
  )
}

export default RoomPage