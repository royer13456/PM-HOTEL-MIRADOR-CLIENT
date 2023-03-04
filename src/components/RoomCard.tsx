
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
    <div className="border w-11/12 m-auto p-5 rounded-xl flex flex-col gap-3">
      <img src={image_url} alt={title} loading="lazy" />
      <div className="flex justify-between">
        <p className="capitalize">{title}</p>
        <b>S/{price}</b>
      </div>
      <div>
        <p>Descripcion:</p>
        {descriptionList.map(description => <li>{description}</li>)}
      </div>
      <button className="main-color text-white w-full py-2 rounded-lg" onClick={() => reserve(room)}>Reservar</button>
    </div>
  )
}

export default RoomCard