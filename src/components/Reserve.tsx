
import { useState, useEffect, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Room } from '../interface';

const Reserve = () => {

  const [room, setRoom] = useState<Room[]>([]);

  const params = useParams();

  useEffect(() => {
    const getRoom = async () => {
      const response = await fetch(`http://localhost:3000/api/room/${params.id}`);
      const room = await response.json();
      setRoom(room);
    }
    getRoom()
  }, [])

  if (!params.id || room == null) return <>Vacío</>
  return (
    <div>
      {
        room.map(item => (
          <div key={item.id} className='flex flex-col gap-5'>
            <div>
              <img src={item.image_url} alt="" />
              <div className='capitalize text-2xl font-semibold'>{item.title}</div>
            </div>

            <div className='w-10/12 m-auto p-3'>
              <h2 className='uppercase font-bold'>su reserva:</h2>
              <form className='flex flex-col gap-4'>
                <label htmlFor="">
                  <p>Fecha y hora</p>
                  <input type="datetime-local" name="" id="" />
                </label>
                <p className='uppercase font-bold'>Datos del huesped</p>
                <label htmlFor="">
                  <p>Nombre y Apellido</p>
                  <input className='border border-black w-full' type="text" name="" id="" />
                </label>

                <label htmlFor="">
                  <p>Email</p>
                  <input className='border border-black w-full' type="email" name="" id="" />
                </label>
                <label htmlFor="">
                  <p>Celular</p>
                  <input className='border border-black w-full' type="tel" name="" id="" />
                </label>
                <label htmlFor="">
                  <p>Elije un método de pago</p>

                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pago en línea</label>
                  </div>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pago en caja</label>
                  </div>

                </label>
                <div className='flex justify-between'>
                  <p>Monto</p>
                  <b>S/ {item.price}</b>
                </div>
                <button className='main-color w-full text-white py-2 rounded-lg'>Reservar y pagar</button>
              </form>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Reserve