
const HomePage = () => {
  return (
    <div>
      <div className='relative'>
        <img src="/homepage-main.png" alt="imagen principal" />
        <div className='min-w-max flex flex-col gap-44 absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-5xl font-bold '>HOTEL MIRADOR TORRE TORRE</h1>
          <a className='bg-[#5cb16e] m-auto px-6 py-2 mt-35 rounded' href="/Habitaciones">RESERVAR</a>
        </div>
      </div>

      <div className='relative flex flex-row flex-wrap justify-between mx-32 mb-20'>
        <section>
          <div>
            <img className='mt-8 w-80' src="/hotel-portada.jpg" alt="" />
          </div>
        </section>
        <section className='w-96 bg-[#FFFFFF] px-12 py-12 mt-[-60px] '>
          <div className='text-justify'>
            <p className='font-bold'>¿QUÉ NOS DISTINGUE</p><br />
            <p>El compromiso por su seguridad y privacidad es lo primordial para nosotros, brindandoles una atencion adecuada y respetuosa asia nuestros huespedes - El compromiso por su seguridad y privacidad es lo primordial- El compromiso por su seguridad y privacidad es lo primordial </p>
          </div>
        </section>
      </div>

      <div className='relative'>
        <img className='w-[100%] h-96' src="/fondo-verde.jpg" alt="" />
        <div className='absolute top-[10%] px-14 w-[100%] flex flex-col'>
          <div className='flex justify-center'>
            <h2 className='text-3xl font-bold'>¿QUÉ OFRECEMOS?</h2>
          </div>
          <div className='flex flex-row flex-wrap justify-between mt-10'>
            <section className='px-6 py-6 w-72 bg-slate-200'>
              <div className='flex flex-row items-center content-center gap-5 mb-4'>
                <img className='w-10' src="/precio-justo.png" alt="" />
                <h2 className='font-bold'>Precio Justo</h2>
              </div>
              <p className='text-justify'>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
            </section>
            <section className='px-6 py-6 w-72 bg-slate-200'>
              <div className='flex flex-row items-center content-center gap-5 mb-4'>
                <img className='w-10' src="/experiencia.png" alt="" />
                <h2 className='font-bold'>Experiencia</h2>
              </div>
              <p className='text-justify'>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
            </section>
            <section className='px-6 py-6 w-72 bg-slate-200'>
              <div className='flex flex-row items-center content-center gap-5 mb-4'>
                <img className='w-10' src="/modernidad.png" alt="" />
                <h2 className='font-bold'>Modernidad</h2>
              </div>
              <p className='text-justify'>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
            </section>
          </div>
        </div>
      </div>

      <div className='flex flex-col my-20 px-36'>
        <div className='flex justify-center'>
          <h2 className='text-3xl font-bold'>Recomendaciones</h2>
        </div>
        <div className='flex flex-row flex-wrap justify-between mt-16'>
          <section className='bg-[#e1e0e0ca] px-2 py-2 rounded-xl border-1'>
            <img className='w-56' src="/hotel-doscamas.jpg" alt="" />
            <div className='flex flex-col items-center mt-4'>
              <p className='mb-8 font-bold'>Doble cama</p>
              <a className='bg-[#5cb16e] mb-4 px-5 py-1' href="">Reservar</a>
            </div>
          </section>
          <section className='bg-[#e1e0e0ca] px-2 py-2 rounded-xl'>
            <img className='w-56' src="/hotel-doscamas.jpg" alt="" />
            <div className='flex flex-col items-center mt-4'>
              <p className='mb-8 font-bold'>Vip</p>
              <a className='bg-[#5cb16e] mb-4 px-5 py-1' href="">Reservar</a>
            </div>
          </section>
          <section className='bg-[#e1e0e0ca] px-2 py-2 rounded-xl'>
            <img className='w-56' src="/hotel-doscamas.jpg" alt="" />
            <div className='flex flex-col items-center mt-4'>
              <p className='mb-8 font-bold'>Presidencial</p>
              <a className='bg-[#5cb16e] mb-4 px-5 py-1' href="">Reservar</a>
            </div>
          </section>
        </div>
      </div>

      <div className='flex flex-row justify-between mx-32 mt-40 mb-36'>
        <div >
          <iframe className='w-[550px] h-[300px] my-5' src="https://goo.gl/maps/uNkM3Uror6WWmcct6" ></iframe>
        </div>
        <div className='bg-[#e1e1e176] border-solid border-[1px] border-slate-600'>
          <div className='px-5 py-10'>
            <h2 className='mb-10 font-bold text-center'>EL MIRADOR TORRE TORRE</h2>
            <p className='mb-6'><strong>Ubicacion: </strong>Jr.Torre torre 202-Huancayo</p>
            <p className='mb-6'><strong>Contacto: </strong>+51 998 602 811</p>
            <p className='mb-6'><strong>Email: </strong>miradortorretorre_hotel@gmail.com</p>
            <p><strong>Horario de apertura</strong><br />lun - Dom: 24 horas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
