import { Card, CardContent } from "@/components/ui/card"

export function EasyEditSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects matching testimonials */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance text-white">
          "Mas é <span className="text-red-400">DIFÍCIL</span> de editar?"
        </h2>

        <div className="text-6xl md:text-8xl font-bold text-green-400 mb-8">NÃO!</div>

        <p className="text-xl md:text-2xl mb-12 text-white text-balance">
          É <span className="text-yellow-400 font-bold">SUPER SIMPLES</span> editar o PDF!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">1. ABRA NO CELULAR</h3>
              <p className="text-white/80">
                Funciona em qualquer celular ou computador. Não precisa de programas especiais!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-bold text-white mb-3">2. CLIQUE E EDITE</h3>
              <p className="text-white/80">
                Clique nos campos e digite suas informações. É como editar um texto no WhatsApp!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🖨️</div>
              <h3 className="text-xl font-bold text-white mb-3">3. SALVE E IMPRIMA</h3>
              <p className="text-white/80">Salve o arquivo e imprima quantas cópias quiser. Pronto para distribuir!</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-green-400 mb-4">✅ GARANTIA DE SIMPLICIDADE</h3>
          <p className="text-lg text-white">
            Se você não conseguir editar em <span className="text-yellow-400 font-bold">5 minutos</span>, nós fazemos a
            personalização <span className="text-yellow-400 font-bold">GRATUITAMENTE</span> para você!
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl text-white mb-6">
            Mais de <span className="text-yellow-400 font-bold">10.000 pessoas</span> já editaram com sucesso!
          </p>
          <div className="flex justify-center space-x-2 text-3xl">⭐⭐⭐⭐⭐</div>
          <p className="text-white/80 mt-2">Avaliação média: 4.9/5</p>
        </div>
      </div>
    </section>
  )
}
