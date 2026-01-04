// types
import { AccordionItem } from '@/types'

// flatmate's User Testing
// -- User Testing Conditions and Questions
export const userTestingConditionsData: AccordionItem[] = [
  {
    title: 'Conditions',
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>3 participants</li>
          <li>Zoom Interview with the low-fidelity prototype</li>
          <li>
            International student, 20-30 years old, working as a part-timer or
            seeking a part-time job
          </li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
]
