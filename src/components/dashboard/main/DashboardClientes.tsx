import React, { useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";

// Extende o Day.js com o plugin relativeTime e define o locale
dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface DashboardClientesProps {
  id: string;
  nome: string;
  email: string;
  dataEntrada: string;
  dataCompra: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function DashboardClientes({
  id,
  nome,
  email,
  dataEntrada,
  dataCompra,
  isOpen,
  onToggle,
}: DashboardClientesProps) {
  const [openItens, setopenItens] = useState(false)
  const [openEndereco, setopenEndereco] = useState(false)
  const [openEmail, setopenEmail] = useState(false)

  const format = "DD/MM/YYYY";
  const entradaDate = dayjs(dataEntrada, format);
  const compraDate = dayjs(dataCompra, format);

  const relativeEntrada = entradaDate.toNow(true);
  const relativeCompra = compraDate.toNow(true);

  const handleropenItens = () => {
    setopenItens(!openItens)
    setopenEndereco(false)
    setopenEmail(false)
  }

  const handleropenEndereco = () => {
    setopenEndereco(!openEndereco)
    setopenItens(false)
    setopenEmail(false)
  }

  const handleropenEmail = () => {
    setopenEmail(!openEmail)
    setopenItens(false)
    setopenEndereco(false)
  }

  return (
    <>
      <div className='h-[80px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 flex items-center text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative'>
        <input
          type='checkbox'
          className='w-4 h-4 appearance-none bg-transparent border border-zinc-700 rounded shadow-lg checked:bg-[#849994] dash7:mr-8 dash8:mr-4 dash8_5:mr-3 dash9:mr-2 dash10:mr-1  dash10_5:mr-1'
        ></input>
        <div className='dash3:w-[10rem] dash4:w-[7rem] dash5:w-[6rem] dash6:w-[5rem] dash6:text-base dash7:w-[5rem] dash8:w-[5rem] dash8_5:w-[3.8rem] dash7:text-sm dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] dash9:w-[4rem] dash10:w-[3rem] dash10_5:w-[3rem]  text-zinc-400'>
          {id}
        </div>
        <div className='dash1:w-[28rem] dash2:w-[19rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[12rem] dash6:text-base dash7:w-[10.5rem] dash7:text-sm dash8:w-[9rem] dash8_5:w-[9rem] dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] dash9:w-[8.5rem] dash9_5:w-[8rem] dash10:w-[7.6rem] dash10_5:w-[4rem] flex flex-col '>
          <div>{nome}</div>
          <div className='text-zinc-500 dash7:text-sm dash8:text-xs dash10_5:text-[10px] dash10:block dash10_5:hidden'>
            {email}
          </div>
        </div>
        <div className='dash1:w-[22.4rem] dash2:w-[18rem] dash3:w-[15rem] dash4:w-[14rem] dash5:w-[13rem] dash6:w-[10rem] dash6:text-base dash7:w-[8rem] dash7:text-sm dash8:w-[7.5rem] dash9:w-[7.5rem] dash9_5:w-[6.5rem] dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] dash10:w-[5rem] dash10_5:w-[5.3rem] text-zinc-400'>
          {relativeEntrada} atrás
        </div>
        <div className='dash6:text-base dash7:text-sm dash9:text-xs dash10:text-[11px] dash10_5:text-[11px] text-zinc-400'>
          {relativeCompra} atrás
        </div>
        <button className='dash9_5:w-8 dash9_5:h-8 dash10:w-6 dash10:h-6 border absolute dash7:right-5 dash8:right-[0.6rem] dash9:right-2 dash10:right-2 dash10_5:right-[6px] border-zinc-700 dash9_5:rounded-lg dash10:rounded-md dash10_5:rounded-md flex items-center justify-center z-1 bg-zinc-900'
          onClick={onToggle}
        >
          {isOpen ? (
            <CaretUp size={20} weight='regular' />
          ) : (
            <CaretDown size={20} weight='regular' />
          )}
        </button>
      </div>
      {isOpen && (
        <div className='h-[50px] w-full border-y border-zinc-700 dash8:px-5 dash8_5:px-2 dash9:px-2 dash10:px-2 dash10_5:px-2 flex items-center justify-evenly text-zinc-300 font-semibold shadow-lg shadow-zinc-900 relative'>
            <button className="flex items-center" onClick={handleropenItens}>
              <div>Itens</div>
              <div>
                {openItens ? (
                  <CaretUp size={15} weight='bold' />
                ) : (
                  <CaretDown size={15} weight='bold' />
                )}
              </div>
            </button>
            <button className="flex items-center" onClick={handleropenEndereco}>
              <div>Endereço</div>
              <div>
                {openEndereco ? (
                  <CaretUp size={15} weight='bold' />
                ) : (
                  <CaretDown size={15} weight='bold' />
                )}
              </div>
            </button>
            <button className="flex items-center" onClick={handleropenEmail}>
              <div>Email</div>
              <div>
                {openEmail ? (
                  <CaretUp size={15} weight='bold' />
                ) : (
                  <CaretDown size={15} weight='bold' />
                )}
              </div>
            </button>
        </div>
      )}

    </>
  );
}
