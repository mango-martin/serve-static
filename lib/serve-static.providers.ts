import { Provider } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AbstractLoader } from './loaders/abstract.loader';
import { FastifyLoader } from './loaders/fastify.loader';

export const serveStaticProviders: Provider[] = [
  {
    provide: AbstractLoader,
    useFactory: () => {
      return new FastifyLoader();
    },
    inject: [HttpAdapterHost]
  }
];
