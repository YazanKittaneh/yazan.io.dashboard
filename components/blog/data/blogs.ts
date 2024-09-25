export const blog = [
  {
    id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
    name: 'William Smith',
    email: 'williamsmith@example.com',
    title: 'Meeting Tomorrow',
    text: 'Hi, let\'s have a meeting tomorrow to discuss the project. I\'ve been reviewing the project details and have some ideas I\'d like to share. It\'s crucial that we align on our next steps to ensure the project\'s success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William',
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['coding', 'Real Estate', 'Palestine'],
  },
  {
    id: '110e8400-e29b-11d4-a716-446655440000',
    name: 'Alice Smith',
    email: 'alicesmith@example.com',
    title: 'Re: Project Update',
    text: 'Thank you for the project update. It looks great! I\'ve gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I\'ll include in the attached document.\n\nLet\'s discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice',
    date: '2023-10-22T10:30:00',
    read: true,
    labels: ['coding', 'Real Estate'],
  },
  {
    id: '3e7c3f6d-bdf5-46ae-8d90-171300f27ae2',
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    title: 'Weekend Plans',
    text: 'Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It\'s been a while since we had some outdoor fun.\n\nIf you\'re interested, let me know, and we can plan the details. It\'ll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob',
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['Palestine'],
  },
  {
    id: '61c35085-72d7-42b4-8d62-738f700d4b92',
    name: 'Emily Davis',
    email: 'emilydavis@example.com',
    title: 'Re: Question about Budget',
    text: 'I have a question about the budget for the upcoming project. It seems like there\'s a discrepancy in the allocation of resources.\n\nI\'ve reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project\'s quality.\n\nI\'ve attached a detailed analysis for your reference. Let\'s discuss this further in our next meeting.\n\nThanks, Emily',
    date: '2023-03-25T13:15:00',
    read: false,
    labels: ['Palestine', 'coding'],
  },
  {
    id: '8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97',
    name: 'Michael Wilson',
    email: 'michaelwilson@example.com',
    title: 'Important Announcement',
    text: 'I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We\'ve received valuable feedback from our beta testers, and I believe it\'s time to make some adjustments to better meet our customers\' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael',
    date: '2023-03-10T15:00:00',
    read: false,
    labels: ['coding', 'Palestine', 'Real Estate'],
  },
  {
    id: '1f0f2c02-e299-40de-9b1d-86ef9e42126b',
    name: 'Sarah Brown',
    email: 'sarahbrown@example.com',
    title: 'Re: Feedback on Proposal',
    text: 'Thank you for your feedback on the proposal. It looks great! I\'m pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI\'ve attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah',
    date: '2023-02-15T16:30:00',
    read: true,
    labels: ['coding'],
  },
]

export type Blog = (typeof blog)[number]

export const accounts = [
  {
    label: 'Alicia Koch',
    email: 'alicia@example.com',
    icon: 'ion:logo-vercel',
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@gmail.com',
    icon: 'mdi:google',
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@me.com',
    icon: 'bx:bxl-gmail',
  },
]

export type Account = (typeof accounts)[number]

export const contacts = [
  {
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
  },
  {
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com',
  },
  {
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com',
  },
  {
    name: 'Noah Martinez',
    email: 'noah.martinez@example.com',
  },
  {
    name: 'Ava Taylor',
    email: 'ava.taylor@example.com',
  },
  {
    name: 'Lucas Brown',
    email: 'lucas.brown@example.com',
  },
  {
    name: 'Sophia Smith',
    email: 'sophia.smith@example.com',
  },
  {
    name: 'Ethan Wilson',
    email: 'ethan.wilson@example.com',
  },
  {
    name: 'Isabella Jackson',
    email: 'isabella.jackson@example.com',
  },
  {
    name: 'Mia Clark',
    email: 'mia.clark@example.com',
  },
  {
    name: 'Mason Lee',
    email: 'mason.lee@example.com',
  },
  {
    name: 'Layla Harris',
    email: 'layla.harris@example.com',
  },
  {
    name: 'William Anderson',
    email: 'william.anderson@example.com',
  },
  {
    name: 'Ella White',
    email: 'ella.white@example.com',
  },
  {
    name: 'James Thomas',
    email: 'james.thomas@example.com',
  },
  {
    name: 'Harper Lewis',
    email: 'harper.lewis@example.com',
  },
  {
    name: 'Benjamin Moore',
    email: 'benjamin.moore@example.com',
  },
  {
    name: 'Aria Hall',
    email: 'aria.hall@example.com',
  },
  {
    name: 'Henry Turner',
    email: 'henry.turner@example.com',
  },
  {
    name: 'Scarlett Adams',
    email: 'scarlett.adams@example.com',
  },
]

export type Contact = (typeof contacts)[number]
