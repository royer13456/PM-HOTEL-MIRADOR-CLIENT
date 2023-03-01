
const ContactUsPage = () => {
  const handleEmail = () => {
    alert("Email sent");
  }

  return (
    <div className="border md:w-5/12 m-auto">
      <h2 className="uppercase underline text-center font-bold md:text-2xl">formulario de contacto</h2>
      <form className="flex flex-col gap-4 p-5">
        <input type="text" name="" placeholder="Apellidos y nombres" className="border px-3 py-2 rounded-lg outline-none" />
        <input type="text" name="" placeholder="Correo electrónico" className="border px-3 py-2 rounded-lg outline-none" />
        <input type="text" name="" placeholder="Número de celular" className="border px-3 py-2 rounded-lg outline-none" />
        <textarea name="" cols={30} rows={5} placeholder="Mensajge" className="border px-3 py-2 rounded-lg outline-none"></textarea>
        <button className="w-full text-white main-color py-2 rounded-lg text-lg font-semibold"
          onClick={handleEmail}
        >Enviar</button>
      </form>
    </div >
  )
}

export default ContactUsPage