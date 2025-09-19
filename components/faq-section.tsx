import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects matching testimonials */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Perguntas Frequentes</h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-white/20 rounded-lg px-6 bg-white/10 backdrop-blur-sm">
            <AccordionTrigger className="text-left font-semibold text-white">
              Funciona para qualquer tipo de negócio?
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              Sim! Funciona para restaurantes, lanchonetes, academias, salões, lojas, clínicas, oficinas e qualquer
              negócio local que queira atrair mais clientes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-white/20 rounded-lg px-6 bg-white/10 backdrop-blur-sm">
            <AccordionTrigger className="text-left font-semibold text-white">
              É só digital ou recebo impresso?
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              Você recebe o arquivo PDF em alta qualidade para imprimir onde quiser. Recomendamos papel couché ou
              similar para melhor resultado visual.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-white/20 rounded-lg px-6 bg-white/10 backdrop-blur-sm">
            <AccordionTrigger className="text-left font-semibold text-white">
              Como personalizo no pacote básico?
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              Você recebe um tutorial completo em vídeo mostrando como editar o PDF com programas gratuitos como Canva
              ou Adobe Reader.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-white/20 rounded-lg px-6 bg-white/10 backdrop-blur-sm">
            <AccordionTrigger className="text-left font-semibold text-white">
              Em quanto tempo recebo o PDF?
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              Pacote Básico: Entrega imediata após o pagamento. Pacote Premium: Até 24 horas após envio dos seus dados.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-white/20 rounded-lg px-6 bg-white/10 backdrop-blur-sm">
            <AccordionTrigger className="text-left font-semibold text-white">
              Posso usar quantas vezes quiser?
            </AccordionTrigger>
            <AccordionContent className="text-white/80">
              Sim! Após a compra, o arquivo é seu para sempre. Pode imprimir quantas cópias precisar e usar em todas as
              suas campanhas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-white/20 rounded-lg px-6 bg-white/10 backdrop-blur-sm">
            <AccordionTrigger className="text-left font-semibold text-white">Tem garantia?</AccordionTrigger>
            <AccordionContent className="text-white/80">
              Sim! Garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
