import React from 'react';
import vg from "../assets/OIP3.jpeg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home' id="home" >
                <main>
                    <h1>ReactView</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, commodi non! Pariatur amet odit facere natus reprehenderit dignissimos debitis dolor accusamus fugit expedita voluptatibus, dolorum eaque? Fugit, repudiandae minima quam sit cupiditate ut accusantium unde doloremque sapiente laborum dolore eos amet beatae recusandae totam odio esse autem inventore obcaecati ipsa?
                    </p>
                </div>
            </div>
            <div className="home3" id="about" >
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam autem voluptas reiciendis enim asperiores quo architecto cum, rerum ex, aut maxime a quae porro voluptates nemo minus qui, ipsum delectus ut amet dolorum! Exercitationem necessitatibus dolor fuga qui possimus, nihil molestiae cum error molestias pariatur voluptas iure assumenda, praesentium voluptate optio incidunt ullam iusto. Dignissimos quasi in laboriosam! Quaerat quo alias cupiditate sunt ea reprehenderit ex impedit. Blanditiis molestias, vel tenetur molestiae, quae nulla amet error temporibus perspiciatis et in!
                    </p>
                </div>
            </div>
            <div className="home4" id="brands" >
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home