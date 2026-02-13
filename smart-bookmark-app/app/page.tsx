'use client'

import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border border-gray-800 rounded-xl p-8 shadow-lg bg-gradient-to-b from-black to-gray-900">
        
        {/* App Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Smart Bookmark App
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400 mb-8">
          Save, manage, and sync your bookmarks securely in real-time
        </p>

        {/* Sign in Button */}
        <button
          onClick={signIn}
          className="w-full flex items-center justify-center gap-3 border border-gray-700 rounded-lg py-3 hover:bg-gray-800 transition"
        >
          {/* Google Icon */}
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303C33.916 32.673 29.345 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="M6.306 14.691l6.571 4.819C14.655 16.108 19.001 12 24 12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.344 4.312-17.694 10.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.197l-6.19-5.238C29.192 35.091 26.715 36 24 36c-5.324 0-9.885-3.307-11.286-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303c-1.011 2.698-2.929 4.983-5.084 6.565l.003-.002 6.19 5.238C35.971 40.205 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"
            />
          </svg>

          <span className="font-medium">
            Sign in with Google
          </span>
        </button>

        {/* Footer note */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Your bookmarks are private and synced securely
        </p>
      </div>
    </div>
  )
}