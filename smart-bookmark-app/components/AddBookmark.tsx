'use client'

import { supabase } from '@/lib/supabaseClient'
import { useState } from 'react'

export default function AddBookmark({ userId }: { userId: string }) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const addBookmark = async () => {
    if (!title || !url) return

    await supabase.from('bookmarks').insert({
      title,
      url,
      user_id: userId
    })

    setTitle('')
    setUrl('')
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="border p-2 flex-1"
        placeholder="URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <button
        onClick={addBookmark}
        className="bg-blue-600 text-white px-4"
      >
        Add
      </button>
    </div>
  )
}