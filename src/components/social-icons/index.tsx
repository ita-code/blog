import Mail from './mail.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Juejin from './juejin.svg'
import Zhihu from './zhihu.svg'
import Csdn from './csdn.svg'
import datas from './datas.svg'
import times from './times.svg'

// Icons taken from: https://simpleicons.org/
// https://www.iconfont

const components = {
  mail: Mail,
  github: Github,
  juejin: Juejin,
  zhihu: Zhihu,
  linkedin: Linkedin,
  twitter: Twitter,
  csdn: Csdn,
  datas,
  times,
}

const SocialIcon = ({ kind, href, target = '_blank', size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target={target}
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
