'use client'
import { Toc } from 'types/Toc'
import { useEffect, useState } from 'react'

interface TOCInlineProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  exclude?: string | string[]
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   exclude = '',
 * }
 *
 */
const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = '',
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const activeHeadingUlr = useActiveHeading(filteredToc)

  return (
    <div className="hidden sm:contents">
      <div className="absolute left-full ml-16 h-full w-[250px] pt-16">
        <ul className="sticky top-[0] mr-4 py-4 text-sm font-medium leading-relaxed">
          {filteredToc.length > 1 &&
            filteredToc.map((heading) => (
              <li
                key={heading.value}
                className={`${heading.depth >= indentDepth ? 'ml-5' : ''} ${
                  activeHeadingUlr === heading.url ? 'text-primary' : 'text-black dark:text-white'
                }`}
              >
                <a className="text-primary-500" href={heading.url}>
                  {heading.value}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
const useActiveHeading = (headings: any) => {
  const [activeHeadingUlr, setActiveHeading] = useState(null)
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.pageYOffset === 0) {
        return setActiveHeading(null)
      }

      let headingBoxes = headings.map(({ url }: any) => {
        const elem: any = document.querySelector(`${url}`)
        return { id: url, box: elem.getBoundingClientRect() }
      })

      const TOP_OFFSET = 120
      let firstHeadingInViewport = headingBoxes.find(({ box }: any) => {
        return box.bottom > TOP_OFFSET && box.top < window.innerHeight
      })

      if (!firstHeadingInViewport) {
        const reversedBoxes = [...headingBoxes].reverse()

        firstHeadingInViewport = reversedBoxes.find(({ box }) => {
          return box.bottom < TOP_OFFSET
        })
      }

      if (!firstHeadingInViewport) {
        setActiveHeading(null)
      } else if (firstHeadingInViewport.id !== activeHeadingUlr) {
        setActiveHeading(firstHeadingInViewport.id)
      }
    }, 500)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeHeadingUlr, headings])

  return activeHeadingUlr
}
const throttle = (func: any, limit: any) => {
  let lastFunc: any
  let lastRan: any
  return function () {
    // @ts-ignore
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}
export default TOCInline
