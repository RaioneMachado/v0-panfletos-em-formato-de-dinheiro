"use client"; // Adicione esta linha no topo

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  // Função para rastrear cliques ( mesma do FinalCta )
  const trackWhatsAppClick = (packageType: string, price: string) => {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: `${packageType} WhatsApp Click`,
        content_category: 'Conversion',
        value: parseFloat(price.replace('R$ ', '').replace(',', '.')),
        currency: 'BRL'
      });
    }
  };

  return (
    <section id="pricing-section" className="py-20 px-4 gradient-bg-hero text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Escolha seu pacote e comece HOJE!</h2>

        <p className="text-xl text-center mb-12 text-white/80 text-balance">
          Duas opções para você sair na frente da concorrência
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-blue-400/50 hover:border-blue-400 transition-colors bg-white/10 backdrop-blur-sm">
            <CardHeader className="text-center bg-blue-500/20">
              <CardTitle className="text-2xl text-blue-300">📄 PACOTE BÁSICO</CardTitle>
              <div className="text-sm text-red-400 line-through">De R$ 39,90</div>
              <div className="text-4xl font-bold text-blue-200 mt-2">R$ 19,90</div>
              <p className="text-blue-200">Você mesmo personaliza</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">Template em PDF editável</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">Formato de cédula de dinheiro</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">Tutorial de personalização</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">Suporte por WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">Entrega imediata</span>
                </li>
              </ul>
              <a
                href="https://wa.me/5562993350204?text=Olá! Quero o PACOTE BÁSICO por R$ 19,90"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Básico', '19,90')} // ← Adicione esta linha
                className="w-full bg-green-800 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-green-900 transition-colors duration-300 shadow-2xl min-h-[80px] flex items-center justify-center animate-pulse"
              >
                QUERO MEU PACOTE BÁSICO 💰
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-400/50 hover:border-yellow-400 transition-colors relative bg-white/10 backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              MAIS VENDIDO
            </div>
            <CardHeader className="text-center bg-yellow-500/20">
              <CardTitle className="text-2xl text-yellow-300">⭐ PACOTE PREMIUM</CardTitle>
              <div className="text-sm text-red-400 line-through">De R$ 97,00</div>
              <div className="text-4xl font-bold text-yellow-200 mt-2">R$ 49,90</div>
              <p className="text-yellow-200">Já personalizado para você</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">Tudo do pacote básico</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">
                    <strong>Personalização profissional</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">
                    <strong>Design exclusivo</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">
                    <strong>Revisão ilimitada</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">
                    <strong>Entrega em 24h</strong>
                  </span>
                </li>
              </ul>
              <a
                href="https://wa.me/5562993350204?text=Olá! Quero o PACOTE PREMIUM por R$ 49,90"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Premium', '49,90')} // ← Adicione esta linha
                className="w-full bg-green-800 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-green-900 transition-colors duration-300 shadow-2xl min-h-[80px] flex items-center justify-center animate-pulse"
              >
                QUERO O PACOTE PREMIUM 💰
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 bg-red-600 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">⚡ ATENÇÃO: Oferta por tempo limitado!</h3>
          <p className="text-lg">Preço normal: R$ 97,00 | Hoje apenas R$ 49,90 (Premium)</p>
        </div>
      </div>
    </section>
  )
}
