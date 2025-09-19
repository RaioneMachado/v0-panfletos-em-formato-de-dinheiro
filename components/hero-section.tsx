"use client"

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="gradient-bg-hero text-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance leading-tight">
          Seus clientes podem até jogar panfletos no lixo...
          <br />
          <span className="text-yellow-300">mas ninguém joga dinheiro fora!</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-balance opacity-90 px-2">
          Descubra o panfleto mais irresistível do mercado: feito em formato de dinheiro, para sua empresa nunca mais
          ser ignorada.
        </p>

        <div className="flex justify-center items-center mb-8 md:mb-12 px-4">
          <button
            onClick={scrollToPricing}
            className="bg-black text-yellow-400 px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-900 transition-colors duration-300 shadow-2xl w-full sm:w-auto"
          >
            QUERO MEU PANFLETO AGORA! 💰
          </button>
        </div>
      </div>
    </section>
  )
}
