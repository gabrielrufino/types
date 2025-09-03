export type Email<
  Domain extends string = `${string}.${string}`,
> = `${string}@${Domain}`

export type GmailEmail = Email<'gmail.com'>
