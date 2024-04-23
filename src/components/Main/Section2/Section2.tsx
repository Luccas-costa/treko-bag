import React from "react";
import Image from "next/image";
import Cards from "./Cards/Cards";

export default function Section2() {
  return (
    <div className='flex flex-col bg-brown1 w-full h-full'>
      <div className='pl-14 pr-14 pb-28'>
        <div className='flex flex-col 2xl:mt-16 xl:mt-12 md:mt-10 sm:mt-8 mt-6'>
          <div className='text-5xl font-bold text-green1 text-center'>
            Nosso impacto
          </div>
          <span className='text-xl text-gray-400 text-center'>
            Salvando nosso Planeta
          </span>
        </div>

        <div className='flex flex-wrap justify-evenly items-center gap-12 mt-12'>
          <Cards
            image='/teste1.png'
            title='Produtos escolhidos a mão'
            description='Melhor qualidade a seu serviço'
          />
          <Cards
            image='/teste2.png'
            title='Produtos voltados a saúde '
            titleaposbr='e bem estar'
            description='maior conforto e praticidade'
          />
          <Cards
            image='/teste3.png'
            title='Uma peça única para seu '
            titleaposbr='Moda Style'
            description='estampas criativas escolhidas pelo '
            descriptionaposbr='nosso time'
          />
        </div>
      </div>
    </div>
  );
}
