import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev,allPosts }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
  
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">

              <div>
                <PageTitle>{title}</PageTitle>

                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6

            
            "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-2 pb-10 xl:pt-2 xl:border-b xl:border-gray-200 xl:dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2 my-10">
              <dt className="sr-only">Authors</dt>
              <p class="text-sm font-semibold text-gray-700 dark:text-gray-200 pt-2 pb-5 text-center">About Me</p>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2 pl-2">
                    <img src={siteMetadata.image} alt="avatar" className="w-10 h-10 rounded-full" />
                    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{siteMetadata.author}</dd>
                      {typeof siteMetadata.twitter === 'string' && (
                        <>
                          <dt className="sr-only">Twitter</dt>
                          <dd>
                            <Link
                              href={siteMetadata.twitter}
                              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              {siteMetadata.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          </dd>
                        </>
                      )}
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">

              </div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2 ">
             
             <div class="bg-gray-50 dark:bg-gray-800 px-2">
             {tags && (
                  <div className="py-4 xl:py-2">
                    <h2 className="text-sm text-gray-500 text-center font-semibold dark:text-gray-400 py-2">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag}  class="my-2"/>
                      ))}
                    </div>
                  </div>
                )}

             </div>

             <div class="bg-gray-50 dark:bg-gray-800 px-2 my-10">
              {
                allPosts &&(
                  <>
                  <h2 class="text-sm text-gray-500 text-center font-semibold dark:text-gray-400 py-2">Recent Posts</h2>
                  <ul>
                    {
                      allPosts.map((val,index)=>{
                       return <li key="index" class="text-sm font-semibold py-2 text-gray-700 dark:text-gray-200">{val.title}</li>
                      })
                    }
                  </ul>
                  </>

                )
              }

              </div>

                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
