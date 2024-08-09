'use client';
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import Header from '@/components/Header'
import { Editor } from './ui/editor/Editor';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import ActiveCollaborators from './ActiveCollaborators';



const CollaborativeRoom = ({ roomId, roomMetadata,  }: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
    <ClientSideSuspense fallback={<div>Loading…</div>}>
      <div className='collaborative-room'>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className='document-title'>Share</p>
        </div>
        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />

              {/* <ShareModal 
                roomId={roomId}
                collaborators={users}
                creatorId={roomMetadata.creatorId}
                currentUserType={currentUserType}
              /> */}

              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
      </Header>
      <Editor  />
      </div>
    </ClientSideSuspense>
  </RoomProvider>
  )
}

export default CollaborativeRoom