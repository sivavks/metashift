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

export const thoughtExperiments: string[] = [
  "What belief have you never questioned?",
  "What if your biggest goal isn't actually yours?",
  "What are you building that will outlast you?",
  "Whose voice is it, when you judge yourself?",
  "Who programmed you — and did you ever agree to it?",
  "If you removed your job from your identity, who's left?",
];
