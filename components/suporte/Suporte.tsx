import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Assunto {
  title: string;
  icone: LiveImage;
}

export interface Props {
  assuntos: Assunto[];
}

function Suporte({
  assuntos,
}: Props) {
  return (
    <section class="container md:w-3/5 px-4 md:px-0 mx-auto">
      <div className="md:w-xl flex flex-wrap justify-center md:gap-10 gap-5 m-auto">
        {assuntos &&
          assuntos.map((assunto) => {
            return assunto && (
              <div class="py-6 md:py-0 md:pb-[40px] md:w-56 w-40 flex flex-col justify-center items-center mt-6">
                <img src={assunto.icone} alt="" />
                <h2 class="text-lg leading-5 font-semibold uppercase">
                  {assunto.title}
                </h2>

                <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Suporte;
