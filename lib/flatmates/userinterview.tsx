// types
import { AccordionItem, insightRecommendationPairItem } from '@/types'

// flatmate's UserInterview
// -- Interview Conditions and Questions
export const userInterviewConditionsData: AccordionItem[] = [
  {
    title: 'Conditions',
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>3 participants</li>
          <li>In-Person Interview</li>
          <li>
            International student, 20-30 years old, working as a part-timer or
            seeking a part-time job
          </li>
        </ul>
        <p className="text-sm text-neutral-500">
          ※ Tried to recruit local students but they seem to use other app, so
          recruited International students
        </p>
      </div>
    ),
    defaultOpen: true,
  },
  {
    title: 'Questions',
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>What was the situation when you used the flatmates app?</li>
          <li>
            What was your ideal condition when you were looking for a room? e.g.
            rent, suburb, location....etc
          </li>
          <li>
            Could you tell me your lifestyle when you were looking for a place?
            (weekdays/weekends)
          </li>
          <li>How was your experience on Flatmate&apos;s app?</li>
          <li>How was your experience on completing your profile?</li>
          <li>How often did you update your status/profile?</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
]

// -- Insight and Recommendation

export const insightRecommendationPairsData: insightRecommendationPairItem[] = [
  {
    insightTitle:
      'Location information (Map view) may be very useful for users',
    insightContent: (
      <p className="text-base">
        Students who are not local may not be familiar with the area and
        surrounding suburbs.
      </p>
    ),
    recTitle: 'Organize and enhance information on the map view',
    recContent: (
      <ul className="font-light list-disc space-y-1 text-base pl-5 pr-4 pb-2">
        <li>
          Enhance the usability of the map view to help users understand
          locations better
        </li>
        <li>
          Provide clearer visual cues for suburbs, transport, and nearby
          facilities
        </li>
        <li>Reduce mismatches by supporting spatial understanding</li>
      </ul>
    ),
    defaultOpen: true,
  },
  {
    insightTitle:
      'Lack of organization in information causes numerous mismatches',
    insightContent: (
      <p className="text-base">
        Users think it is difficult and time-consuming to find ideal places and
        send messages to the right owners.
      </p>
    ),
    recTitle: 'Show users more relevant and structured information',
    recContent: (
      <ul className="font-light list-disc space-y-1 text-base pl-6 pr-4 pb-2">
        <li>
          Group listings by key conditions such as budget, location, and
          lifestyle
        </li>
        <li>
          Highlight important attributes to reduce unnecessary comparisons
        </li>
      </ul>
    ),
  },
  {
    insightTitle:
      'Certain conditions (reliability, cultural fit, cleanliness) are very important',
    insightContent: (
      <p className="text-base">
        People who are new to a place may not be familiar with local housing
        culture and expectations.
      </p>
    ),
    recTitle: 'Let users take actions (message, save) more easily',
    recContent: (
      <ul className="font-light list-disc space-y-1 text-base pl-6 pr-4 pb-2">
        <li>Surface key conditions early so users can decide faster</li>
        <li>
          Reduce the number of steps required to save or message a listing
        </li>
        <li>Encourage meaningful interactions instead of random messaging</li>
      </ul>
    ),
  },
]
