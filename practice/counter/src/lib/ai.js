export const milestones = [5, 10, 25, 50, 75, 100, 250, 500, 1000];

export function mockAiMessage(value) {
  if (value === 0)   return "Fresh start! Let’s stack tiny wins. 🚀";
  if (value < 5)     return "Baby steps = quantum progress. Keep tapping! ✨";
  if (value < 10)    return "Momentum unlocked. Can you feel the rhythm? 🥁";
  if (value < 25)    return "Neurons firing. Micro-habits turning macro. 🧠";
  if (value < 50)    return "You’re compounding like a pro investor. 📈";
  if (value < 75)    return "Discipline looks good on you. Keep going. 💪";
  if (value < 100)   return "Double digits heat. Triple digits next. 🔥";
  if (value < 250)   return "Hundreds club loading… you’re different. 🌟";
  if (value < 500)   return "Elite consistency. Most people stop. You didn’t. 🏁";
  if (value < 1000)  return "Half-thousand! Your future self says thanks. 🙌";
  return "Legend status. 4 digits. Build. Repeat. Inspire. 🏆";
}