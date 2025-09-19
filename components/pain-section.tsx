import { Card, CardContent } from "@/components/ui/card"

export function PainSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
          Você está <span className="text-yellow-400">PERDENDO DINHEIRO</span> todos os dias!
        </h2>

        <p className="text-xl text-center mb-12 text-white text-balance">
          Enquanto você distribui panfletos tradicionais, seus concorrentes estão{" "}
          <span className="text-yellow-400">roubando seus clientes</span>...
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-white/30 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Frustração Total</h3>
              <p className="text-white">
                Você gasta <span className="text-yellow-400">R$ 500, R$ 1000</span> ou mais em panfletos e vê{" "}
                <span className="text-yellow-400">90% indo direto para o lixo</span>. É dinheiro jogado fora!
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/30 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Zero Retorno</h3>
              <p className="text-white">
                Seus panfletos são <span className="text-yellow-400">ignorados, amassados e descartados</span> em
                segundos. <span className="text-yellow-400">Nenhum cliente novo</span>, nenhuma venda extra.
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/30 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Concorrência Ganha</h3>
              <p className="text-white">
                Enquanto você <span className="text-yellow-400">desperdiça dinheiro</span>, seus concorrentes estão
                conquistando os <span className="text-yellow-400">clientes que deveriam ser seus</span>.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gray-900/80 border border-yellow-400/30 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            ⏰ <span className="text-yellow-400">CADA DIA SEM AGIR</span> É MAIS DINHEIRO PERDIDO!
          </h3>
          <p className="text-lg">
            Pare de <span className="text-yellow-400">jogar dinheiro no lixo</span> junto com seus panfletos
            tradicionais!
          </p>
        </div>
      </div>
    </section>
  )
}
