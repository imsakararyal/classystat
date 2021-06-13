import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="">
      <span class="inline-flex items-center justify-center px-2 py-2 mr-2 text-xs font-bold leading-none text-white bg-blue-300 rounded-full"> # {text.split(' ').join('-')}</span>
       
      </a>
    </Link>
  )
}

export default Tag
