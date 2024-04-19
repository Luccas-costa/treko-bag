import React from "react";
import Image from "next/image";

export default function Transicao2() {
  return (
    <div className='bg-yellow1'>
      <Image
        src='/book.svg'
        alt='ondas de transiçao'
        width={2000}
        height={100}
      />
    </div>
  );
}
