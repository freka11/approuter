'use client'

export default function Error() {
  return (
      <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <div className="mx-auto mb-8 max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold">Posts</h1>
      </div> 
      <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-900">
            <strong className="block text-lg">Unable to load posts</strong>
          </div>
      </div>
        
      </div>
  )
}
