import logo from '/logo.jpg';

const Footer = () => {
  return (
    <div className='grid items-center py-5 m-auto text-center text-white md:grid-cols-3 bg-zinc-900'>

      <section className='flex flex-col gap-3'>
        <img src={logo} alt="logo" className='w-16 m-auto rounded-md md:w-20' />
        <div className='flex gap-3 m-auto'>
          <a href="#"><img src="/socials/facebook.svg" alt="facebook" className='w-6' /></a>
          <a href="#"><img src="/socials/twitter.svg" alt="twitter" className='w-6' /></a>
          <a href="#"><img src="/socials/instagram.svg" alt="instagram" className='w-6' /></a>
          <a href="#"><img src="/socials/youtube.svg" alt="youtube" className='w-6' /></a>
        </div>
      </section>

      <section>
        <p>Tel. 998 602 811</p>
        <p>mirador.torretorre.hotel@gmail.com</p>
      </section>

      <section>
        <h3 className='mb-3 text-lg'>Libro de reclamaciones</h3>
        <a href="#"><img src="/book.svg" alt="libro de reclamaciones" className='m-auto w-14 invert' /></a>
      </section>
    </div>
  )
}

export default Footer