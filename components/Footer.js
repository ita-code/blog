import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div className="">
          <NowPlayingFooter />
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="https://parthdesai.vercel.app" className="link-underline">
              {siteMetadata.author}
              {` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          {/* <div className="mx-1">
            <Link href="https://qod.shakiltech.com/" className="link-underline">
              {currentDayName()}
            </Link>
          </div>
          {`•`} */}
          <div className="mx-1">
            <Link href="/about" className="link-underline">
              {siteMetadata.title}
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href="https://parthdesai.vercel.app" className="link-underline">
              Parth{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
