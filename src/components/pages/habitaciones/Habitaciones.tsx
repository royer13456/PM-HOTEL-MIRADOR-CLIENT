import HabitacionesCard from "./HabitacionesCard"


const Habitaciones = () => {
  return (
    <div className="container grid md:grid-cols-3">
      <HabitacionesCard />
      <HabitacionesCard />
      <HabitacionesCard />
    </div>
  )
}

export default Habitaciones