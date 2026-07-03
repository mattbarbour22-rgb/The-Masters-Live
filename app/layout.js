import './globals.css';

export const metadata = {
  title: 'The Masters Pick 3 Live',
  description: 'Live Pick 3 golf pool leaderboard for the 91st Masters.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
