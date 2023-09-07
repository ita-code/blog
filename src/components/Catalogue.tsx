// 目录导航
import { Toc } from 'types/Toc'
import { useEffect, useState } from 'react'

interface CatalogueProps {
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
 * @param {CatalogueProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   exclude = '',
 * }
 *
 */
const Catalogue = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = '',
}: CatalogueProps) => {
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
        <div className="sticky top-[0] mr-4 py-10 text-sm font-medium leading-relaxed">
          <ul className="group/toc better-scrollbar max-h-[50vh] list-none overflow-y-auto">
            {filteredToc.length > 1 &&
              filteredToc.map((heading) => (
                <li key={heading.value}>
                  <a
                    href={heading.url}
                    className={`group relative my-1 flex max-w-full items-center gap-2 truncate text-xs leading-loose text-zinc-500/80 hover:text-zinc-800 dark:hover:text-zinc-50 ${
                      activeHeadingUlr === heading.url ? '!text-zinc-800 dark:!text-zinc-50' : ''
                    }`}
                  >
                    <div className="w-[20px]">
                      <div
                        className={`h-[4px] rounded-full bg-black/10 transition duration-500 group-hover:bg-black/50 dark:bg-white/10 dark:group-hover:bg-white/50 ${
                          activeHeadingUlr === heading.url ? '!bg-black/50 dark:!bg-white/50' : ''
                        }`}
                        style={{ width: heading.depth > 2 ? 10 : 16 }}
                      ></div>
                    </div>
                    <span
                      className={`truncate opacity-0 transition duration-500 group-hover/toc:opacity-100 ${
                        heading.depth !== 2 ? 'ml-2' : ''
                      } ${heading.depth === 2 ? 'font-medium' : ''} ${
                        activeHeadingUlr === heading.url ? 'opacity-100' : ''
                      }`}
                    >
                      {heading.value}
                    </span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
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
export default Catalogue
