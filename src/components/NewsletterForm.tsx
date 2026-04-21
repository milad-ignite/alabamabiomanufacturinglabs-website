"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-[#1e3a8a] transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
