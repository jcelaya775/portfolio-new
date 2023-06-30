export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        {/* Buttons */}
        <div className="flex flex-col ml-4">
          <button className="text-left py-1 px-2 mb-2 bg-indigo-700 rounded-lg text-neutral-100">
            Resume
          </button>
          <button className="text-left py-1 px-2 bg-indigo-700 rounded-lg text-neutral-100">
            Blog
          </button>
        </div>
        {/* Sections */}
        <div className="flex flex-col text-right">
          <h2 className="">About</h2>
          <h2 className="text-slate-400">Projects</h2>
          <h2 className="text-slate-400">Experience</h2>
          <h2 className="text-slate-400">Skills</h2>
          <h2 className="text-slate-400">Education</h2>
          <h2 className="text-slate-400">Contact</h2>
        </div>
      </div>
    </div>
  );
}
