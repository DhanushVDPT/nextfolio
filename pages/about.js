import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>Dhanush | About</title>
            </Head>
            <div class="aboutme2">
                <div class="abouttext">
                    <p id="hi">About Me</p>
                    <p>
                        I am V Dhanush Pavan Teja. I am from a small village called Ponnamanda in the Konaseema district of Andhra Pradesh. I did my schooling till grade 12 in Hyderabad. Then I went to Chennai for my degree and graduated with a major in Biological Engineering.<br></br>
                        <br></br>My interests (other than teaching) include cricket and movies. I am an avid binge-watcher of cinema, cricket, TV shows, documentaries, anime, etc. (basically anything and everything). I love analyzing cricket and cinema.<br></br>
                        <br></br>I joined this fellowship because I have always loved teaching. I grew up surrounded by many of my relatives who were/are teachers. In my first semester of college, I got the chance to teach a 10th grade classroom in a local government school twice a week as part of an NSS project. Since then I wanted to pursue teaching as a profession. Luckily I came across Teach For India during a Pre-Placement Talk session in my college.<br></br>
                    </p>
                </div>
                <div class="dpimg">
                    <Image className="aboutmeimg" alt="dhanush" src="/dpimg.jpg" width={280} height={280}></Image>
                </div>
            </div>
            <br></br><br></br>
        </>
    )
}
