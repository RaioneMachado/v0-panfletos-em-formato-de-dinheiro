import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SolutionSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-balance text-white">
          A <span className="text-yellow-400">SOLUÇÃO</span> que vai{" "}
          <span className="text-yellow-400">TRANSFORMAR</span> seu marketing local!
        </h2>

        <p className="text-xl text-center mb-12 text-balance text-white">
          Panfletos em formato de <span className="text-yellow-400 font-bold">DINHEIRO</span> - A única coisa que{" "}
          <span className="text-yellow-400 font-bold">NINGUÉM JOGA FORA!</span>
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              🎯 Como funciona a <span className="text-yellow-400">MÁGICA:</span>
            </h3>
            <ul className="space-y-4 text-lg text-white">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">1.</span>
                <span>
                  Você recebe o <span className="text-yellow-400 font-bold">template</span> em formato de cédula de
                  dinheiro
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">2.</span>
                <span>
                  <span className="text-yellow-400 font-bold">Personaliza</span> com os dados da sua empresa
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">3.</span>
                <span>
                  <span className="text-yellow-400 font-bold">Imprime e distribui</span> como se fosse dinheiro de
                  verdade
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">4.</span>
                <span>
                  As pessoas <span className="text-yellow-400 font-bold">PARAM, OLHAM e GUARDAM</span> seu panfleto!
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-red-500/50">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-red-400 mb-2">❌ PANFLETO TRADICIONAL</h4>
                <p className="text-white text-sm">A pessoa pega e joga fora!</p>
              </div>
              <div className="relative">
                <img
                  src="/images/panfleto-tradicional.png"
                  alt="Panfleto tradicional sendo jogado fora"
                  className="w-full h-64 object-contain rounded-lg bg-white/5"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">VS</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-500/50">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-green-400 mb-2">✅ PANFLETO DINHEIRO</h4>
                <p className="text-white text-sm">Ninguém joga dinheiro fora!</p>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VERSO%20%282%29-1zHL6LtEEAJMAd3ZigeiAhO82qvGST.png"
                  alt="Panfleto em formato de dinheiro"
                  className="w-full h-64 object-contain rounded-lg bg-white/5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">👀</div>
              <p className="font-bold text-white">
                Atenção <span className="text-yellow-400">Garantida</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🤔</div>
              <p className="font-bold text-white">
                Gera <span className="text-yellow-400">Curiosidade</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <p className="font-bold text-white">
                Diferencia da <span className="text-yellow-400">Concorrência</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">💰</div>
              <p className="font-bold text-white">
                Vira <span className="text-yellow-400">Cupom de Desconto</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">📈</div>
              <p className="font-bold text-white">
                Alto <span className="text-yellow-400">Impacto</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 md:px-12 py-4 md:py-6 text-sm sm:text-base md:text-xl w-full sm:w-auto"
          >
            <span className="block sm:hidden text-center leading-tight">
              🚀 QUERO TRANSFORMAR
              <br />
              MEUS PANFLETOS AGORA!
            </span>
            <span className="hidden sm:block">🚀 QUERO TRANSFORMAR MEUS PANFLETOS AGORA!</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
