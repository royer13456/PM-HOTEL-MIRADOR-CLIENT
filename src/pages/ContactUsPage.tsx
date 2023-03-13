
const ContactUsPage = () => {

  const handleEmail = () => {
    alert("Email sent");
  }

  return (
    <div className="px-5 py-10 m-auto mt-10 border md:w-5/12 md:mt-16">
      <h2 className="font-bold text-center underline uppercase md:text-2xl">formulario de contacto</h2>
      <form className="flex flex-col gap-4 p-5" onSubmit={(e) => { e.preventDefault(); handleEmail() }}>
        <input type="text" name="" placeholder="Apellidos y nombres" className="px-3 py-2 border rounded-lg outline-none" />
        <input type="text" name="" placeholder="Correo electrónico" className="px-3 py-2 border rounded-lg outline-none" />
        <input type="text" name="" placeholder="Número de celular" className="px-3 py-2 border rounded-lg outline-none" />
        <textarea name="" cols={30} rows={5} placeholder="Mensaje" className="px-3 py-2 border rounded-lg outline-none"></textarea>
        <button className="w-full py-2 text-lg font-semibold text-white rounded-lg main-color"
        >Enviar</button>
      </form>
    </div >
  )
}

export default ContactUsPage