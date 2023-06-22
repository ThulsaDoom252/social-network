import React from 'react';
import IconsBar from "./IconsBar";

const WallSections = ({
                          0: name, 1: firstPost, 2: secondPost, 3: largePhoto, 4: defaultAvatar, 5: isPostSectionActive,
                          6: isMediaSectionActive, 7: isLikesSectionActive, 8: isRepliesSectionActive
                      }) => {
    const postData = [{name: name, post: firstPost, secondPost: secondPost, largePhoto: largePhoto},
        {name: name, post: secondPost, largePhoto: largePhoto}]
    const plug = "wall-section-container"
    return (
        <div>
            {isPostSectionActive &&
                <div>
                    {postData.map(postData => <div className={"profile-post-container"} key={postData.post}>
                            <img className="profile-post-avatar"
                                 src={postData.largePhoto ? postData.largePhoto : defaultAvatar}
                                 alt="large photo"/>
                            <div className={"profile-post-block"}>
                                <p className={"profile-post-user-name"}>{postData.name}</p>
                                <p className={"profile-post-text"}>{postData.post}</p>
                                <IconsBar/>
                            </div>
                        </div>
                    )}
                </div>
            }
            {isMediaSectionActive && <div className={plug}>No Media here yet...</div>}
            {isLikesSectionActive && <div className={plug}>No Likes here yet...</div>}
            {isRepliesSectionActive && <div className={plug}>No Replies here yet...</div>}
        </div>

    );
}

export default WallSections;