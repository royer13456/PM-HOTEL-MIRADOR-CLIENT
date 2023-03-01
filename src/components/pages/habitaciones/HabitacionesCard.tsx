import habitacion from '/habitacion.png'

const HabitacionesCard = () => {
  return (
    <div className="flex flex-col gap-3 border border-zinc-300 p-4 rounded-lg w-10/12 shadow-2xl">
      <img src={habitacion} alt="habitacion" className='m-auto object-contain' width="100%" />
      <div className='flex justify-between items-center'>
        <p>Habitacion estándar</p>
        <span className='font-bold text-xl'>S/50.00</span>
      </div>
      <div>
        <b>Descripción:</b>
        <ol>
          <li>Habitacion amoblada</li>
          <li>Free netflix</li>
          <li>Luces LED</li>
          <li>Espejo frontal</li>
          <li>Sillón tántrico</li>
          <li>6hrs</li>
        </ol>
      </div>
      <button className='main-color w-full py-2 rounded-lg font-bold text-white active:scale-95'>Reservar</button>
    </div>
  )
}

export default HabitacionesCard