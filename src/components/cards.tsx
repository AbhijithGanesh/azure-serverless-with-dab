interface CardProps {
  title: string;
  created_at: Date;
}

export default function Card(props: CardProps) {
  return (
    <div>
      <div className="rounded-md border-[0.5px]">
        <div className="flex items-center justify-between p-4">
          <div className="grid gap-1">
            <a
              className="font-semibold hover:underline"
              href="/"
            >
              Untitled Post
            </a>
            <div>
              <p className="text-sm text-muted-foreground">May 27, 2023</p>
            </div>
          </div>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
            className="flex h-8 w-8 items-center justify-center transition-colors rounded-full hover:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
            <span className="sr-only">Open</span>
          </button>
        </div>
      </div>
    </div>
  );
}
