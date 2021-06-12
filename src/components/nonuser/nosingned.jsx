import React, { Component } from 'react'
import Logo from '../../img/Netflix-Logo.wine.svg'
import Part1 from '../../img/part1.png'
import Part2 from '../../img/part2.jpg'
import Part3 from '../../img/part3.png'
import Kids from '../../img/kids.png'
import './nonuser.css'
import Button from '@material-ui/core/Button'
import {provider, auth} from '../../firebase'
import {actionTypes} from '../../reducer'
import {useStateValue} from '../../StateProvider'
function NoSigned() {
    const [state, dispatch] = useStateValue()
    const handleSignIn = () =>{
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result.user);
        }).catch((error)=>alert(error.message))
    }
    return(
        <React.Fragment>
                <section className="container">
                    <div className="head">
                        <img src={Logo} alt="" />
                        <Button onClick={handleSignIn} variant="contained" color="secondary" size="medium">Sign In</Button>
                    </div>
                </section>
                <section className="banner">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8dc3f88b-a96a-4d8a-af9a-a69e6f3b2506/9757981b-f1ab-4521-a2e4-00aa0f3a4f43/UZ-en-20210524-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" className="fit"/>
                    <div className="box">
                        <div className="heading">
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h4>Watch anywhere. Cancel anytime.</h4>
                            <p>Ready to watch ? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className="search">
                            <Button onClick={handleSignIn} variant="contained" color="secondary" size="large">
                                Get started
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="part1">
                    <div className="talk">
                        <h1>Enjoy on your TV.</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="img">
                        <img src={Part1} alt="" />
                    </div>
                </section>
                <section className="part1">
                    <div className="img">
                        <img src={Part2} alt="" className="img111"/>
                        <div className="download">
                            <div className="gif">
                                <div className="left-down">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png " alt="" className="fit2"/>
                                    <div className="sp">
                                    <p>Strange Things</p>
                                    <span className="downloading">Downloading...</span> 
                                    </div>
                                </div>
                                <div className="right-down">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="talk">
                        <h1>Download your shows to watch offline.</h1>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                </section>
                <section className="part1">
                    <div className="talk">
                        <h1>Watch everywhere.</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                    </div>
                    <div className="img">
                        <img src={Part3} alt="" />
                    </div>
                </section>
                <section className="part1">
                    <div className="img">
                        <img src={Kids} alt="" />
                    </div>
                    <div className="talk">
                        <h1>Create profiles for kids.</h1>
                        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                </section>
                <section className="list">
                    <h1>Frequently Asked Questions</h1>
                    <div className="accordion-menu">
                        <div className="item" id="item1">
                            <a href="#item1" className="tittle">
                                <span>What is Netflix ?</span>
                                <i className="icon"></i>
                            </a>
                            <p className="text">
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>

                            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </p>
                        </div>
                        <div className="item" id="item2">
                            <a href="#item2" className="tittle">
                                <span>How much Netflix cost ?</span>
                                <i className="icon"></i>
                            </a>
                            <p className="text">
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
                            </p>
                        </div>
                        <div className="item" id="item3">
                            <a href="#item3" className="tittle">
                                <span>Where can I watch ?</span>
                                <i className="icon"></i>
                            </a>
                            <p className="text">
                            Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>

                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </p>
                        </div>
                        <div className="item" id="item4">
                            <a href="#item4" className="tittle">
                                <span>How do I cancel ?</span>
                                <i className="icon"></i>
                            </a>
                            <p className="text">
                            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="last">
                    <p>Ready to watch ? Enter your email to create or restart your membership.</p>
                    <Button onClick={handleSignIn} variant="contained" color="secondary" size="large">
                        Get started
                    </Button>
                </div>
                <section className="footer"> 
                    <div className="one">
                        <ul className="items">
                            <li><a href="https://help.netflix.com/support/412">FAQ</a></li>
                            <li><a href="http://ir.netflix.com/">Investor Relations</a></li>
                            <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                            <li><a href="https://fast.com/">Speed Test</a></li>
                        </ul>
                        <ul className="items">
                            <li><a href="https://help.netflix.com/">Help Center</a></li>
                            <li><a href="https://jobs.netflix.com/jobs">Jobs</a></li>
                            <li><a href="https://www.netflix.com/uz/#">Cookie Preferences</a></li>
                            <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div className="one">
                        <ul className="items">
                            <li><a href="https://www.netflix.com/youraccount">Account</a></li>
                            <li><a href="https://www.netflix.com/watch">Ways to Watch</a></li>
                            <li><a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                            <li><a href="https://www.netflix.com/uz/browse/genre/839338">Netflix Originals</a></li>
                        </ul>
                        <ul className="items">
                            <li><a href="https://media.netflix.com/">Media Center</a></li>
                            <li><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                            <li><a href="https://help.netflix.com/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </section>
            </React.Fragment>
    )
}
export default NoSigned;




            