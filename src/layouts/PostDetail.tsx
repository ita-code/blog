import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import SocialIcon from '@/components/social-icons'
import Tag from '@/components/Tag'
import TOCInline from '@/components/TOCInline'
import { Toc } from 'types/Toc'

interface Props {
  toc: Toc
  frontMatter: PostFrontMatter
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}
const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}
export default function PostDetail({ frontMatter, next, prev, children, toc }: Props) {
  const { slug, date, title, readingTime, tags } = frontMatter
  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article className="relative">
        <TOCInline asDisclosure={false} toc={toc} />
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex justify-center gap-5 py-4">
                <span className="flex items-center gap-1.5">
                  <SocialIcon href="#" target="" kind="datas" size={5} />
                  <dt className="sr-only">发布时间</dt>
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString('zh-CN', postDateTemplate)}
                  </time>
                </span>
                <span className="flex items-center gap-1.5">
                  <SocialIcon href="#" target="" kind="times" size={5} />
                  {readingTime.text}
                </span>
              </div>
              {tags && (
                <div className="mt-3 flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
