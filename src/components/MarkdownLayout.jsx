import Link from 'next/link'

import { Prose } from '@/components/Prose'
import TableOfContents from './TableOfContents'

// @/markdoc-loader/loader imports this component and passes in the props
// The main motivation to generate a jsx component for each .md file over
// dynamic routes with static paths is so that HMR works
export default function MarkdownLayout({
  children,
  title,
  section,
  previousPage,
  nextPage,
  tableOfContents,
  filepath,
}) {
  return (
    <>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <article>
          {(title || section) && (
            <header className="mb-9 space-y-1">
              {section && (
                <p className="font-display text-sm font-medium text-storj-blue-700">
                  {section.title}
                </p>
              )}
              {title && (
                <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                  {title}
                </h1>
              )}
            </header>
          )}
          <Prose>{children}</Prose>
        </article>
        <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
          {previousPage && previousPage.href && (
            <div>
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Previous
              </dt>
              <dd className="mt-1">
                <Link
                  href={previousPage.href}
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span aria-hidden="true">&larr;</span> {previousPage.title}
                </Link>
              </dd>
            </div>
          )}
          {nextPage && nextPage.href && (
            <div className="ml-auto text-right">
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Next
              </dt>
              <dd className="mt-1">
                <Link
                  href={nextPage.href}
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  {nextPage.title} <span aria-hidden="true">&rarr;</span>
                </Link>
              </dd>
            </div>
          )}
        </dl>
      </div>
      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <TableOfContents
          tableOfContents={tableOfContents}
          filepath={filepath}
        />
      </div>
    </>
  )
}