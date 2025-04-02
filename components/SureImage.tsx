import { ImageProps } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

export default function SureImage({ className, ...props }: ImageProps) {
  return (
    <Image
      width={props?.width ?? 0}
      height={props?.height ?? 0}
      sizes='100vw'
      className={cn('w-[auto] h-[auto]', className)}
      {...props}
      alt=''
    />
  );
}
