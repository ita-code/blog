import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from '@/components/Image'
import Link from '../components/Link'
import MobileNav from '../components/MobileNav'
import ThemeSwitch from '../components/ThemeSwitch'

export default function Header() {
  return (
    <header className="mx-auto flex max-w-3xl items-center justify-between px-4 py-10 sm:px-6 xl:max-w-3xl xl:px-0">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {siteMetadata.headerLogo && (
                <Image
                  src={siteMetadata.headerLogo}
                  width="38px"
                  height="38px"
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
              )}
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}
