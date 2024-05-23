import Page from './[...slug]'
import { getStaticProps as sharedGetStaticProps } from './[...slug]'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const func = sharedGetStaticProps.bind(this)
  return func(ctx)
}

export default Page
