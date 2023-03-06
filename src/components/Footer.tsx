import logo from '/logo.jpg';

const Footer = () => {
  return (
    <div className='grid items-center md:grid-cols-3 bg-zinc-900 text-white py-5 m-auto text-center'>

      <section className='flex flex-col gap-3'>
        <img src={logo} alt="logo" className='w-16 md:w-20 rounded-md m-auto' />
        <div className='m-auto flex gap-3'>
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
        <h3 className='text-lg mb-3'>Libro de reclamaciones</h3>
        <a href="#"><img src="/book.svg" alt="libro de reclamaciones" className='w-14 invert m-auto' /></a>
      </section>
    </div>
  )
}

export default Footer