// types
import { AccordionItem } from '@/types'

// flatmate's Desktop Research
// -- Living Cost data
export const desktopResearchLivingCostData: AccordionItem[] = [
  {
    title: 'The December quarter 2022 Rental Report',
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>
            The December quarter 2022 Rental Report indicates that over the
            previous quarter the median rent increased by $20 in metropolitan
            Melbourne to $460 per week but remained stable in regional Victoria
            at $400 per week.
          </li>
          <li>
            The Melbourne Rent Index (MRI) increased by 3.0 per cent in the
            December quarter. In the twelve months to December 2022, the MRI
            increased by 11.8 per cent, the largest annual increase since the
            September quarter 2008.
          </li>
        </ul>
        <p className="text-sm text-neutral-500">
          Victoria State Government (2023). Rental report.{' '}
          <a
            href="https://www.dffh.vic.gov.au/publications/past-rental-reports"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-700 hover:text-indigo-500 inline-flex items-center gap-1"
          >
            View source
            <span aria-hidden>↗</span>
          </a>
        </p>
      </div>
    ),
    defaultOpen: false,
  },
  {
    title:
      'Review of the Final Report (March 2016) on the Victorian Household Utility Consumption Survey 2015',
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>
            Average total electricity charge revised to $1,455, representing 55%
            increase since 2007 (formerly $1,284 and 35%)
          </li>
          <li>
            Monthly summer electricity consumption charge revised to $84 and
            monthly winter charge revised to $90 per month (formerly $72 and $75
            respectively)
          </li>
        </ul>
        <p className="text-sm text-neutral-500">
          Victorian Utility Consumption Household Survey .{' '}
          <a
            href="https://www.dffh.vic.gov.au/publications/victorian-utility-consumption-household-surveyt"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-700 hover:text-indigo-500 inline-flex items-center gap-1"
          >
            View source
            <span aria-hidden>↗</span>
          </a>
        </p>
      </div>
    ),
    defaultOpen: false,
  },
]

// -- Web Review data
export const desktopResearchWebReviewData: AccordionItem[] = [
  {
    title: 'Reviews on the Web',
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>😈 Too many scams</li>
          <li>👻 No response</li>
          <li>💰 Need to pay to message to some limited posts</li>
          <li>
            🧨 Plan is too expensive and the term is too short to find right one
          </li>
          <li>😵‍💫 Unreliable</li>
        </ul>
        <p className="text-sm text-neutral-500">
          Researchd in Reddit, Productreview.com{' '}
          <a
            href="https://docs.google.com/spreadsheets/d/1nHeQITd0MsAimj1lIKM2TzPqrt5fGwoAIt-8cN9OcE4/edit#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-700 hover:text-indigo-500  inline-flex items-center gap-1"
          >
            Gathered Reviews and comments
            <span aria-hidden className="text-xs">
              ↗
            </span>
          </a>
        </p>
      </div>
    ),
    defaultOpen: true,
  },
]
