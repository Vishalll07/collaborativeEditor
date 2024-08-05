import Header from '@/components/Header'
import { Editor } from '@/components/ui/editor/Editor'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'


const Document = () => {
  return (
    <div>
      
      <Editor />
    </div>
  )
}

export default Document