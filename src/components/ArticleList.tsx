// 文章列表
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'

export default function ArticleList({ slug, date, title, summary, tags, images }: PostFrontMatter) {
  return (
    <li className="py-6">
      <article>
        <div className="space-y-2 xl:items-start xl:gap-5 xl:space-y-0">
          <div className="relative z-10 order-first mb-3 flex items-center pl-3 text-sm text-zinc-400 dark:text-zinc-500">
            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            </span>
            {formatDate(date)}
          </div>
          {/* <dd className="sr-only">发布时间</dd> */}
          {/* <time dateTime={date}>{formatDate(date)}</time> */}
          <div className="space-y-4 xl:col-span-3">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                    {title}
                  </Link>
                </h2>
                <div className="mt-3 flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/blog/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read "${title}"`}
              >
                查看更多 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}
