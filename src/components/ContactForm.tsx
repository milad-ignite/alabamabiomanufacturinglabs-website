"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm text-gray-700 mb-1.5">Your First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1.5">
          Your Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1.5">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          placeholder="Type your message here"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b5bdb] focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3.5 bg-[#101840] text-white text-sm font-medium rounded-full hover:bg-[#1e2d60] transition-colors"
      >
        Submit Your Information
      </button>
    </form>
  );
}
