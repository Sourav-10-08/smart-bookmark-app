'use client'

import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchBookmarks = async () => {
    console.log('Fetching bookmarks...')

    const { data, error } = await supabase
      .from('bookmarks')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Fetch error:', error)
      return
    }

    console.log('Fetched data:', data)
    setBookmarks(data || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchBookmarks()
  }, [])

  if (loading) return <p>Loading bookmarks...</p>

  return (
    <div className="mt-6">
      {bookmarks.length === 0 && (
        <p className="text-gray-400">No bookmarks yet</p>
      )}

      <ul className="space-y-2">
        {bookmarks.map(b => (
          <li
            key={b.id}
            className="border p-2 flex justify-between"
          >
            <a
              href={b.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              {b.title}
            </a>

            <button
              className="text-red-500"
              onClick={async () => {
                await supabase
                  .from('bookmarks')
                  .delete()
                  .eq('id', b.id)
                fetchBookmarks()
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}