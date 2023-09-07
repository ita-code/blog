import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
  content?: string
}

const Tag = ({ text, content }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="ml-2 inline-flex items-center whitespace-nowrap rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 hover:text-primary-500 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:text-primary-400">
        # {text.split(' ').join('-')}
        {content}
      </a>
    </Link>
  )
}

export default Tag
