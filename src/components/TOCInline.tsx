import { Toc } from 'types/Toc'

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

  return (
    <div className="hidden sm:contents">
      <div className="absolute left-full ml-16 h-full w-[250px] pt-16">
        <ul className="sticky top-[0] mr-4 py-4 text-sm font-medium leading-relaxed">
          {filteredToc.map((heading) => (
            <li key={heading.value} className={`${heading.depth >= indentDepth && 'ml-6'}`}>
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

export default TOCInline
