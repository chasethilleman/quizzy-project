# Quizzy

Quizzy is a fun and interactive quiz app built with React and Vite. It fetches trivia questions from the Open Trivia Database API and lets users test their knowledge on a variety of topics.

## Features

- Fetches 5 random trivia questions from the Open Trivia Database
- Multiple choice and true/false questions
- Select answers and check if you are correct
- Highlights correct and incorrect answers after submission
- Confetti animation for a perfect score (using `react-confetti`)
- Responsive and modern UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chasethilleman/quizzy-project.git
   cd quizzy-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173) to use the app.

## Usage

1. Click "Start Quiz" to begin.
2. Select an answer for each question.
3. Click "Check Answers" to see which answers are correct or incorrect.
4. If you get all answers correct, enjoy a confetti celebration!
5. Refresh the page to play again with new questions.

## Tech Stack

- React
- Vite
- Open Trivia Database API
- react-confetti
- clsx

## License

MIT
