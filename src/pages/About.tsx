import React from 'react'

const About = () => {
  return (
    <div className='pb-10'>
      <img className='w-full h-auto m-auto' src="/about-hero.png" alt="hero" />
      <div className='grid w-10/12 gap-5 m-auto mt-5'>
        <section className='flex flex-col-reverse lg:flex-row lg:gap-16 border-'>
          <img className='h-auto m-auto w-fullh' src="/about01.png" alt="about01" />
          <div className='flex flex-col gap-5 lg:-mt-16 lg:bg-white lg:p-5'>
            <h2 className='font-bold '>SOBRE NOSOTROS</h2>
            <div>
              <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
              <p>En Mirador Hotel, contamos con modernas habitaciones equipadas y finamente decoradas con un estilo elegante y acogedor, tratando de brindar un ambiente cálido, especial para el descanso y relajación.</p>
            </div>
          </div>
        </section>
        <section className='lg:flex lg:flex-row lg:gap-16'>
          <div className='flex flex-col gap-5'>
            <h2 className='relative font-bold'>NUESTRA MISIÓN <span className='border__bottom'></span></h2>
            <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
          </div>
          <img className='h-auto m-auto w-fullh' src="/about02.png" alt="about02" />
        </section>
        <section className='flex flex-col-reverse lg:flex-row lg:gap-16'>
          <img className='h-auto m-auto w-fullh' src="/about03.png" alt="about03" />
          <div className='flex flex-col gap-5'>
            <h2 className='relative font-bold'>NUESTRA VISIÓN <span className='border__bottom'></span></h2>
            <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
          </div>
        </section>
        <section className='lg:flex lg:flex-row lg:gap-16'>
          <div className='flex flex-col gap-5'>
            <h2 className='relative font-bold'>NUESTROS VALORES <span className='border__bottom'></span></h2>
            <p>Somos una Empresa Huancaina que brinda servicios de hotelería a instituciones de alcance regional, nacional e internacional así como a turistas en general.</p>
          </div>
          <img className='h-auto m-auto w-fullh' src="/about04.png" alt="about04" />
        </section>
      </div >
    </div>
  )
}

export default About