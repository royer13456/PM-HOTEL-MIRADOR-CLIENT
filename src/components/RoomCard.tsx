
import { useNavigate } from "react-router-dom";
import { Room } from "../interface"

const RoomCard = (room: Room) => {
  const { image_url, title, price, description } = room;
  const descriptionList = description.split(",");

  const navigate = useNavigate();

  const reserve = (room: Room) => {
    navigate(`/reserve/${room.id}`);
  }

  return (
    <div className="flex flex-col w-11/12 gap-3 p-5 m-auto border rounded-xl">
      <img src={image_url} alt={title} loading="lazy" />
      <div className="flex justify-between">
        <p className="capitalize">{title}</p>
        <b>S/{price}</b>
      </div>
      <div>
        <p>Descripcion:</p>
        {descriptionList.map(description => <li>{description}</li>)}
      </div>
      <button className="w-full py-2 text-white rounded-lg main-color" onClick={() => reserve(room)}>Reservar</button>
    </div>
  )
}

export default RoomCard