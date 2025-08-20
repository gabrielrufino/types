import type { DeepPartial } from './index'

{
  /*
    DeepPartial
  */

  interface User {
    id: number
    name: string
    address: {
      street: string
      city: string
    }
  }

  const deepPartialUser: DeepPartial<User> = {
    name: 'Gabriel',
    address: {
      city: 'São Paulo',
    },
  }

  console.log({ deepPartialUser })
}
