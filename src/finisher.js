import React from 'react';
import faker from 'faker';


const Finisher = () => {
    return (

    <div>

        {/*Icon*/}
        <h2 class="ui center aligned icon header">
            <i class="sticky note icon"></i>
            Finishers
        </h2>
        <br></br>

            {/*Comments*/}
            <div class="ui centered card">
                <div class="content">

                <div class="ui comments">

                    <h3 class="ui dividing header">Comments</h3>

                        <div class="comment">
                            <a class="avatar">
                                <img src={faker.image.nature()} />
                            </a>

                            <div class="content">
                                <a class="author">Matt</a>
                            <div class="metadata">
                                <span class="date">Today at 5:42PM</span>
                            </div>
                            <div class="text">
                                20:47...dead
                            </div>
                            <div class="actions">
                                <a class="reply">Reply</a>
                            </div>

                            </div>
                        </div>

                        <div class="comment">
                            <a class="avatar">
                                <img src={faker.image.cats()}/>
                            </a>

                            <div class="content">
                                <a class="author">Elliot Fu</a>
                                <div class="metadata">
                                    <span class="date">Yesterday at 12:30AM</span>
                                </div>

                            <div class="text">
                                <p>18:15 only did 6 rounds : /</p>
                            </div>
                            <div class="actions">
                                <a class="reply">Reply</a>
                            </div>
                            </div>
                            <div class="comments">
                            <div class="comment">
                                <a class="avatar">
                                    <img src={faker.image.animals()}/>
                                </a>

                                <div class="content">
                                <a class="author">Jenny Hess</a>
                                <div class="metadata">
                                    <span class="date">Just now</span>
                                </div>
                                <div class="text">
                                    Great pace for 6 rounds!
                                </div>
                                <div class="actions">
                                    <a class="reply">Reply</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="comment">
                            <a class="avatar">
                            <img src={faker.image.abstract()}/>
                            </a>
                            <div class="content">
                            <a class="author">Joe Henderson</a>
                            <div class="metadata">
                                <span class="date">5 days ago</span>
                            </div>
                            <div class="text">
                                15:00 and crapped myself... PR
                            </div>
                            <div class="actions">
                                <a class="reply">Reply</a>
                            </div>
                            </div>
                        </div>

                        <form class="ui reply form">
                            <div class="field">
                            <textarea></textarea>
                            </div>
                            <div class="ui blue labeled submit icon button">
                            <i class="icon edit"></i> Add Reply
                            </div>
                        </form>
                    </div>
                    </div>
                </div>

                <br></br>
                
            </div>
    );
};

export default Finisher