"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex max-w-md mx-auto rounded-lg overflow-hidden border border-gray-300 shadow-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 text-gray-900 text-sm focus:outline-none bg-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-[#1e3a8a] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
