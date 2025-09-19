"use client"

import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Pizzaria do Carlos",
      rating: 5,
      text: "Meus panfletos em formato de dinheiro aumentaram as vendas em 300%! As pessoas realmente param para olhar e não jogam fora.",
      location: "São Paulo, SP",
    },
    {
      name: "Maria Santos",
      company: "Salão Beleza Total",
      rating: 5,
      text: "Incrível! Nunca vi tanto retorno com panfletos. O formato de dinheiro é genial, todo mundo guarda!",
      location: "Rio de Janeiro, RJ",
    },
    {
      name: "João Pereira",
      company: "Oficina JP Auto",
      rating: 5,
      text: "Distribui 1000 panfletos e tive mais de 200 ligações! O investimento se pagou na primeira semana.",
      location: "Belo Horizonte, MG",
    },
    {
      name: "Ana Costa",
      company: "Restaurante Sabor Caseiro",
      rating: 5,
      text: "Meus clientes adoraram! Muitos vieram só por causa do panfleto em formato de dinheiro. Vendas dispararam!",
      location: "Curitiba, PR",
    },
    {
      name: "Roberto Lima",
      company: "Academia Força Total",
      rating: 5,
      text: "Consegui 150 novos alunos em 2 meses! O panfleto de dinheiro chama muito mais atenção que os tradicionais.",
      location: "Fortaleza, CE",
    },
    {
      name: "Fernanda Oliveira",
      company: "Loja Moda & Estilo",
      rating: 5,
      text: "Resultado surpreendente! As pessoas guardam o panfleto como se fosse dinheiro de verdade. Genial!",
      location: "Porto Alegre, RS",
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Veja o que nossos <span className="text-yellow-400">CLIENTES</span> estão dizendo!
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Mais de <span className="text-yellow-400 font-bold">10.000 empresários</span> já transformaram seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-yellow-400/30"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-sm md:text-base mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-yellow-400 font-bold text-base md:text-lg">{testimonial.name}</h4>
                <p className="text-gray-300 text-sm font-medium">{testimonial.company}</p>
                <p className="text-gray-400 text-xs mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Seja o próximo SUCCESS STORY!</h3>
            <p className="text-black/80 text-base md:text-lg mb-6">
              Junte-se a milhares de empresários que já transformaram seus negócios
            </p>
            <button
              onClick={() => {
                const pricingSection = document.getElementById("pricing-section")
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-black text-yellow-400 px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-900 transition-colors duration-300 shadow-2xl"
            >
              QUERO MEU PANFLETO AGORA! 💰
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
