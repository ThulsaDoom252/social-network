import React from 'react'

const UsersTemplate = ({ emptyUsers, defaultUserAvatar }) => {
     return (
          <>
               <div className={'users-page-title'}>USERS</div>
               <div className='users-list-grid'>
                    {emptyUsers.map(user =>
                         <div className='user-block' key={user.id}>
                              <div>
                                   <div className={'user-avatar-item'}>
                                        <img className={'user-avatar'}
                                             alt={'profile-picture'}
                                             src={defaultUserAvatar} />
                                   </div>
                              </div>
                              <div className={'user-data-block'}>
                                   <p className={'users-page-user-name'}>Loading..</p>
                                   <p className={'users-page-user-status'}>Loading..</p>
                                   <button className={'user-follow-btn'}
                                   >Follow
                                   </button>
                              </div>
                         </div>
                    )}
               </div>
          </>

     )
}

export default UsersTemplate