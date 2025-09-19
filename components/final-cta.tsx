export function FinalCta() {
  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background effects matching testimonials */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance leading-tight text-white">
          Não deixe seus <span className="text-yellow-400">concorrentes</span> saírem na frente!
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-balance opacity-90 px-2 text-white">
          Cada dia que você adia é mais <span className="text-yellow-400 font-bold">dinheiro jogado fora</span> com
          panfletos que vão direto para o lixo.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-6 md:mb-8 mx-2">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-yellow-400">🔥 ÚLTIMAS HORAS DA PROMOÇÃO!</h3>
          <p className="text-base sm:text-lg mb-4 md:mb-6 text-white">
            De <span className="line-through text-gray-400">R$ 97,00</span> por apenas{" "}
            <span className="text-yellow-400 font-bold">R$ 49,90 (Premium)</span> ou{" "}
            <span className="text-yellow-400 font-bold">R$ 19,90 (Básico)</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://wa.me/5562993350204?text=Olá! Quero o PACOTE BÁSICO por R$ 19,90"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg w-full sm:w-auto rounded-md inline-flex items-center justify-center transition-colors"
            >
              💰 BÁSICO - R$ 19,90
            </a>
            <a
              href="https://wa.me/5562993350204?text=Olá! Quero o PACOTE PREMIUM por R$ 49,90"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg w-full sm:w-auto rounded-md inline-flex items-center justify-center transition-colors"
            >
              ⭐ PREMIUM - R$ 49,90
            </a>
          </div>
        </div>

        <div className="text-xs sm:text-sm opacity-80 space-y-1 text-white">
          <p>✅ Pagamento 100% seguro</p>
          <p>✅ Garantia de 7 dias</p>
          <p>✅ Suporte completo</p>
        </div>
      </div>
    </section>
  )
}
