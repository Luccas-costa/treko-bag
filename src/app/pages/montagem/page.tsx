import React from "react";
import Image from "next/image";

import style from "./perguntas.module.css";

import BotaoProximaPage from "@/components/montagem/perguntas/BotaoProximaPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teko Bag | montagem",
  description: "montagem de bags",
};

export default function Apresentacao() {
  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justyfy-center lg:p-6 xl:p-14 relative ${style.background} `}
    >
      <div className='p-3 2xl:w-1/4 md:w-1/2 w-3/4 border bg-banner5/85 border-zinc-950 rounded-lg flex flex-col items-center justyfy-center shadow-lg my-auto'>
        <div className='pt-6 pb-4'>
          <Image
            src='/logo-transparente.png'
            width={100}
            height={100}
            alt='mascote'
          />
        </div>
        <div className='text-center text-xl font-medium'>
          Para encontrar a <span className='font-bold'>teko bag</span> ideal a
          sua necessidade, faremos 6 perguntas rapidas.
        </div>
        <div className='mt-6 text-center font-semibold lg:text-lg sm:text-base text-xs text-zinc-800'>
          Prosseguir para primeira pergunta
        </div>
        <BotaoProximaPage pergunta={1} disabled={false} />
      </div>
    </div>
  );
}
