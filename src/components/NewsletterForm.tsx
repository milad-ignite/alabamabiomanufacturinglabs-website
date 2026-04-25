"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex max-w-md mx-auto overflow-hidden border border-gray-300 rounded-sm shadow-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 text-[#1d1e20] text-sm focus:outline-none bg-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-[#101840] text-white text-sm font-medium hover:bg-[#1a2560] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
