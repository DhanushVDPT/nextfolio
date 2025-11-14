import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>Dhanush | Institute</title>
            </Head>
            <div class="questseekers">
                <div class="questtext">
                    <p id="quest">Questseekers</p>
                    <p>I taught in the 7A class of Shatabai Ladkat High School, Pune for three weeks. I started with maths on my first week, followed by Reading Comprehension, and English Writing.</p>
                </div>
                <Image alt="questseekers" className="questimg" src="/questseekers.png" width={322} height={241.5}></Image>
            </div>
            <div class="collab">
                <div class="collabtext">
                    <p id="collab">My Collab</p>
                    I had an amazing collab - Satyajeet, Shibanie and Sini to help me in teaching this class.
                </div>
                <Image alt="collab" className="collabimg" src="/collab.png" width={320} height={320}></Image>
            </div>
            <div class="lothers">
                <div class="lothersheading">
                    <p id="instiothers">Leading Others</p>
                </div>
                <div class="lotherscontent">
                    <div class="instidiscussions">
                        <Image className="lothersimg" alt="lothers1" src="/leadingothers1.png" width={268.8} height={201.6}></Image>
                        <p>One-on-one discussions with students discussing their errors in home works</p>
                        </div>
                    <div class="insticommunity">
                        <Image className="lothersimg" alt="lothers3" src="/leadingothers3.png" width={259.2} height={194.4}></Image>
                        <p>Community visit to understand the contexts and environments for learning at homes of students</p>
                    </div>
                    <div class="instiholistic">
                        <Image className="lothersimg" alt="lothers2" src="/leadingothers2.png" width={280} height={210}></Image>
                        <p>Encouraging Holistic Development</p>
                    </div>
                </div>
            </div>
            <div class="lself">
                <div class="lselfheading">
                    <p id="instiself">Leading Self</p>
                </div>
                <div class="lselfcontent">
                    <video class="selfvideo" controls src="/leadingself.mp4" type="video/mp4"></video>
                    <p class="lselftext">I have personally never liked to participate in dances and other such activities. But when some of my students wanted to do this with me during Palkhi celebrations, I felt that doing this will help me connect better with students and would make me more approachable to them as well. The kid kept telling me repeatedly that she enjoyed it the best with me.</p>
                </div>
            </div>
            <div class="lindia">
                <div class="lindiaheading">
                    <p id="instiindia">Leading India</p>
                </div>
                <div class="lindiacontent">
                    <div class="instidiscussions">
                        <Image className="lindiaimg" alt="lindia1" src="/leadingindia1.png" width={227.25} height={170}></Image>
                        <p>Understanding construction and resource optimization</p>
                    </div>
                    <div class="instiholistic">
                        <Image className="lindiaimg" alt="lindia2" src="/leadingindia2.png" width={173} height={130.5}></Image>
                        <p>Students proposing new laws to improve gender equality in the country</p>
                    </div>
                    <div class="insticommunity">
                        <Image id="bigindia" className="lindiaimg" alt="lindia3" src="/leadingindia3.png" width={399.75} height={224.75}></Image>
                        <p>Improved collaboration between boys and girls.</p>
                    </div>
                </div>
                <br></br>
                <p id="instip">I have observed how not being able to access English education in the early years hinders progress in all other subjects, affecting their confidence and motivation.<br></br><br></br></p>
            </div>
        </>
    )
}
