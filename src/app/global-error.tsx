"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex flex-col gap-8 min-h-screen items-center justify-center">
          {/* Headline */}
          <h2 className="text-custom-main font-bold text-6xl">
            Something went wrong !!
          </h2>

          {/* Description */}
          <p className="font-semibold text-2xl">{error.message}</p>

          {/* Reset */}
          <Button className="px-10" onClick={() => reset()}>
            Try again
          </Button>
        </main>
      </body>
    </html>
  );
}
