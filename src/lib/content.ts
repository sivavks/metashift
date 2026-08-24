export interface ReflectionQuestion {
  id: string;
  prompt: string;
  options: [string, string];
}

export const reflectionQuestions: ReflectionQuestion[] = [
  {
    id: "react",
    prompt: "When things go wrong…",
    options: ["I react automatically", "I pause and observe"],
  },
  {
    id: "success",
    prompt: "Who defined success for you?",
    options: ["I did, consciously", "Somewhere, someone else did"],
  },
  {
    id: "watching",
    prompt: "If no one was watching, would you still want this life?",
    options: ["Without hesitation", "I'd have to think about it"],
  },
];

export const osComparison = {
  traditional: ["Habits", "Goals", "Productivity", "Motivation"],
  metashift: ["Identity", "Beliefs", "Awareness", "Purpose"],
};

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    id: "awareness",
    title: "Awareness",
    description: "See the program running you.",
  },
  {
    id: "clarity",
    title: "Clarity",
    description: "Separate what's yours from what you inherited.",
  },
  {
    id: "shift",
    title: "Shift",
    description: "Rewrite the belief. Not the behavior.",
  },
  {
    id: "practice",
    title: "Practice",
    description: "Install it until it's who you are.",
  },
  {
    id: "legacy",
    title: "Legacy",
    description: "Build a life that was never on autopilot.",
  },
];

export const reflectionAreas: string[] = [
  "Career",
  "Relationships",
  "Purpose",
  "Health",
  "Confidence",
  "Leadership",
  "Something Else",
];

export const firstShiftWhoFor: string[] = [
  "You sense something is running you, but can't name it yet.",
  "You've done the books, the podcasts, the frameworks — and still feel stuck.",
  "You're ready to be looked at, not just to look.",
  "You'd rather ask one real question than collect ten more answers.",
];

export const firstShiftWhoNotFor: string[] = [
  "You want a quick fix or a step-by-step system.",
  "You're looking for group therapy or crisis support.",
  "You want to be told what to do.",
  "You're not willing to be honest in a room with strangers.",
];

export interface FirstShiftMoment {
  title: string;
  description: string;
}

export const firstShiftMoments: FirstShiftMoment[] = [
  { title: "Arrival", description: "Twenty people, one room, no phones." },
  {
    title: "Naming",
    description: "A guided process to surface the belief actually running your life.",
  },
  {
    title: "The turn",
    description: "Separating what's yours from what you inherited.",
  },
  {
    title: "The room",
    description: "You're not doing this alone. Twenty perspectives change what one person can see.",
  },
  {
    title: "The shift",
    description: "You leave with one belief rewritten. Not ten action items.",
  },
];

export const firstShiftDifference: string[] = [
  "Not a framework. A mirror.",
  "Not a lecture. A room.",
  "Not motivation. Awareness.",
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const firstShiftFaqs: FaqItem[] = [
  {
    question: "Do I need to prepare anything?",
    answer: "No. Just come as you are — that's the only requirement.",
  },
  {
    question: "What if I don't know what's ‘running’ me?",
    answer: "Almost no one does at the start. That's what the three hours are for.",
  },
  {
    question: "Is this therapy?",
    answer: "No. MetaShift isn't a substitute for therapy. It's a space for awareness, not treatment.",
  },
  {
    question: "Will I have to share personal things in front of strangers?",
    answer: "Only what you choose to. The room is built for honesty, not exposure.",
  },
  {
    question: "What happens after?",
    answer:
      "Some people stop there. Most continue with The Journey — MetaShift's five-session path to actually rewrite what you saw.",
  },
];

export const thoughtExperiments: string[] = [
  "What belief have you never questioned?",
  "What if your biggest goal isn't actually yours?",
  "What are you building that will outlast you?",
  "Whose voice is it, when you judge yourself?",
  "Who programmed you — and did you ever agree to it?",
  "If you removed your job from your identity, who's left?",
];
